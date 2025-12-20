import axios from "axios";

const instance = axios.create({
  baseURL: `${process.env.VITE_API_BASE_URL}/api`,
  withCredentials: true,
});

export default instance;
