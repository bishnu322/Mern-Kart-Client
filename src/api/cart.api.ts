import type { TResponse } from "../types/generic";
import type { IProduct } from "../types/product.types";
import api from "./index";

interface ICartResponse {
  product: IProduct;
}

export const getAllCartData = async (): TResponse<ICartResponse> => {
  const response = await api.get<TResponse<ICartResponse>>("/cart");

  console.log(response.data);

  return response.data;
};
