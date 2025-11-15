import { useQuery } from "@tanstack/react-query";
import { getAllCategory } from "../../api/category.api";
import { getAllBrand } from "../../api/brand.api";

interface ProductFilterProps {
  handleFilterProduct: (categoryId: string) => void;
  handleFilterBrand: (brandId: string) => void;
}

const ProductFilter = ({
  handleFilterProduct,
  handleFilterBrand,
}: ProductFilterProps) => {
  // fetching category for filter
  const { data, isLoading } = useQuery({
    queryFn: () => getAllCategory(),
    queryKey: ["filterByCategory"],
  });

  // fetching brand for filter
  const { data: brandData, isLoading: brandDataIsLoading } = useQuery({
    queryFn: () => getAllBrand(),
    queryKey: ["filterByBrand"],
  });

  // handling the value of category
  const handleCategory = (categoryData: string) => {
    handleFilterProduct(categoryData);
  };

  // handling the value of brand
  const handleBrand = (brandData: string) => {
    handleFilterBrand(brandData);
  };

  if (isLoading || brandDataIsLoading) return <div>Loading...</div>;

  return (
    <div className="mt-1">
      {/* filter title */}
      <h1 className="text-gray-500 text-md font-semibold">Categories</h1>

      {/* filter category option */}

      {data?.data.map((item) => (
        <div key={item.createdAt} className="my-1">
          <input
            type="radio"
            id={item._id}
            name="category"
            value={item._id}
            onChange={(e) => handleCategory(e.target.value)}
            // onChange={handleFilterForProduct}
          />
          <label htmlFor={item._id}> {item.name}</label>
        </div>
      ))}

      {/* filter by brand title*/}
      <h1 className="text-gray-500 text-md font-semibold mt-2">Brands</h1>

      {/* filter by brand */}
      {brandData?.data.map((item) => (
        <div key={item.createdAt} className="my-1">
          <input
            type="radio"
            id={item._id}
            name="brand"
            value={item._id}
            onChange={(e) => handleBrand(e.target.value)}
            // onChange={handleFilterForProduct}
          />
          <label htmlFor={item._id}> {item.brand_name}</label>
        </div>
      ))}
    </div>
  );
};

export default ProductFilter;
