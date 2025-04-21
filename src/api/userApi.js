import api from "./axiosConfig";

export const getUsers = async () => {
    try {
        const response = await api.get("/users");
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}