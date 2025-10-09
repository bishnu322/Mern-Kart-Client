import { useQuery } from "@tanstack/react-query";

import { getAllProduct } from "../api/product.api";
import Loader from "../components/loader/loader";
import ProductCard from "../components/landing/product/card";

const Product = () => {
  const { data, isLoading } = useQuery({
    queryFn: getAllProduct,
    queryKey: ["get_all_product"],
  });

  // if (!data) return null;

  if (isLoading) return <Loader />;

  return (
    <div className="w-full min-h-screen px-4 bg-white">
      <div className="flex justify-between flex-wrap items-center">
        {data?.data.map((data) => (
          <ProductCard key={data._id} product={data} />
        ))}
      </div>
    </div>
  );
};

export default Product;
