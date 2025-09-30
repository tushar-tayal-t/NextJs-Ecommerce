import axios from "axios";
const api = axios.create({
  baseURL: "https://dummyjson.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error?.response?.status, error?.message);
    return Promise.reject(error);
  }
);
export default api;