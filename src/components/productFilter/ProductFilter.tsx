import CategoryFilter from "./CategoryFilter.tsx";
import BrandFilter from "./BrandFilter.tsx";
import type React from "react";
interface IProps {
  handleFilterProduct: (category: string) => void;
  handleFilterBrand: (brand: string) => void;
}

const ProductFilter: React.FC<IProps> = () => {
  return (
    <div className="mt-1">
      {/* filter title */}
      <h1 className="text-gray-500 text-md font-semibold">Categories</h1>

      {/* filter category option */}
      <CategoryFilter />

      {/* filter by brand title*/}
      <h1 className="text-gray-500 text-md font-semibold mt-2">Brands</h1>

      {/* filter by brand */}
      <BrandFilter />
    </div>
  );
};

export default ProductFilter;
