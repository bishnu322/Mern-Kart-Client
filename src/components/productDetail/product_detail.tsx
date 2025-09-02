import React, { useState } from "react";
import type { IProduct } from "../../types/product.types";
import { TiStarFullOutline } from "react-icons/ti";
import { TbCurrencyRupeeNepalese } from "react-icons/tb";
import { IoMdPricetag } from "react-icons/io";

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

  console.log(quantity);

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

      <div className="flex gap-4 items-center">
        <div className="flex items-center gap-1 ">
          <span>
            <TbCurrencyRupeeNepalese
              size={22}
              className="mt-1 text-violet-700 font-bold"
            />
          </span>
          <span className="text-xl font-semibold">{product.price}</span>
        </div>

        <div className="font-semibold">
          {product.stock > 0 ? (
            <span className=" text-green-500">In stock</span>
          ) : (
            <span className=" text-red-500">Out of stock</span>
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
        <div className="w-[300px] border rounded flex items-center justify-between px-5">
          <button
            className=" p-1 aspect-square text-2xl font-bold"
            onClick={decrement}
          >
            -
          </button>
          <input
            type="number"
            id="quantity"
            className=" h-13 text-center text-md font-bold outline-none"
            value={quantity}
            min={1}
            readOnly
          />
          <button
            onClick={increment}
            className="aspect-square text-2xl font-bold"
          >
            +
          </button>
        </div>
      </div>

      {/*  brand and category*/}
      <div className="flex gap-4 items-center">
        {/* brand */}
        <div className="flex items-center gap-3  px-5 py-2 rounded bg-gray-300 border border-violet-400">
          <span>
            {/* <IoMdPricetag /> */}
            <img
              src={product.brand.logo.path}
              alt="brand_logo"
              className="w-5"
            />
          </span>
          <span className="text-gray-700 font-semibold">
            {product.brand.brand_name}
          </span>
        </div>

        {/* category */}
        <div className="flex items-center gap-3 border  px-5 py-2 rounded bg-gray-300 border-violet-400">
          <span>
            <IoMdPricetag />
          </span>
          <span className="text-gray-700 font-semibold">
            {product.category.name}
          </span>
        </div>
      </div>

      {/* description */}

      <div>
        <p className="text-xl text-gray-500 ">
          {product.description ?? product.brand.description}
        </p>
      </div>

      <div className="flex justify-between md:flex md:justify-start gap-5">
        <button className="w-full bg-black px-10 py-2 text-white text-lg rounded cursor-pointer font-semibold">
          Add to Cart
        </button>
        <button className="w-full bg-gray-300 px-10 py-2 text-back text-lg rounded cursor-pointer font-semibold border">
          Add to WishList
        </button>
      </div>
    </div>
  );
};

export default Product_detail;
