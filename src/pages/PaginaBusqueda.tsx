import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { useBusqueda } from '../hooks';
import { useState } from 'react';
import { Grid, Loading, Text } from '@nextui-org/react'
import { CardShow, Paginacion } from '../components';


export const PaginaBusqueda = () => {

  const [pagina, setPagina] = useState(1)
  const location = useLocation();

  // Aqui estoy recuperando el dato de busqueda, tambien se puede observar en el URL de la App
  const { q = '' } = queryString.parse(location.search);

  const { busquedaShow } = useBusqueda(pagina, q)


  if (!q?.length || q.length <= 0) {
    return (
      <Text h4 >
        Para buscar, dirijase a la barra de busqueda, una vez insertado el parametro precione la tecla enter
      </Text>
    )
  }





  return (
    <>
      {
        // En caso de que la busqueda no halla encontrado resultado
        (busquedaShow.data !== undefined && busquedaShow.data?.tv_shows.length <= 0)
          ? (<>
            <Text h4 color='error' >No se encontraron shows con el nombre de {q}</Text>
          </>
          )
          :
          (
            <>

              {
                // Este componente se mostrara cuando este cargando la peticion http
                busquedaShow.isLoading ? (<Loading
                  loadingCss={{ $$loadingSize: "100px", $$loadingBorder: "10px" }}
                />) : (
                  // Aqui se carga la data existente, si existe
                  <>
                    <h3>Lista de Shows mas populares</h3>
                    <Grid.Container gap={2} justify='flex-start' >
                      {
                        busquedaShow.data?.tv_shows.map(pelicula => (
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
                      totalPaginas={+busquedaShow.data?.total!}
                      cambioPagina={(val) => setPagina(val)}
                    />
                  </>
                )
              }

            </>
          )


      }


    </>
  )
}
