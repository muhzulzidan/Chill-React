import api from "./axiosConfig";

// Dapatkan daftar semua movie di mock API
export const getMovies = async () => {
    try {
        const response = await api.get("/api/movies");
        return response.data;
    } catch (error) {
        console.log("Error saat GET movies:", error);
        return [];
    }
};

// Tambahkan film baru ke mock API
export const addMovie = async (movieData) => {
    try {
        const response = await api.post("/api/movies", movieData);
        return response.data;
    } catch (error) {
        console.log("Error saat POST movie:", error);
        throw error;
    }
};

// Edit data film tertentu di mock API
export const updateMovie = async (id, movieData) => {
    try {
        const response = await api.put(`/api/movies/${id}`, movieData);
        return response.data;
    } catch (error) {
        console.log("Error saat PUT movie:", error);
        throw error;
    }
};

// Hapus film tertentu dari mock API
export const deleteMovie = async (id) => {
    try {
        await api.delete(`/api/movies/${id}`);
        return true;
    } catch (error) {
        console.log("Error saat DELETE movie:", error);
        throw error;
    }
};