import api from "./axiosConfig";

export const getWatchlist = async () => {
    try {
        const response = await api.get ("/watchlist");
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}