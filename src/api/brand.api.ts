import { type IBrand } from "./../types/brand.types";
import { type TResponse } from "./../types/generic";
import api from "./index";

//* fetching all the brand

export const getAllBrand = async (params: {
  query?: string;
}): TResponse<IBrand[]> => {
  const response = await api.get<TResponse<IBrand[]>>(`/brand`, { params });
  console.log(response.data);

  return response.data;
};

//* fetching brand by id

export const getBrandById = async (query: string): TResponse<IBrand> => {
  const response = await api.get<TResponse<IBrand>>(`/brand/${query}`);

  console.log(response);

  return response.data;
};
