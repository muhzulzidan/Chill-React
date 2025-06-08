import axios from "axios";
import useAuthStore from "../store/useAuthStore";

const api = axios.create({
  baseURL: "http://localhost:5001",
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach JWT from Zustand to every request if available
api.interceptors.request.use(
  (config) => {
    // Zustand store is a hook, but we can access the state directly
    const token = useAuthStore.getState().token;
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;