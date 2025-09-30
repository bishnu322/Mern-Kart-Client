import type { IResponse } from "./global.types";

export interface IloginData {
  email: string;
  password: string;
}

export interface ISignup {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone_number: string;
  confirm_password: string;
}

export interface IUserResponse extends IResponse {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
}
