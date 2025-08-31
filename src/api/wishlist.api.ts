/* eslint-disable @typescript-eslint/no-explicit-any */
import type { TResponse } from "../types/generic";
import api from "./index";

interface WishlistItem {
  _id: string;
  name: string;
  price: string;
  cover_img: {
    path: string;
    public_id: string;
  };
}

export const wishlistApi = async (): TResponse<WishlistItem[]> => {
  try {
    const response = await api.get<TResponse<WishlistItem[]>>("/wishlist");

    console.log(response.data);

    return response.data;
  } catch (error: any) {
    console.log(error);
    throw error.response.data;
  }
};

export const removeWishlistProductApi = async (id: string) => {
  try {
    const response = await api.post("/wishlist", {
      id,
    });

    console.log(response.data);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
