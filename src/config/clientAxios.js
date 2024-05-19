import axios from "axios";

const clientAxios = axios.create({
    //TODO mover a variable de entorno
    baseURL: `http://localhost:8000`,
});

export default clientAxios;
