import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getProductById } from "../api/product.api";

import Loader from "../components/loader/loader";
import Product_image from "../components/product/productDetail/Product_image";
import Product_detail from "../components/product/productDetail/product_detail";

const DetailPage = () => {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryFn: () => getProductById(id as string),
    queryKey: ["get_product_by_id", id],
  });
  const item = data?.data;

  if (isLoading) return <Loader />;
  if (!data?.data) return <div>Product not found!</div>;

  return (
    <div className=" h-full w-full p-10">
      <div className="flex flex-col gap-10 md:grid md:grid-cols-3 ">
        {/*product image section */}
        <div className="col-span-1  w-full">
          <Product_image images={item?.images ?? []} />
        </div>

        {/* product detail */}
        <div className="col-span-2 ">
          {item && <Product_detail product={item} />}
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
