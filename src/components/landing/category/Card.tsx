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
    <div className=" bg-purple-50 border border-violet-200 p-3 rounded  cursor-pointer  hover:shadow-sm hover:shadow-gray-400 transition-all duration-200">
      <div className="flex gap-2">
        <MdOutlineCategory size={22} className="text-violet-500" />
        <h2 className="text-bold text-violet-800 text-lg">{category.name}</h2>
      </div>
      <div>
        <p className="text-sm text-gray-500 line-clamp-1">
          {category.description}
        </p>
      </div>
    </div>
  );
};

export default CategoryCard;
