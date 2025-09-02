import { MdOutlineCategory } from "react-icons/md";
import type { ICategoryResponse } from "../../../types/category.types";

// interface CategoryProps {
//   name?: string;
//   description?: string;
//   _id?: string;
// }

interface IProps {
  category: ICategoryResponse;
}

const CategoryCard: React.FC<IProps> = ({ category }) => {
  return (
    <div className=" border-2 bg-violet-50 border-gray-200 p-3 cursor-pointer transition-all duration-300 hover:transition-y-1">
      <div>
        <MdOutlineCategory size={22} className="text-violet-500" />
      </div>
      <div>
        <h2 className="text-bold text-violet-800 text-lg">{category.name}</h2>
        <p className="text-sm text-gray-500 line-clamp-1">
          {category.description}
        </p>
      </div>
    </div>
  );
};

export default CategoryCard;
