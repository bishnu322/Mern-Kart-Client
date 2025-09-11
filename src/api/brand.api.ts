import { type IBrand } from "./../types/brand.types";
import { type TResponse } from "./../types/generic";
import api from "./index";

//* get all the brand

export const getAllBrand = async (): TResponse<IBrand[]> => {
  const response = await api.get<TResponse<IBrand[]>>("/brand");
  console.log(response.data);

  return response.data;
};
