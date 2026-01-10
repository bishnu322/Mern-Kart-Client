import { useQuery } from "@tanstack/react-query";
import { getAllBrand } from "../../../api/brand.api";
import type React from "react";

interface IProps {
  handleFilterBrand: (brand: string) => void;
}

const BrandFilter: React.FC<IProps> = ({ handleFilterBrand }) => {
  const { data, isLoading } = useQuery({
    queryFn: () => getAllBrand(),
    queryKey: ["filterByBrand"],
  });

  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      {data?.data.map(
        (item: { _id: string; brand_name: string; createdAt: string }) => (
          <div
            key={item.createdAt}
            className="flex items-start p-1 rounded  hover:bg-violet-200 hover:cursor-pointer gap-2"
          >
            <input
              type="radio"
              id={item._id}
              name="brand"
              value={item._id}
              onChange={(e) => handleFilterBrand(e.target.value)}
              className="mt-1.5"
            />
            <label htmlFor={item._id}> {item.brand_name}</label>
          </div>
        )
      )}
    </>
  );
};

export default BrandFilter;
