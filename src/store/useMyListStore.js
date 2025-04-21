import { create } from "zustand";
import api from "../api/axiosConfig";

const useMyListStore = create((set) => ({
  myList: [],

  fetchMyList: async (userId) => {
    try {
      if (!userId) {
        throw new Error("User ID tidak ditemukan, pastikan user sudah login!");
      }
  
      const url = `/users/${userId}/watchlist`;
      const response = await api.get(url);
  
      set({ myList: response.data });
    } catch (error) {
  
      if (error.response) {
        console.error("⚠️ Response Error:", error.response.status, error.response.data);
      }
    }
  },
  
  addToMyList: async (userId, movie) => {
    try {
      if (!userId || !movie.id) {
        throw new Error("User ID dan Movie ID tidak boleh kosong");
      }

      const response = await api.post("/watchlist", {
        user_id: userId,
        movie_id: movie.id,
      });

      set((state) => ({
        myList: [...state.myList, { ...response.data, movie }],
      }));

    } catch (error) {
      console.error("Gagal menambahkan film:", error);
    }
  },

  removeFromMyList: async (userId, movieId) => {
    try {
      const response = await api.get(`/watchlist?user_id=${userId}`);
      const watchlist = response.data;

      const movieToRemove = watchlist.find((item) => item.movie_id === movieId);

      if (!movieToRemove) {
        console.error("Film tidak ditemukan di MyList");
        return;
      }

      await api.delete(`/watchlist/${movieToRemove.id}`);

      set((state) => ({
        myList: state.myList.filter((m) => m.movie_id !== movieId),
      }));

    } catch (error) {
      console.error("Gagal menghapus film:", error);
    }
  },
}));

export default useMyListStore;
