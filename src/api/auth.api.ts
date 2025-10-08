/* eslint-disable @typescript-eslint/no-explicit-any */
import type { IloginData, ISignup } from "../types/auth.types";
import api from "./";

export const loginApi = async (data: IloginData) => {
  try {
    const response = await api.post(`/auth/login`, data);
    console.log(response);
    return response.data;
  } catch (error: any) {
    // return error;
    console.log(error);
    throw error.response.data;
  }
};

export const signUpApi = async (data: ISignup) => {
  try {
    const response = await api.post(`/auth/register`, data);

    console.log(response);
    return response.data;
  } catch (error: any) {
    console.log(error);
    throw error.response.data;
  }
};

export const logoutApi = async () => {
  try {
    const response = await api.post(`/auth/logout`);
    console.log(response);
    return response.data;
  } catch (error: any) {
    console.log(error);
    throw error.response.data;
  }
};

export const profileApi = async () => {
  try {
    const response = await api.get("/auth/me");

    console.log(response.data);

    return response.data;
  } catch (error: any) {
    console.log(error);

    throw error.response.data;
  }
};

export interface IChangePassword {
  email: string;
  old_password: string;
  new_password: string;
}

// change password Api
export const changePasswordApi = async (
  id: string,
  data: IChangePassword
): Promise<IChangePassword> => {
  const response = await api.post<IChangePassword>(
    `/auth/changePassword?${id}`,
    data
  );

  console.log(response);

  return response.data;
};
