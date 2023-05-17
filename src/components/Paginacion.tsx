import { Grid, Pagination } from "@nextui-org/react"
import { FC } from "react";

interface Props {
    paginaInicial?: number;
    totalPaginas?: number;
    cambioPagina: (val: number) => void
}
// Esta es la logica para la paginacion.
export const Paginacion:FC<Props> = ({ cambioPagina, paginaInicial, totalPaginas = 10 }) => {
    return (
        <Grid.Container gap={2} >
            <Grid xs={12}>
                <Pagination 
                    color={'primary'} 
                    total={totalPaginas} 
                    initialPage={paginaInicial}
                    onChange={
                        (page: number) => cambioPagina(page)
                    }
                    size="xl"
                     />
            </Grid>
        </Grid.Container>
    )
}
