import axios from "axios";

const clientAxios = axios.create({
    //TODO mover a variable de entorno
    baseURL: `${import.meta.env.VITE_BACKEND_URL}`,
});

export default clientAxios;
