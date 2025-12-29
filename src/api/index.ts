import axios from "axios";

const instance = axios.create({
  baseURL: "https://mern-kart-hlox.onrender.com/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
