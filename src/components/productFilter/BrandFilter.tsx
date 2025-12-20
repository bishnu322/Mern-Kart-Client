import { useQuery } from "@tanstack/react-query";
import { getAllBrand } from "../../api/brand.api";

const BrandFilter = () => {
  const { data, isLoading } = useQuery({
    queryFn: () => getAllBrand(),
    queryKey: ["filterByBrand"],
  });

  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      {data?.data.map(
        (item: { _id: string; brand_name: string; createdAt: string }) => (
          <div key={item.createdAt} className="my-1">
            <input
              type="radio"
              id={item._id}
              name="brand"
              value={item._id}
              // onChange={(e) => handleBrand(e.target.value)}
              // onChange={handleFilterForProduct}
            />
            <label htmlFor={item._id}> {item.brand_name}</label>
          </div>
        )
      )}
    </div>
  );
};

export default BrandFilter;
