/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import type { IProduct } from "../../../types/product.types";
import { TiStarFullOutline } from "react-icons/ti";
import { TbCurrencyRupeeNepalese } from "react-icons/tb";
import { IoMdPricetag } from "react-icons/io";
import { useMutation } from "@tanstack/react-query";
import { pushProductToCart } from "../../../api/cart.api";
import toast from "react-hot-toast";
import { addToWishlist } from "../../../api/wishlist.api";

interface IProps {
  product: IProduct;
}

const Product_detail: React.FC<IProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }

    return;
  };

  const { mutate } = useMutation({
    mutationFn: pushProductToCart,
    onSuccess: (response: any) => {
      toast.success(response.message ?? "product is added to cart");
    },
    onError: (error) => {
      toast.error(error.message ?? "Unable to add product to cart");
    },
    mutationKey: ["productAddedToCart"],
  });

  const { mutate: addWishListMutation, isPending: wishListIsPending } =
    useMutation({
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

  const addProductToCart = () => {
    mutate({ productId: product._id, quantity });
  };

  return (
    <div className="flex flex-col gap-5">
      {/* product name  */}
      <div className="flex justify-between">
        <div className="text-2xl font-semibold text-violet-700">
          {product.name}
        </div>
        <div className="flex items-center text-lg gap-1 ">
          <span>4.5</span>
          <span className="text-orange-500">
            <TiStarFullOutline />
          </span>
        </div>
      </div>

      {/* product price */}

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 ">
          <span>
            <TbCurrencyRupeeNepalese
              size={22}
              className="mt-1 font-bold text-violet-700"
            />
          </span>
          <span className="text-xl font-semibold">{product.price}</span>
        </div>

        <div className="font-semibold">
          {product.stock > 0 ? (
            <span className="text-green-500 ">In stock</span>
          ) : (
            <span className="text-red-500 ">Out of stock</span>
          )}
        </div>
      </div>

      {/* product quantity */}

      <div className="flex flex-col gap-2">
        <label
          htmlFor="quantity"
          className="text-xl font-semibold text-gray-700"
        >
          Quantity
        </label>
        <div className="w-[300px] border rounded flex items-center justify-between px-3">
          <button
            className="p-2 text-2xl font-bold  aspect-square"
            onClick={decrement}
          >
            -
          </button>
          <input
            type="number"
            id="quantity"
            className="font-bold text-center outline-none  h-13 text-md"
            value={quantity}
            min={1}
            readOnly
          />
          <button
            onClick={increment}
            className="text-2xl font-bold aspect-square"
          >
            +
          </button>
        </div>
      </div>

      {/*  brand and category*/}
      <div className="flex items-center gap-4">
        {/* brand */}
        <div className="flex items-center px-5 py-2 bg-gray-300 border rounded gap-3  border-violet-400">
          <span>
            {/* <IoMdPricetag /> */}
            <img
              src={product.brand?.logo.path}
              alt="brand_logo"
              className="w-5"
            />
          </span>
          <span className="font-semibold text-gray-700">
            {product.brand?.brand_name}
          </span>
        </div>

        {/* category */}
        <div className="flex items-center px-5 py-2 bg-gray-300 border rounded gap-3  border-violet-400">
          <span>
            <IoMdPricetag />
          </span>
          <span className="font-semibold text-gray-700">
            {product.category.name}
          </span>
        </div>
      </div>

      {/* description */}

      <div>
        <p className="text-xl text-gray-500 ">
          {product?.description ?? product.brand?.description}
        </p>
      </div>

      <div className="flex justify-between md:flex md:justify-start gap-5">
        <button
          onClick={addProductToCart}
          className="w-full px-10 py-2 text-lg font-semibold text-white bg-black rounded cursor-pointer"
        >
          Add to Cart
        </button>
        <button
          onClick={() => addWishListMutation(product._id)}
          disabled={wishListIsPending}
          className="w-full px-10 py-2 text-lg font-semibold bg-gray-300 border rounded cursor-pointer text-back"
        >
          Add to WishList
        </button>
      </div>
    </div>
  );
};

export default Product_detail;
