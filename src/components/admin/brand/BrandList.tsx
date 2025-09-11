import React from "react";
import { Input } from "../../../shared/designSystem/form/input/Input";
import { useQuery } from "@tanstack/react-query";
import { getAllBrand } from "../../../api/brand.api";
import type { IBrand } from "../../../types/brand.types";
import BrandTable from "./BrandTable";

interface IProps {
  brand: IBrand;
}

const BrandList: React.FC<IProps> = () => {
  const { data, isLoading } = useQuery({
    queryFn: getAllBrand,
    queryKey: ["getAllBrand"],
  });

  if (isLoading) return <div>Loading...</div>;
  //   console.log(data?.data);

  return (
    <main className="w-full h-screen flex flex-col gap-2">
      <h1 className="text-xl font-semibold text-gray-600">Brand list</h1>
      <div className="mt-2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3">
        {/* search button  */}

        <Input
          className="w-full border border-violet-600 p-2 rounded outline-none "
          placeholder="Search Brand"
        />
      </div>

      {/* brand details */}

      <div>
        <BrandTable brandData={data?.data ?? []} />
      </div>
    </main>
  );
};

export default BrandList;
