/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query";
import Dropdown from "../../../shared/designSystem/form/input/Dropdown";
import { getAllCategory } from "../../../api/category.api"; // Assuming this exists
import { type Control, Controller } from "react-hook-form";

interface CategoryDropdownProps {
  control: Control<any>;
}

const CategoryDropdown = ({ control }: CategoryDropdownProps) => {
  const { data, isLoading } = useQuery({
    queryFn: () => getAllCategory(),
    queryKey: ["getAllCategory"],
  });

  if (isLoading) return <div>Loading...</div>;

  if (!data?.data) return null;

  return (
    <Controller
      name="category"
      control={control}
      render={({ field }) => (
        <Dropdown
          label="Category"
          labelFor="category"
          name="category"
          {...field}
          data={data?.data ?? []}
        />
      )}
    />
  );
};

export default CategoryDropdown;
