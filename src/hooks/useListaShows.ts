import { useQuery } from "@tanstack/react-query"
import { apiGestor } from "../api"
import { Popular } from "../types"


// Esta es la peticion HTTP que va a gestionar 
const peticion = async (pagina: number) => {
    const { data } = await apiGestor.get<Popular>(`most-popular/?page=${ pagina }`)
    return data
}


export const useListaShows = ( pagina: number ) => {


    const TodosLosShows = useQuery(
        ['shows', pagina],
        () => peticion(pagina),
        {
            keepPreviousData: true
        }
    )

    return {
        TodosLosShows
    }

}
