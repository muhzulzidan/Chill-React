import axios from "axios";

const api = axios.create({
    baseURL: 'https://67b08bc43fc4eef538e7b4c2.mockapi.io/api/v1',
    headers: {
        'Content-Type': 'Application/json',
    }
})

export default api