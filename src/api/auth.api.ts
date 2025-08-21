import axios from "axios";
import type { IloginData } from "../types/auth.types";

export const loginApi = async (data: IloginData) => {
  try {
    const response = await axios.post(
      `https://mern-kart-hlox.onrender.com/api/auth/login`,
      data
    );
    console.log(response);
    return response.data;
  } catch (error: any) {
    // return error;
    console.log(error);
    throw error.response.data;
  }
};
