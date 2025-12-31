import type { TResponse } from "../types/generic";
import type { IProduct, IUpdateProductData } from "../types/product.types";
import api from "./index";

//* get all product
type TGetAllProduct = TResponse<IProduct[]>;
export const getAllProduct = async (params?: {
  category?: string;
  brand?: string;
}): TGetAllProduct => {
  const response = await api.get<TGetAllProduct>("/product", { params });
  return response.data;
};

//* get all featured product
// type TGetAllProduct = TResponse<IProduct[]>;
export const getAllFeaturedProduct = async (): TGetAllProduct => {
  const response = await api.get<TGetAllProduct>("/product/featuredProduct");

  return response.data;
};

//* get product by id
type TGetProductById = TResponse<IProduct>;

export const getProductById = async (id: string): TGetProductById => {
  const response = await api.get<TGetProductById>(`/product/${id}`);

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

  // Ensure cover_img exists
  if (!data.cover_img || data.cover_img.length === 0) {
    throw new Error("Please select a cover image before uploading.");
  }

  formData.append("name", data.name);
  formData.append("description", data.description);
  formData.append("price", data.price.toString());
  formData.append("stock", data.stock.toString());
  formData.append("category", data.category);
  formData.append("brand", data.brand);
  formData.append("isFeatured", data.isFeatured.toString());

  // Append the cover image
  formData.append("cover_img", data.cover_img[0]);

  // Append additional images if present
  if (data.images && data.images.length > 0) {
    Array.from(data.images).forEach((file) => {
      formData.append("images", file);
    });
  }

  const response = await api.post(`/product`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return response.data;
};

//* update product
export const updateProduct = async (id: string, data: IUpdateProductData) => {
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

  const response = await api.put(`/product/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return response.data;
};

// * remove product

export const removeProduct = async (id: string) => {
  const response = await api.delete(`/product/${id}`);

  return response.data;
};
