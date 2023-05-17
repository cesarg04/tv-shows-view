import { useParams } from "react-router-dom"
import { Grid, Loading } from "@nextui-org/react"
import { NombreTituloCard } from '../components/NombreTituloCard'
import { useDetallesShow } from "../hooks/useShow"
import { ImagenesShow } from "../components/ImagenesShow"
import { DescripcionDeShows } from "../components/DescripcionDeShows"

export const DescripcionShow = () => {

  const { permalink } = useParams()

  // Se importa el Hook, y se obtiene la data requerida.
  const { detallesShow } = useDetallesShow(permalink)

  return (
    <div>
      {
        detallesShow.isLoading ? (
          <Loading
            loadingCss={{ $$loadingSize: "100px", $$loadingBorder: "10px" }}
          />
        ) : (
      <>
        <Grid.Container gap={2} >
          <ImagenesShow
            imgUrl={detallesShow.data?.tvShow.image_path}
          />

          <DescripcionDeShows />

          <NombreTituloCard
            nombre={`${detallesShow.data?.tvShow.name}`}
            descripcion={`${detallesShow.data?.tvShow.description}`}
            descripcionUrl={`${detallesShow.data?.tvShow.description_source}`}
          />


        </Grid.Container>
      </>
      )
      }

    </div>
  )
}
