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

export const createBrand = async (data: {
  brand_name: string;
  logo: FileList;
  description: string;
}): TResponse<IBrand> => {
  const formData = new FormData();

  formData.append("brand_name", data.brand_name);
  formData.append("logo", data.logo[0]);
  formData.append("description", data.description);

  const response = await api.post<TResponse<IBrand>>(`/brand`, formData, {
    headers: {
      "Content-Type": "multipart/form-data", // 👈 force multipart
    },
  });

  console.log(response);

  return response.data;
};
