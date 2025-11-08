import { useQuery } from "@tanstack/react-query";
import { getAllCategory } from "../../api/category.api";
import { getAllBrand } from "../../api/brand.api";
// import { getAllProduct } from "../../api/product.api";

const ProductFilter = ({ handleFilterProduct }) => {
  const { data, isLoading } = useQuery({
    queryFn: () => getAllCategory(),
    queryKey: ["filterByCategory"],
  });

  const { data: brandData, isLoading: brandDataIsLoading } = useQuery({
    queryFn: () => getAllBrand(),
    queryKey: ["filterByBrand"],
  });

  console.log(data?.data);

  // const { mutate } = useMutation({
  //   mutationFn: (category: string) => getAllProduct({ category }),
  //   mutationKey: ["filterCat"],
  // });

  const handleCategory = (categoryData: string) => {
    // mutate(categoryData);
    handleFilterProduct(categoryData as string);
    console.log(categoryData);
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
          />
          <label htmlFor={item._id}> {item.name}</label>
        </div>
      ))}

      {/* filter by brand title*/}
      <h1 className="text-gray-500 text-md font-semibold mt-2">Brands</h1>

      {/* filter by brand */}
      {brandData?.data.map((item) => (
        <div key={item.createdAt} className="my-1">
          <input type="radio" id={item._id} name="brand" value={item._id} />
          <label htmlFor={item._id}> {item.brand_name}</label>
        </div>
      ))}
    </div>
  );
};

export default ProductFilter;
