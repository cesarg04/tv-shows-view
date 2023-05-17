import axios from "axios";
// Accediendo a la variable de entorno, en donde esta alojado la baseURL de la api
const url = import.meta.env.VITE_URL

// Creando la instancia de Axios
export const apiGestor = axios.create({
    baseURL: url
})

