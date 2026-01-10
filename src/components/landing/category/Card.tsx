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
    <div className="p-3 border rounded cursor-pointer  bg-purple-50 border-violet-200 hover:shadow-sm hover:shadow-gray-400 transition-all duration-200">
      <div className="flex gap-2">
        <MdOutlineCategory size={22} className="text-violet-500" />
        <h2 className="text-lg text-bold text-violet-800">{category.name}</h2>
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
