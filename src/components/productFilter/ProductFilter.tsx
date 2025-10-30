import { useQuery } from "@tanstack/react-query";
import { getAllCategory } from "../../api/category.api";
import { getAllBrand } from "../../api/brand.api";

const ProductFilter = () => {
  const { data, isLoading } = useQuery({
    queryFn: () => getAllCategory(),
    queryKey: ["filterByCategory"],
  });

  const { data: brandData, isLoading: brandDataIsLoading } = useQuery({
    queryFn: () => getAllBrand(),
    queryKey: ["filterByBrand"],
  });

  if (isLoading) return <div>Loading...</div>;

  if (brandDataIsLoading) return <div>Loading...</div>;

  console.log(data?.data);

  return (
    <div className="mt-1">
      {/* filter title */}
      <h1 className="text-violet-800 text-md font-semibold">
        Filter by Category
      </h1>

      {/* filter category option */}

      {data?.data.map((item) => (
        <div key={item.createdAt} className="my-1">
          <input type="radio" id={item._id} name="vehicle1" value={item._id} />
          <label htmlFor={item._id}> {item.name}</label>
        </div>
      ))}

      {/* filter by brand title*/}
      <h1 className="text-violet-800 text-md font-semibold mt-2">
        Filter by Brand
      </h1>

      {/* filter by brand */}
      {brandData?.data.map((item) => (
        <div key={item.createdAt} className="my-1">
          <input type="radio" id={item._id} name="vehicle1" value={item._id} />
          <label htmlFor={item._id}> {item.brand_name}</label>
        </div>
      ))}
    </div>
  );
};

export default ProductFilter;
