/* eslint-disable @typescript-eslint/no-unused-vars */
// const image =
//   "https://specials-images.forbesimg.com/imageserve/65df2e0562b5d061b718a4af/Skin-and-hair-care-beauty-product-mock-up--lotion-bottle--oil--cream--isolated-on/960x0.jpg?fit=scale";

import { useMutation } from "@tanstack/react-query";
import type { IProduct } from "../../../types/product.types";
import { addToWishlist } from "../../../api/wishlist.api";
import toast from "react-hot-toast";

interface IProductCardProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProductCardProps) => {
  const { mutate, isPending } = useMutation({
    mutationFn: addToWishlist,
    onSuccess: (response) => {
      toast.success(response.message);
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
    <div className="p-5 m-5  w-[300px] rounded  shadow-2xl bg-white shadow-gray-400">
      {/* image section */}

      <div>
        <img
          src={product.cover_img.path}
          alt={""}
          className="object-contain w-full h-[250px]"
        />
      </div>

      {/* name */}

      <h2 className="text-lg text-violet-800 font-semibold my-2">
        {product.name}
      </h2>
      {/* description */}

      <p className="text-gray-500 text-sm line-clamp-3 my-1">
        {product.brand.description}
      </p>
      {/* price */}

      <div className="py-3 flex justify-between ">
        <p className="text-md text-violet-800 font-semibold ">
          NPR. {product.price}
        </p>
        <p
          className={`text-md  font-semibold ${
            product.stock > 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          {product.stock > 0 ? "In stock" : "Out of stock"}
        </p>
      </div>
      {/* button */}

      <div className="flex justify-between">
        {/* view detail */}
        <button className="border-1 px-3 py-2 rounded text-md font-semibold cursor-pointer hover:bg-black hover:text-white transition-all duration-300">
          View Detail
        </button>
        {/* add to cart */}
        <button
          onClick={addToList}
          disabled={isPending}
          className="disabled:cursor-not-allowed border-1 px-3 py-2 rounded text-md font-semibold bg-black text-white cursor-pointer hover:text-black hover:bg-white transition-all duration-300"
        >
          {isPending ? "Adding.." : "Add to Wishlist"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
