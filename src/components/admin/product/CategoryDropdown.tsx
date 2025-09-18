/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query";
import Dropdown from "../../../shared/designSystem/form/input/Dropdown";
import { getAllCategory } from "../../../api/category.api";

const CategoryDropdown = ({ register }: any) => {
  const { data, isLoading } = useQuery({
    queryFn: () => getAllCategory(),
    queryKey: ["get_All_category"],
  });
  console.log(data?.data);

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <Dropdown
        label="Category"
        labelFor="category"
        name="category"
        data={data?.data ?? []}
        {...register("category")}
      />
    </>
  );
};

export default CategoryDropdown;
