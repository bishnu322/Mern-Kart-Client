import type { IBrand } from "./brand.types";
import type { ICategoryResponse } from "./category.types";
import type { IImage, IResponse, IUser } from "./global.types";

export interface IProduct extends IResponse {
  _id: string;
  cover_img: IImage;
  images?: IImage[];
  name: string;
  brand: IBrand;
  category: ICategoryResponse;
  createdBy: IUser;
  isFeatured: boolean;
  stock: number;
  price: number;
  description: string;
  size?: string;
}

export interface IUpdateProductData {
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  brand: string;
  isFeatured: boolean;
  cover_img: FileList;
  images: FileList;
}
