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
  const response = await api.get<TResponse<WishlistItem[]>>("/wishlist");

  return response.data;
};

interface AddToWishlist {
  _id: string;
  message: string;
}

export const addToWishlist = async (_id: string): TResponse<AddToWishlist> => {
  const response = await api.post<TResponse<AddToWishlist>>("/wishlist", {
    _id,
  });

  return response.data;
};

export const removeWishlistProductApi = async (productId: string) => {
  const response = await api.delete("/wishlist/remove", {
    data: { _id: productId },
  });

  return response.data;
};

export const clearAllProductFromWishlist = async (userId: any) => {
  const response = await api.post("wishlist/clear", userId);

  return response.data;
};
