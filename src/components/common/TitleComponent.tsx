import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router";

interface IProps {
  title: string;
  sub_title: string;
  link?: string;
}

const TitleComponent: React.FC<IProps> = ({ title, sub_title, link }) => {
  return (
    <div className="w-full">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold text-violet-600">{title}</h1>
        {link && (
          <Link to={link} className="flex gap-2 items-center text-gray-700">
            <p>Explore all</p>
            <FaChevronDown />
          </Link>
        )}
      </div>

      <div>
        <p className="text-[16px] font-semibold text-gray-700">{sub_title}</p>
      </div>
    </div>
  );
};

export default TitleComponent;
