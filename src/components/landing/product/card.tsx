import { useMutation } from "@tanstack/react-query";
import type { IProduct } from "../../../types/product.types";
import { addToWishlist } from "../../../api/wishlist.api";
import { TbCurrencyRupeeNepalese } from "react-icons/tb";
import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import toast from "react-hot-toast";
import { Link } from "react-router";

interface IProductCardProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProductCardProps) => {
  const { mutate, isPending } = useMutation({
    mutationFn: addToWishlist,
    onSuccess: (response) => {
      toast.success(response.data.message ?? "Product added to wishlist");
    },
    onError: (error) => {
      toast.error(error.message);
    },
    mutationKey: ["add_to_wishlist"],
  });

  const addToList = () => {
    mutate(product._id);
  };

  return (
    <div className="my-5 w-[220px] rounded bg-purple-100 border border-purple-200 overflow-hidden h-[310px] hover:shadow-lg hover:shadow-gray-400 transition-all duration-200">
      {/* image section */}

      <div className="w-full">
        <img
          src={product.cover_img.path}
          alt={"product_img"}
          className="object-fit w-full h-[150px] "
        />
      </div>

      <div className="px-3 pb-3 flex flex-col gap-1">
        {/* name */}

        <h2 className="text-md text-violet-800 font-semibold">
          {product?.name}
        </h2>
        {/* description */}

        <p className="text-gray-500 text-[12px] line-clamp-3">
          {product?.description ?? product.brand?.description}
        </p>
        {/* price */}

        <div className=" flex justify-between ">
          <div className="text-[14px]  font-semibold flex ">
            <div className="mt-1">
              <TbCurrencyRupeeNepalese />
            </div>
            {product?.price}
          </div>
          <p
            className={`text-[10px]  font-semibold border p-1 rounded text-white ${
              product.stock > 0 ? "bg-green-600" : "bg-red-500"
            }`}
          >
            {product.stock > 0 ? "In stock" : "Out of stock"}
          </p>
        </div>
        {/* button */}

        <div className="flex justify-end gap-2 mt-0.5">
          {/* view detail */}

          {/* add to cart */}
          <button
            onClick={addToList}
            disabled={isPending}
            className="disabled:cursor-not-allowed border border-gray-300  px-2 py-2 rounded text-md font-semibold  cursor-pointer hover:text-white hover:bg-black transition-all duration-300"
          >
            {isPending ? "Adding.." : <FaHeart />}
          </button>

          <Link to={`/product/${product?._id}?name=${product?.name}`}>
            <button className="border border-gray-300 px-2 py-2 rounded text-md font-semibold cursor-pointer hover:bg-black hover:text-white transition-all duration-300">
              <FaEye />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
