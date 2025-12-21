import axios from "axios";

const instance = axios.create({
  baseURL: "https://mern-kart-hlox.onrender.com/api",
  withCredentials: true,
});

export default instance;
