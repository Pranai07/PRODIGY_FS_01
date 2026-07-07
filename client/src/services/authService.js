import axios from "axios";

const API = axios.create({
  baseURL: "https://secureauth-api-ymgl.onrender.com/api",
  withCredentials: true,
});

export const loginUser = (data) => API.post("/auth/login", data);

export const registerUser = (data) => API.post("/auth/register", data);

export const logoutUser = () =>
  API.post("/auth/logout");

export const getProfile = () =>
  API.get("/users/me", {
    withCredentials: true,
  });