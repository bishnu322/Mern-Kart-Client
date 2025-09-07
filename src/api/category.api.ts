import type { ICategoryResponse } from "../types/category.types";
import type { TResponse } from "../types/generic";
import api from "./index";

// get all category data
type TGetAllCategoryResponse = TResponse<ICategoryResponse[]>;
export const getAllCategory = async (): TGetAllCategoryResponse => {
  const response = await api.get<TGetAllCategoryResponse>("/category");

  return response.data;
};

// post category
type TCreateCategoryResponse = TResponse<ICategoryResponse[]>;

export const createCategory = async (data: {
  name: string;
  description: string;
}): Promise<TCreateCategoryResponse> => {
  const response = await api.post<TCreateCategoryResponse>("/category", data);
  return response.data;
};

// get category by id

type TCreateCategoryResponseById = TResponse<ICategoryResponse>;

export const getCategoryById = async (
  id: string
): TCreateCategoryResponseById => {
  const response = await api.get<TCreateCategoryResponseById>(
    `/category/${id}`
  );
  return response.data;
};

// update category

type TUpdateCategoryResponseById = TResponse<ICategoryResponse>;

export const updateCategoryById = async (
  id: string,
  data: {
    name: string;
    description: string;
  }
): TUpdateCategoryResponseById => {
  const response = await api.put<TUpdateCategoryResponseById>(
    `/category/${id}`,
    data
  );

  return response.data;
};
