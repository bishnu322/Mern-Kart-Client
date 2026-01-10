/* eslint-disable @typescript-eslint/no-explicit-any */
import { withAuth } from "../hoc/with.auth.hoc";
import { allAdminAndUser } from "../types/global.types";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  clearAllProductFromWishlist,
  removeWishlistProductApi,
  wishlistApi,
} from "../api/wishlist.api";
import Loader from "../components/loader/loader";
import toast from "react-hot-toast";
import { query_client } from "../providers/queryClient";
import { useAuth } from "../context/auth.context";
import { FaRegTrashCan } from "react-icons/fa6";
import { TbCurrencyRupeeNepalese } from "react-icons/tb";

const Wishlist = () => {
  const { user } = useAuth();
  // fetching wishlist
  const { data, isLoading } = useQuery({
    queryFn: wishlistApi,
    queryKey: ["get_all_wishlist"],
  });

  // removing product from wishlist

  const { mutate } = useMutation({
    mutationFn: removeWishlistProductApi,
    onSuccess: (response: any) => {
      toast.success(response?.message ?? "product removed from wishlist");
      query_client.invalidateQueries({ queryKey: ["get_all_wishlist"] });
    },
    onError: (error: any) => {
      toast.error(error?.message ?? "product unable to remove");
    },
    mutationKey: ["removeProductFromWishlist"],
  });

  // clear all the product/ element of wishlist

  const { mutate: clearMutate } = useMutation({
    mutationFn: clearAllProductFromWishlist,
    onSuccess: (response) => {
      toast.success(response.message ?? "wishlist is empty");
      query_client.invalidateQueries({ queryKey: ["get_all_wishlist"] });
    },
    onError: (error) => {
      toast.error(
        error.message ?? "something went wrong while clearing wishlist"
      );
    },
  });

  const onClearingWishlist = () => {
    clearMutate({ userId: user?._id });
  };

  if (!data?.data?.length)
    return (
      <div className="flex flex-col items-center justify-center w-full h-full text-2xl font-bold text-red-600">
        <p>wishlist is empty..</p>
        <p>Add some product to wishlist</p>
      </div>
    );
  if (isLoading) return <Loader />;

  const removeProduct = (_id: string) => {
    mutate(_id);
  };

  return (
    <div className="p-5 sm:px-10">
      {/* heading for wishlist */}
      <div className="flex justify-between">
        <div>
          <h1 className="text-2xl font-bold text-violet-600">My Wishlist</h1>
          <h4 className="text-lg font-semibold text-gray-800">
            Your wish listed product
          </h4>
        </div>
        <div>
          <button
            onClick={onClearingWishlist}
            className="bg-orange-500 text-white p-2 text-[10px] rounded hover:cursor-pointer hover:bg-red-600 transition-all duration-300"
          >
            Clear all
          </button>
        </div>
      </div>

      {/* card design  */}
      <div className="flex flex-wrap items-center justify-center sm:flex sm:flex-wrap sm:my-5 sm:justify-start ">
        {data.data.map((value) => (
          <div
            className="m-5  rounded   bg-purple-50 border border-violet-200 h-[300px] w-[250px]"
            key={value._id}
          >
            {/* image section */}

            <div className="relative">
              <button
                onClick={() => removeProduct(value._id)}
                className="absolute p-2 text-white bg-orange-500 rounded cursor-pointer right-2 top-2 transition-all duration-300  text-end hover:bg-red-600"
              >
                <FaRegTrashCan size={15} />
              </button>
              <img
                src={value.cover_img.path}
                alt={"coverImg"}
                className="object-fit w-full h-[150px]  transition-all duration-500  hover:cursor-pointer"
              />
            </div>

            {/* name */}

            <div className="flex items-center justify-between px-2 py-1">
              <h2 className="text-[16px] font-semibold">{value.name}</h2>

              {/* price */}
              <p className="text-[12px] text-violet-800 font-semibold flex justify-center items-center ">
                <TbCurrencyRupeeNepalese /> {value.price}
              </p>
            </div>

            <div className="line-clamp-3 text-gray-500 text-[12px] p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              temporibus magnam deleniti, quam quas eligendi.
            </div>

            {/* add to cart */}
          </div>
        ))}
      </div>
    </div>
  );
};

const Page = withAuth(Wishlist, allAdminAndUser);

export default Page;
