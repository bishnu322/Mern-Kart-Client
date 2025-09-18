import { useQuery } from "@tanstack/react-query";
import Dropdown from "../../../shared/designSystem/form/input/Dropdown";
import { getAllCategory } from "../../../api/category.api";

const CategoryDropdown = () => {
  const { data } = useQuery({
    queryFn: () => getAllCategory(),
    queryKey: ["get_All_category"],
  });
  console.log(data?.data);

  return (
    <>
      <Dropdown
        label="Category"
        labelFor="category"
        name="category"
        data={data?.data ?? []}
      />
    </>
  );
};

export default CategoryDropdown;
