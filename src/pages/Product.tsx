import { useQuery } from "@tanstack/react-query";
import { getAllProduct } from "../api/product.api";
import Loader from "../components/loader/loader";
import ProductCard from "../components/landing/product/card";
import ProductFilter from "../components/productFilter/ProductFilter";
import { useState } from "react";

const Product = () => {
  const [category, setCategory] = useState("");

  const { data, isLoading } = useQuery({
    queryKey: ["get_all_product", category],
    queryFn: ({ queryKey }) => {
      const [, categoryFromKey] = queryKey as [string, string];
      return getAllProduct({ category: categoryFromKey });
    },
    enabled: true,
  });

  // if (!data) return null;

  const handleFilterProduct = (newData: string) => {
    setCategory(newData);
    console.log({ newData });
  };

  const handleFilterBrand = (filteredBrandData: string) => {
    console.log(filteredBrandData);
  };
  if (isLoading) return <Loader />;

  return (
    <div className="w-full min-h-screen px-4 bg-white">
      <div className="px-2 py-4  mt-2">
        <h1 className="font-semibold text-violet-500 text-2xl">
          MERN-Products
        </h1>
        <p className="text-md text-gray-400">Our most popular products.</p>
      </div>

      <div className="grid grid-cols-5">
        <div className="col-span-1 text-md px-2 pb-2">
          <p className="text-gray-800 text-lg font-semibold">Filter Product</p>
          <hr />
          <ProductFilter
            handleFilterProduct={handleFilterProduct}
            handleFilterBrand={handleFilterBrand}
          />
        </div>

        <div className="col-span-4 flex justify-between flex-wrap items-center px-2 gap-2 ">
          {!data?.data || data?.data.length === 0 ? (
            <div className="text-2xl text-red-600">product not found!</div>
          ) : (
            data?.data.map((data) => (
              <ProductCard key={data._id} product={data} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
