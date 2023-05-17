import { useState } from "react"
import { Grid, Loading } from "@nextui-org/react"
import { useListaShows } from "../hooks"
import { CardShow } from "../components/CardShow";
import { Paginacion } from "../components/Paginacion";

export const Home = () => {

  const [pagina, setpagina] = useState<number>(1);
  const { TodosLosShows } = useListaShows(pagina);


  return (
    <>

      {
        // Componente de carga
        TodosLosShows.isLoading ? (
          <Loading
            loadingCss={{ $$loadingSize: "100px", $$loadingBorder: "10px" }}
          />

        ) : (
          <>
            <h3>Lista de Shows mas populares</h3>
            <Grid.Container gap={2} justify='flex-start' >
              {
                TodosLosShows.data?.tv_shows.map(pelicula => (
                  <CardShow
                    key={pelicula.id}
                    id={pelicula.id}
                    date={pelicula.start_date}
                    imgUrl={pelicula.image_thumbnail_path}
                    title={pelicula.name}
                    permalink={pelicula.permalink}
                  />
                ))
              }
            </Grid.Container>

            <Paginacion
              paginaInicial={pagina}
              totalPaginas={+TodosLosShows.data?.total!}
              cambioPagina={(val) => setpagina(val)}
            />
          </>
        )
      }

    </>
  )
}
