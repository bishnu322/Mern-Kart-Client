import { useQuery } from "@tanstack/react-query";
import { getAllCartData } from "../api/cart.api";
import { FaRegTrashCan } from "react-icons/fa6";
import { TbCurrencyRupeeNepalese } from "react-icons/tb";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";
import { strings } from "../strings";

// cart magic word
const {
  cart: { cartTitle, cartPriceTitle, cartBestSellerTitle, checkout },
} = strings;

const Cart = () => {
  const { data } = useQuery({
    queryFn: getAllCartData,
    queryKey: ["get_all_cart_data"],
  });

  if (!data?.data) {
    return <div>Cart is empty. Add some product to order...</div>;
  }

  const validCartItems =
    data.data.items?.filter((cartProduct) => cartProduct !== null) || [];

  return (
    <div className="min-h-full p-5 bg-gray-200">
      {/* heading section */}

      <div className="flex items-center justify-between">
        <h1 className="pb-3 text-3xl font-bold  text-violet-500">
          {cartTitle}
        </h1>

        <p className="px-5 mt-5 font-semibold text-orange-600 text-md">
          {cartPriceTitle}
        </p>
      </div>

      {/* cart product */}
      <>
        {validCartItems.map((prod) => (
          <div
            key={prod.product?._id}
            className="w-full p-2 m-2 bg-white rounded"
          >
            <div className="flex justify-between w-full">
              <div className="flex p-2 font-semibold gap-2 text-md">
                {/* image section */}
                <img
                  src={prod.product?.cover_img?.path}
                  alt="product_image"
                  className="w-[120px] object-contain"
                />

                <div className="flex flex-col gap-2">
                  {/* product name */}
                  <h1 className="text-violet-700">{prod.product?.name}</h1>

                  {/* product brand */}
                  <div className="flex items-center px-2 bg-gray-200 border rounded gap-1 border-violet-300">
                    <span>
                      {/* <IoMdPricetag /> */}
                      <img
                        src={
                          prod.product?.brand?.logo?.path ||
                          "/brand-fallback.png"
                        }
                        alt="brand_logo"
                        className="w-5"
                      />
                    </span>
                    <span className="font-semibold text-gray-700">
                      {prod.product?.brand?.brand_name || "Unknown brand"}
                    </span>
                  </div>

                  {/* best seller section */}
                  <div className="p-1 text-sm text-white rounded  bg-amber-500">
                    <h1>{cartBestSellerTitle}</h1>
                  </div>

                  {/* trash section */}
                  <div>
                    <FaRegTrashCan className="text-red-500" />
                  </div>
                </div>
              </div>

              <h1 className="flex items-center pr-2 font-semibold text-gray-800 text-md gap-1">
                <TbCurrencyRupeeNepalese size={20} />
                {prod.total_price}
              </h1>
            </div>
          </div>
        ))}

        {/* total amount */}

        <h1 className="flex items-center justify-end px-4 text-xl font-bold gap-1 ">
          <TbCurrencyRupeeNepalese
            size={20}
            className="text-gray-900"
            fontWeight={700}
          />
          {data.data?.total_amount}
        </h1>

        <div className="flex justify-end">
          <Link
            to="/cart/placeOrder"
            className="flex items-center px-4 py-2 font-semibold bg-orange-500 rounded cursor-pointer text-gray-50 
  hover:bg-orange-700 my-5
 gap-2"
          >
            <span>{checkout}</span>
            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </>
    </div>
  );
};

export default Cart;
