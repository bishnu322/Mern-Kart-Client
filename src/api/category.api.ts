import type { ICategoryResponse } from "../types/category.types";
import type { TResponse } from "../types/generic";
import api from "./index";

type TGetAllCategoryResponse = TResponse<ICategoryResponse[]>;
export const getAllCategory = async (): TGetAllCategoryResponse => {
  const response = await api.get<TGetAllCategoryResponse>("/category");

  return response.data;
};
