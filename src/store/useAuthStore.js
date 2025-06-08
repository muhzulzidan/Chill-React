import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: localStorage.getItem("token") || null,
  login: (userData) => {
    if (userData.token) {
      set({ user: userData, token: userData.token });
      localStorage.setItem("user", JSON.stringify(userData));
      localStorage.setItem("token", userData.token);
      console.log('JWT Token:', userData.token);
    } else {
      set({ user: userData });
      localStorage.setItem("user", JSON.stringify(userData));
    }
  },
  logout: () => {
    set({ user: null, token: null });
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  },
}));

export default useAuthStore