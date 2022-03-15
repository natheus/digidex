import axios from "axios";

const api = axios.create({
    baseURL: "https://digimon-api.vercel.app/api/digimon"
});

export default api;