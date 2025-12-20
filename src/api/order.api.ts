import type { TOrderFormValues } from "../schema/order.schema";
import type { TResponse } from "../types/generic";
import type { IUser } from "../types/global.types";
import type { IProduct } from "../types/product.types";
import api from "./";

interface IPlaceOrderResponse {
  success: boolean;
  status: string;
  message: string;
}

interface IPlaceOrderPayload {
  items: { product: string; quantity: string }[];
  shipping_address: TOrderFormValues;
}

interface IGetAllOrderResponse {
  shipping_address: TOrderFormValues;
  _id: string;
  payment_method: string;
  createdAt: string;
  user: IUser;
  items: {
    _id: string;
    quantity: number;
    total_price: number;
    product: IProduct;
  }[];
}

export const placeOrder = async (
  data: IPlaceOrderPayload
): TResponse<IPlaceOrderResponse> => {
  const response = await api.post(`/order`, data);

  return response.data;
};

export const getAllOrder = async (): TResponse<IGetAllOrderResponse[]> => {
  const response = await api.get(`/order/all`);

  return response.data;
};

export const getMyOrders = async (): TResponse<IGetAllOrderResponse[]> => {
  const response = await api.get(`/order`);

  return response.data;
};
