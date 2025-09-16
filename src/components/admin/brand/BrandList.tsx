import { Input } from "../../../shared/designSystem/form/input/Input";
import { useQuery } from "@tanstack/react-query";
import { getAllBrand } from "../../../api/brand.api";
import BrandTable from "./BrandTable";
import { useEffect, useState } from "react";

const BrandList = () => {
  const [searchBrand, setSearchBrand] = useState("");
  const [tempSearch, setTempSearch] = useState("");

  //*  fetching all the brands

  const { data } = useQuery({
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
    <main className="w-full  flex flex-col gap-2">
      <h1 className="text-xl font-semibold text-gray-600">Brand list</h1>
      <div className="mt-2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3">
        {/* search button  */}

        <Input
          value={tempSearch}
          className="w-full border border-violet-600 p-2 rounded outline-none "
          placeholder="Search Brand"
          onChange={(e) => setTempSearch(e.target.value)}
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
