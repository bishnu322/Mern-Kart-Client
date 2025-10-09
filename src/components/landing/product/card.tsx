import { useMutation } from "@tanstack/react-query";
import type { IProduct } from "../../../types/product.types";
import { addToWishlist } from "../../../api/wishlist.api";
import { TbCurrencyRupeeNepalese } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import { MdViewList } from "react-icons/md";
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
    <div className="my-5 w-[250px] rounded shadow-md bg-white shadow-gray-300 border-gray-200 overflow-hidden h-[320px]">
      {/* image section */}

      <div className="w-full">
        <img
          src={product.cover_img.path}
          alt={"product_img"}
          className="object-fit w-full h-[150px]"
        />
      </div>

      <div className="px-3 pb-3 flex flex-col gap-1">
        {/* name */}

        <h2 className="text-md text-violet-800 font-semibold">
          {product?.name}
        </h2>
        {/* description */}

        <p className="text-gray-500 text-[12px] line-clamp-3 my-1">
          {product?.description ?? product.brand?.description}
        </p>
        {/* price */}

        <div className=" flex justify-between ">
          <div className="text-[14px] text-violet-800 font-semibold flex ">
            <div className="mt-1">
              <TbCurrencyRupeeNepalese />
            </div>
            {product?.price}
          </div>
          <p
            className={`text-[14px]  font-semibold ${
              product.stock > 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            {product.stock > 0 ? "In stock" : "Out of stock"}
          </p>
        </div>
        {/* button */}

        <div className="flex justify-end gap-2">
          {/* view detail */}
          <Link to={`/product/${product?._id}?name=${product?.name}`}>
            <button className="border border-gray-300 px-3 py-2 rounded text-md font-semibold cursor-pointer hover:bg-black hover:text-white transition-all duration-300">
              <MdViewList />
            </button>
          </Link>
          {/* add to cart */}
          <button
            onClick={addToList}
            disabled={isPending}
            className="disabled:cursor-not-allowed border border-gray-300  px-3 py-2 rounded text-md font-semibold  cursor-pointer hover:text-white hover:bg-black transition-all duration-300"
          >
            {isPending ? "Adding.." : <CiHeart />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
