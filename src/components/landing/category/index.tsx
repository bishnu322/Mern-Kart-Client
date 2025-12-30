import { useQuery } from "@tanstack/react-query";
import TitleComponent from "../../common/TitleComponent";
import { getAllCategory } from "../../../api/category.api";
import CategoryCard from "./Card";

const CategoryList = () => {
  const { data, isLoading } = useQuery({
    queryFn: () => getAllCategory(),
    queryKey: ["get_all_category"],
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-full h-full mt-6 min-h-[100px]">
        <p className="text-[16px] text-gray-700 text-center w-fit">
          Loading...
        </p>
      </div>
    );
  }
  if (!data) return null;

  return (
    <div className="p-5">
      <TitleComponent
        title="Our featured Categories"
        sub_title="Explore products by categories"
      />

      <div>
        {/* render category */}
        {data.data.length > 0 && (
          <div className=" mt-6 flex flex-col gap-2 sm:grid sm:grid-cols-3">
            {data.data.map((category) => (
              <CategoryCard key={category._id} category={category} />
            ))}
          </div>
        )}

        {/* empty category */}
        {data.data.length === 0 && (
          <div className="flex justify-center items-center w-full h-full mt-6 min-h-[100px]">
            <p className="text-[16px] text-gray-700 text-center w-fit">
              No Categories Found
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryList;
