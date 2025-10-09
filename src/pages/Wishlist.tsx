/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
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
      <div className="w-full h-full flex flex-col justify-center items-center text-2xl font-bold text-red-600">
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
          <h1 className="font-bold text-2xl text-violet-600">My Wishlist</h1>
          <h4 className="font-semibold text-lg text-gray-800">
            Your wish listed product
          </h4>
        </div>
        <div>
          <button
            onClick={onClearingWishlist}
            className="bg-gray-400 text-white font-semibold px-3 py-2 rounded hover:cursor-pointer hover:bg-gray-500 transition-all duration-300"
          >
            Clear all
          </button>
        </div>
      </div>

      <div className="flex justify-center flex-wrap items-center sm:flex sm:flex-wrap sm:my-5 sm:justify-start">
        {data.data.map((value) => (
          <div
            className="m-5  w-[300px] rounded  shadow-xl shadow-gray-300 bg-white"
            key={value._id}
          >
            <button
              onClick={() => removeProduct(value._id)}
              className="transition-all duration-300  text-end bg-gray-300 p-2 rounded text-red-600 hover:bg-red-200 cursor-pointer"
            >
              <FaRegTrashCan size={20} />
            </button>

            {/* image section */}

            <div>
              <img
                src={value.cover_img.path}
                alt={""}
                className="object-cover w-full h-[150px]  transition-all duration-500  hover:cursor-pointer"
              />
            </div>

            {/* name */}

            <div className="flex justify-between my-1 p-4">
              <h2 className="text-lg text-violet-800 font-semibold">
                {value.name}
              </h2>
              {/* description */}

              {/* price */}
              <p className="text-md text-violet-800 font-semibold">
                NPR. {value.price}
              </p>
            </div>

            <div className="line-clamp-2 my-3 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              temporibus magnam deleniti, quam quas eligendi.
            </div>

            {/* button */}

            {/* view detail */}

            {/* add to cart */}
          </div>
        ))}
      </div>
    </div>
  );
};

const Page = withAuth(Wishlist, allAdminAndUser);

export default Page;
