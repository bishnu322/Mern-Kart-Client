/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query";
import Dropdown from "../../../shared/designSystem/form/input/Dropdown";
import { getAllBrand } from "../../../api/brand.api";
import { type Control, Controller } from "react-hook-form";

interface BrandDropdownProps {
  control: Control<any>;
}

const BrandDropdown = ({ control }: BrandDropdownProps) => {
  const { data, isLoading } = useQuery({
    queryFn: () => getAllBrand(),
    queryKey: ["getAllBrand"],
  });

  if (isLoading) return <div>Loading...</div>;

  if (!data?.data) return null;

  return (
    <Controller
      name="brand"
      control={control}
      render={({ field }) => (
        <Dropdown
          label="Brand"
          labelFor="brand"
          name="brand"
          {...field}
          data={data?.data ?? []}
        />
      )}
    />
  );
};

export default BrandDropdown;
