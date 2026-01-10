import { Input } from "../../../shared/designSystem/form/input/Input";
import { useQuery } from "@tanstack/react-query";
import { getAllBrand } from "../../../api/brand.api";
import BrandTable from "./BrandTable";
import { BrandSkeleton } from "../../../components/skeleton";
import { useEffect, useState } from "react";
import AdminBodyTitle from "../../../shared/designSystem/AdminBodyTitle";

const BrandList = () => {
  const [searchBrand, setSearchBrand] = useState("");
  const [tempSearch, setTempSearch] = useState("");

  //*  fetching all the brands

  const { data, isLoading } = useQuery({
    queryFn: () => getAllBrand({ query: searchBrand }),
    queryKey: ["getAllBrand", searchBrand],
  });

  // * debouncing while searching brand

  useEffect(() => {
    const intervalHandler = setTimeout(() => {
      setSearchBrand(tempSearch);
    }, 500);

    return () => clearTimeout(intervalHandler);
  }, [tempSearch]);

  return (
    <main className="flex flex-col w-full  gap-2">
      <AdminBodyTitle>Search Brand</AdminBodyTitle>
      <div className="mt-2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3">
        {/* search button  */}

        <Input
          value={tempSearch}
          className="w-full p-2 border rounded outline-none border-violet-600 "
          placeholder="Search Brand"
          onChange={(e) => setTempSearch(e.target.value)}
        />
      </div>

      {/* brand details */}

      <div>
        {isLoading ? (
          <BrandSkeleton />
        ) : (
          <BrandTable brandData={data?.data ?? []} />
        )}
      </div>
    </main>
  );
};

export default BrandList;
