import { useQuery } from "@tanstack/react-query";
import { getAllProduct } from "../api/product.api";
import Loader from "../components/loader/loader";
import ProductCard from "../components/landing/product/card";
import ProductFilter from "../components/productFilter/ProductFilter";
import { useState } from "react";

const Product = () => {
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [showFilter, setShowFilter] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ["get_all_product", category, brand],
    queryFn: () => getAllProduct({ category, brand }),
  });

  const handleFilterProduct = (category: string) => {
    setCategory(category);
    setShowFilter(false); // close on mobile after select
  };

  const handleFilterBrand = (brand: string) => {
    setBrand(brand);
    setShowFilter(false);
  };

  if (isLoading) return <Loader />;

  return (
    <div className="w-full min-h-screen bg-white px-4">
      {/* Mobile Filter Button */}
      <div className="md:hidden flex justify-end py-3">
        <button
          onClick={() => setShowFilter(true)}
          className="px-4 py-2 bg-violet-500 text-white rounded-md"
        >
          Filter
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {/* FILTER SECTION */}
        <div
          className={`
            fixed md:static top-0 left-0 z-40
            h-full w-full bg-white
            transform transition-transform duration-300
            ${showFilter ? "translate-x-0" : "-translate-x-full"}
            md:translate-x-0
            md:col-span-1
            overflow-y-auto
            border-r
          `}
        >
          {/* Mobile Close Button */}
          <div className="md:hidden flex justify-end p-4">
            <button
              onClick={() => setShowFilter(false)}
              className="text-gray-600 text-lg"
            >
              ✕
            </button>
          </div>

          <div className="px-4 pb-4">
            <h1 className="font-semibold text-violet-500 text-2xl mt-2">
              MERN-Products
            </h1>
            <p className="text-gray-400 mb-4">Our most popular products.</p>

            <p className="text-gray-800 text-lg font-semibold">
              Filter Product
            </p>
            <hr className="my-2" />

            <ProductFilter
              handleFilterProduct={handleFilterProduct}
              handleFilterBrand={handleFilterBrand}
            />
          </div>
        </div>

        {/* OVERLAY (mobile only) */}
        {showFilter && (
          <div
            onClick={() => setShowFilter(false)}
            className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
          />
        )}

        {/* PRODUCT LIST */}
        <div className="col-span-4 flex flex-wrap justify-around gap-2">
          {!data?.data || data.data.length === 0 ? (
            <div className="text-2xl text-red-600">Product not found!</div>
          ) : (
            data.data.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
