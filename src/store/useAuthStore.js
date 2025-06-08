import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: null,
  token: null,
  login: (userData) => {
    if (userData.token) {
      set({ user: userData, token: userData.token });
      console.log('JWT Token:', userData.token);
    } else {
      set({ user: userData });
    }
  },
  logout: () => set({ user: null, token: null }),
}));

export default useAuthStore