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
