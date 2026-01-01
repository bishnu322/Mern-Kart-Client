import { getAllCategory } from "../../../api/category.api";
import { useQuery } from "@tanstack/react-query";

const CategoryFilter = () => {
  const { data, isLoading } = useQuery({
    queryFn: () => getAllCategory(),
    queryKey: ["filterByCategory"],
  });

  if (isLoading) return <div>Loading</div>;

  return (
    <>
      {data?.data.map(
        (item: { _id: string; name: string; createdAt: string }) => (
          <div
            key={item.createdAt}
            className=" p-1 rounded hover:bg-violet-200 hover:cursor-pointer flex items-start gap-2 "
          >
            <input
              type="radio"
              id={item._id}
              name="category"
              value={item._id}
              // onChange={(e) => handleCategory(e.target.value)}
              // onChange={handleFilterForProduct}
              className="mt-1.5"
            />
            <label htmlFor={item._id}>{item.name}</label>
          </div>
        )
      )}
    </>
  );
};

export default CategoryFilter;
