import { useQuery } from "@tanstack/react-query";
import { apiGestor } from "../api"
import { Popular } from "../types";

const peticion = async(pagina: number, busqueda?: string | (string | null)[] | null) => {
    //  Se usa la misma interfaz porque es la misma date que retorna el Endpoint
    const { data }  = await apiGestor<Popular>(`search?q=${busqueda}&page=${pagina}`);

    return data
}


export const useBusqueda = (pagina: number, busqueda?: string | (string | null)[] | null ) => {

    const busquedaShow = useQuery(
        ['busqueda', pagina, busqueda],
        () => peticion(pagina, busqueda),
        {
            enabled: busqueda !== undefined
        }
    )

    return {
        busquedaShow
    }

}