/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query";
import Dropdown from "../../../shared/designSystem/form/input/Dropdown";
import { getAllBrand } from "../../../api/brand.api";

const BrandDropdown = ({ register }: any) => {
  const { data, isLoading } = useQuery({
    queryFn: () => getAllBrand(),
    queryKey: ["getAllBrand"],
  });

  console.log(data?.data);

  if (isLoading) return <div>Loading...</div>;

  if (!data?.data) return;
  return (
    <>
      <Dropdown
        label="Brand"
        labelFor="brand"
        name="brand"
        {...register("brand")}
        data={data?.data ?? []}
      />
    </>
  );
};

export default BrandDropdown;
