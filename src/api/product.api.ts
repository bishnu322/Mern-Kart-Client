import type { TResponse } from "../types/generic";
import type { IProduct } from "../types/product.types";
import api from "./index";

//* get all product
type TGetAllProduct = TResponse<IProduct[]>;
export const getAllProduct = async (): TGetAllProduct => {
  const response = await api.get<TGetAllProduct>("/product");
  return response.data;
};

//* get all product
// type TGetAllProduct = TResponse<IProduct[]>;
export const getAllFeaturedProduct = async (): TGetAllProduct => {
  const response = await api.get<TGetAllProduct>("/product/featuredProduct");

  console.log(response.data);
  return response.data;
};

//* get product by id
type TGetProductById = TResponse<IProduct>;

export const getProductById = async (id: string): TGetProductById => {
  const response = await api.get<TGetProductById>(`/product/${id}`);

  console.log(response.data);
  return response.data;
};

//* create product
export const createProduct = async (data: {
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  brand: string;
  isFeatured: boolean;
  cover_img: FileList;
  images: FileList;
}) => {
  const formData = new FormData();

  formData.append("name", data.name);
  formData.append("description", data.description);
  formData.append("price", data.price.toString());
  formData.append("stock", data.stock.toString());
  formData.append("category", data.category);
  formData.append("brand", data.brand);
  formData.append("isFeatured", data.isFeatured.toString());

  if (data.cover_img && data.cover_img.length > 0) {
    formData.append("cover_img", data.cover_img[0]);
  }

  if (data.images && data.images.length > 0) {
    Array.from(data.images).forEach((file) => {
      formData.append("images", file);
    });
  }

  const response = await api.post(`/product`, formData);

  console.log(response.data);

  return response.data;
};

// * remove product
