import { getAllCategory } from "../../api/category.api";
import { useQuery } from "@tanstack/react-query";

const CategoryFilter = () => {
  const { data, isLoading } = useQuery({
    queryFn: () => getAllCategory(),
    queryKey: ["filterByCategory"],
  });

  if (isLoading) return <div>Loading</div>;

  return (
    <div>
      {data?.data.map(
        (item: { _id: string; name: string; createdAt: string }) => (
          <div key={item.createdAt} className="my-1">
            <input
              type="radio"
              id={item._id}
              name="category"
              value={item._id}
              // onChange={(e) => handleCategory(e.target.value)}
              // onChange={handleFilterForProduct}
            />
            <label htmlFor={item._id}> {item.name}</label>
          </div>
        )
      )}
    </div>
  );
};

export default CategoryFilter;
