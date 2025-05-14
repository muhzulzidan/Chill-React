import axios from "axios";

const api = axios.create({
    baseURL: "https://chill-react-ashen.vercel.app",
    headers: {
        "Content-Type": "application/json",
    }
});

export default api;