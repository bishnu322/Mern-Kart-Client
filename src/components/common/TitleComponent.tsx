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
        <h1 className="font-semibold text-md text-violet-600 sm:text-3xl">
          {title}
        </h1>
        {link && (
          <Link
            to={link}
            className="flex items-center text-sm text-gray-700 gap-2"
          >
            <p>Explore all</p>
            <FaChevronDown />
          </Link>
        )}
      </div>

      <div>
        <p className="p-2 text-sm font-semibold text-gray-700 sm:text-xl ">
          {sub_title}
        </p>
      </div>
    </div>
  );
};

export default TitleComponent;
