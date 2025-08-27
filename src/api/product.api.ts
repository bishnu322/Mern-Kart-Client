import type { TResponse } from "../types/generic";
import type { IProduct } from "../types/product.types";
import api from "./index";

type TGetAllProduct = TResponse<IProduct[]>;
export const getAllProduct = async (): TGetAllProduct => {
  const response = await api.get<TGetAllProduct>("/product");
  return response.data;
};
