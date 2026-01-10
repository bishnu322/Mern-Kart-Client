import { getAllCategory } from "../../../api/category.api";
import { useQuery } from "@tanstack/react-query";

interface IProps {
  handleFilterCategory: (category: string) => void;
}

const CategoryFilter: React.FC<IProps> = ({ handleFilterCategory }) => {
  // const [category, setCategory] =useState("")
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
            className="flex items-start p-1 rounded  hover:bg-violet-200 hover:cursor-pointer gap-2"
          >
            <input
              type="radio"
              id={item._id}
              name="category"
              value={item._id}
              onChange={(e) => handleFilterCategory(e.target.value)}
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
