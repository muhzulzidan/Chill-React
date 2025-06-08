
import { create } from "zustand";
import api from "../api/axiosConfig";


const useMovieStore = create((set, get) => ({
  movies: [],
  selectedMovie: null,
  setSelectedMovie: (movie) => set({ selectedMovie: movie }),
  clearSelectedMovie: () => set({ selectedMovie: null }),
  fetchMovies: async (category = "") => {
    let url = "/api/movies";
    if (category) {
      url += `/movie/${category}`;
    }
    const response = await api.get(url);
    set({ movies: response.data.results || [] });
  },
  addMovie: async (movieData) => {
    await api.post("/api/movies", movieData);
    get().fetchMovies();
  },
  editMovie: async (id, movieData) => {
    await api.put(`/api/movies/${id}` , movieData);
    get().fetchMovies();
  },
  deleteMovie: async (id) => {
    await api.delete(`/api/movies/${id}`);
    get().fetchMovies();
  },
}));

export default useMovieStore;