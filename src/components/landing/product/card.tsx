import { useMutation } from "@tanstack/react-query";
import type { IProduct } from "../../../types/product.types";
import { addToWishlist } from "../../../api/wishlist.api";
import { TbCurrencyRupeeNepalese } from "react-icons/tb";
import { FaHeart, FaEye } from "react-icons/fa";
import toast from "react-hot-toast";
import { Link } from "react-router";

interface IProductCardProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProductCardProps) => {
  const { mutate, isPending } = useMutation({
    mutationKey: ["add_to_wishlist"],
    mutationFn: addToWishlist,
    retry: false,
    onSuccess: () => {
      toast.success("Product added to wishlist");
    },
    onError: () => {
      toast.error("Failed to add to wishlist");
    },
  });

  return (
    <div className="my-5 w-[220px] rounded shadow-xl shadow-gray-300 border border-gray-300 overflow-hidden h-[310px] hover:shadow-lg hover:shadow-gray-400 transition-all duration-200">
      {/* image */}
      <div className="w-full">
        <img
          src={product.cover_img?.path}
          alt="product_img"
          className="w-full h-[150px] object-cover"
        />
      </div>

      <div className="px-3 pb-3 flex flex-col gap-1">
        <h2 className="text-md text-violet-800 font-semibold">
          {product.name}
        </h2>

        <p className="text-gray-500 text-[12px] line-clamp-3">
          {product.description || product.brand?.description}
        </p>

        <div className="flex justify-between">
          <div className="text-[14px] font-semibold flex items-center gap-1">
            <TbCurrencyRupeeNepalese />
            {product.price}
          </div>

          <p
            className={`text-[10px] font-semibold border px-2 py-1 rounded text-white ${
              product.stock > 0 ? "bg-green-600" : "bg-red-500"
            }`}
          >
            {product.stock > 0 ? "In stock" : "Out of stock"}
          </p>
        </div>

        <div className="flex justify-end gap-2 mt-1">
          <button
            onClick={() => mutate(product._id)}
            disabled={isPending}
            className="disabled:cursor-not-allowed border border-gray-300 px-2 py-2 rounded hover:bg-black hover:text-white transition-all duration-300"
          >
            {isPending ? "Adding..." : <FaHeart />}
          </button>

          <Link to={`/product/${product._id}?name=${product.name}`}>
            <button className="border border-gray-300 px-2 py-2 rounded hover:bg-black hover:text-white transition-all duration-300">
              <FaEye />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
