import { type IBrand } from "./../types/brand.types";
import { type TResponse } from "./../types/generic";
import api from "./index";

//* fetching all the brand

export const getAllBrand = async (params?: {
  query?: string;
}): TResponse<IBrand[]> => {
  const response = await api.get<TResponse<IBrand[]>>(`/brand`, { params });
  console.log(response.data);

  return response.data;
};

//* register brand

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
      "Content-Type": "multipart/form-data",
    },
  });

  console.log(response);

  return response.data;
};

// //* update brand by id

export const UpdateBrand = async (
  id: string,
  data: {
    brand_name: string;
    logo: FileList;
    description: string;
  }
): TResponse<IBrand> => {
  const formData = new FormData();

  formData.append("brand_name", data.brand_name);
  formData.append("logo", data.logo[0]);
  formData.append("description", data.description);

  const response = await api.put<TResponse<IBrand>>(`/brand/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  console.log(response);

  return response.data;
};

// *get brand data by id
export const getBrandById = async (id: string): TResponse<IBrand[]> => {
  const response = await api.get<TResponse<IBrand[]>>(`/brand/${id}`);
  console.log(response.data);

  return response.data;
};

// * removing brand
export const removeBrand = async (id: string) => {
  const response = await api.delete(`/brand/${id}`);

  console.log(response.data);

  return response.data;
};
