import CategoryFilter from "./CategoryFilter";
import BrandFilter from "./BrandFilter";

const ProductFilter = ({ handleFilterBrand, handleFilterCategory }) => {
  return (
    <div className="mt-1">
      {/* filter title */}
      <h1 className="font-semibold text-gray-500 text-md">Categories</h1>

      {/* filter category option */}
      <CategoryFilter handleFilterCategory={handleFilterCategory} />

      {/* filter by brand title*/}
      <h1 className="mt-2 font-semibold text-gray-500 text-md">Brands</h1>

      {/* filter by brand */}
      <BrandFilter handleFilterBrand={handleFilterBrand} />
    </div>
  );
};

export default ProductFilter;
