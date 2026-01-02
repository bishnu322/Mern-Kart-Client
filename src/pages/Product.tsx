import { useQuery } from "@tanstack/react-query";
import { getAllProduct } from "../api/product.api";
import ProductCard from "../components/landing/product/card";
import ProductFilter from "../components/product/productFilter/ProductFilter";
import ProductCardSkeleton from "../components/skeleton/ProductCardSkeleton";
import { useState } from "react";

const Product = () => {
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [showFilter, setShowFilter] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ["get_all_product", category, brand],
    queryFn: () => getAllProduct({ category, brand }),
  });

  const handleFilterCategory = (category: string) => {
    setCategory(category);
    setShowFilter(false);
  };

  const handleFilterBrand = (brand: string) => {
    setBrand(brand);
    setShowFilter(false);
  };

  return (
    <main className="p-5">
      {/* Mobile Filter Toggle Button */}
      <button
        onClick={() => setShowFilter(!showFilter)}
        className="lg:hidden mb-4 px-4 py-2 bg-violet-500 text-white rounded-lg flex items-center gap-2 hover:bg-violet-600 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
            clipRule="evenodd"
          />
        </svg>
        {showFilter ? "Hide Filters" : "Show Filters"}
      </button>

      <div className="flex gap-4">
        {/* Filter Sidebar */}
        <div
          className={`
            fixed lg:static inset-0 z-50 lg:z-auto
            w-full lg:w-[300px]
            bg-white lg:bg-transparent
            transition-transform duration-300 ease-in-out
            ${
              showFilter
                ? "translate-x-0"
                : "-translate-x-full lg:translate-x-0"
            }
          `}
        >
          {/* Mobile Overlay */}
          {showFilter && (
            <div
              className="lg:hidden fixed inset-0 bg-gray-200 bg-opacity-50 -z-10"
              onClick={() => setShowFilter(false)}
            />
          )}

          {/* Filter Content */}
          <div className="h-full lg:h-auto overflow-y-auto p-4 lg:p-0">
            <div className="flex justify-between items-center lg:block mb-4">
              <h1 className="font-semibold text-violet-500 text-2xl">
                Filter Product
              </h1>
              <button
                onClick={() => setShowFilter(false)}
                className="lg:hidden text-gray-500 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <ProductFilter
              handleFilterCategory={handleFilterCategory}
              handleFilterBrand={handleFilterBrand}
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1 flex flex-wrap justify-around gap-2">
          {isLoading ? (
            // Show skeleton loaders while loading
            Array.from({ length: 8 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))
          ) : !data?.data || data.data.length === 0 ? (
            <div className="text-2xl text-red-600">Product not found!</div>
          ) : (
            data.data.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          )}
        </div>
      </div>
    </main>
  );
};

export default Product;
