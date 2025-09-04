import type { TResponse } from "../types/generic";
import type { IProduct } from "../types/product.types";
import api from "./index";

interface ICartResponse {
  user: string;
  items: [
    {
      product: IProduct;
      quantity: number;
      total_price: number;
    }
  ];
  total_amount: number;
}

export const getAllCartData = async (): TResponse<ICartResponse> => {
  const response = await api.get<TResponse<ICartResponse>>("/cart");

  console.log(response.data);

  return response.data;
};

interface ICart {
  user: string;
  items: {
    product: IProduct;
    quantity: number;
    total_price: number;
  };
  total_amount: number;
}

export const pushProductToCart = async (data: {
  productId: string;
  quantity: number;
}): TResponse<ICart> => {
  const response = await api.post<TResponse<ICart>>("/cart", data);

  console.log(response.data);

  return response.data;
};
