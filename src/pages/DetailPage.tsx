import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getProductById } from "../api/product.api";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

const DetailPage = () => {
  const { id } = useParams();

  const { data } = useQuery({
    queryFn: () => getProductById(id as string),
    queryKey: ["get_product_by_id", id],
  });
  const item = data?.data;
  if (!data?.data) return <div>Product not found</div>;

  console.log({ data });

  return (
    <div className="bg-gray-300 h-full w-full">
      <div className="h-full min-h-ful p-4 flex flex-col gap-3 md:flex md:flex-row md:justify-between w-full">
        {/* image loading section */}
        <div className="md:w-1/2 rounded-2xl overflow-hidden">
          <img src={data.data.cover_img.path} alt="" className=" md:w-full" />
        </div>

        {/* product specification section  */}
        <div className="bg-gray-100 rounded-2xl px-4 py-5 flex flex-col gap-3 md:w-1/2 ">
          <div className="font-semibold text-2xl">NPR: {item?.price}</div>
          <div className="flex justify-between text-lg font-bold">
            <div>{item?.name}</div>
            <div>Brand: {item?.brand.brand_name}</div>
          </div>
          <div className="text-lg">Size: {item?.size ?? "Not specified"}</div>

          <div className="font-semibold text-xl text-gray-700">
            Category: {item?.category.name}
          </div>
          <div className="text-md font-semibold text-gray-500 line-clamp-3 md:line-clamp-none">
            {item?.description ?? item?.brand.description}
          </div>
        </div>
      </div>

      {/* button section  */}
      <div className="flex justify-between my-10 px-5 gap-5">
        <button className="w-full flex justify-center items-center gap-3 text-lg border-1 px-3 py-4 rounded text-md font-semibold cursor-pointer hover:bg-black hover:text-white transition-all duration-300">
          <FaShoppingCart />
          Add to Cart
        </button>

        <button className="w-full flex justify-center items-center gap-3 text-lg  disabled:cursor-not-allowed border-1 px-3 py-4 rounded text-md font-semibold bg-black text-white cursor-pointer hover:text-black hover:bg-white transition-all duration-300">
          <FaHeart />
          Add to Wishlist
        </button>
      </div>
    </div>
  );
};

export default DetailPage;
