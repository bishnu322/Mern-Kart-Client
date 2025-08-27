import type { IProduct } from "./product.types";

export interface IImage {
  path: string;
  public_id: string;
}

export interface IResponse {
  _id: string;
  createdAt: string;
  updatedAt?: string;
}

export interface IUser extends IResponse {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  role: string;
  wish_list: string[] | IProduct[];
}
