/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "./index";

export const wishlistApi = async () => {
  try {
    const response = await api.get("/wishlist");

    console.log(response.data);

    return response.data;
  } catch (error: any) {
    console.log(error);
    throw error.response.data;
  }
};
