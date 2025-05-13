import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3001", // Pastikan ini sesuai dengan port JSON Server
    headers: {
        "Content-Type": "application/json",
    }
});

export default api;