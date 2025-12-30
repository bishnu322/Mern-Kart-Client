import { useQuery } from "@tanstack/react-query";
import { getAllBrand } from "../../api/brand.api";

const BrandFilter = () => {
  const { data, isLoading } = useQuery({
    queryFn: () => getAllBrand(),
    queryKey: ["filterByBrand"],
  });

  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      {data?.data.map(
        (item: { _id: string; brand_name: string; createdAt: string }) => (
          <div
            key={item.createdAt}
            className=" p-1 rounded hover:bg-violet-200 hover:cursor-pointer flex items-start gap-2 "
          >
            <input
              type="radio"
              id={item._id}
              name="brand"
              value={item._id}
              // onChange={(e) => handleBrand(e.target.value)}
              // onChange={handleFilterForProduct}
              className="mt-1.5"
            />
            <label htmlFor={item._id}> {item.brand_name}</label>
          </div>
        )
      )}
    </>
  );
};

export default BrandFilter;
