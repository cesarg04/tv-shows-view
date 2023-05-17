import { useQuery } from "@tanstack/react-query"
import { apiGestor } from "../api"
import { DetallesShow } from "../types"

const peticion = async (term?: string) => {
    const { data } = await apiGestor.get<DetallesShow>(`show-details?q=${term}`)
    return data
}

export const useDetallesShow = (term?: string) => {
    // Esto es react query, sirve para manejar las peticiones HTTP de manera eficiente, dandonos muchas funciones que podemos
    // utilizar para gestionar los datos de nuestra app.
    const detallesShow = useQuery(
        ['detalles_show', term],
        () => peticion(term),
        {
            enabled: term !== undefined //Esto sirve, para cuando el parametro no tenga ninun dato, entonces no se hara la peticion.
        }
    )

    return {
        detallesShow
    }
}
