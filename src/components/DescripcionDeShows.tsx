import { Badge, Card, Grid, Text } from "@nextui-org/react"
import { useParams } from "react-router-dom"
import { useDetallesShow } from "../hooks"
import { SlideImaenes } from "./SlideImaenes"

export const DescripcionDeShows = () => {

    const { permalink } = useParams()
    const { detallesShow } = useDetallesShow(permalink)

    return (
        <Grid xs={12} md={9} >
            <Card>
                <Card.Header>

                    <Text h2
                        css={{
                            textGradient: "45deg, $blue600 -20%, $pink600 50%",
                        }}
                        weight="bold"
                    >{detallesShow.data?.tvShow.name}</Text>
                </Card.Header>

                <Card.Body>
                    <Grid.Container>
                        <Grid xs={2} direction='column'  >
                            <Text h4>Fecha de incio:</Text>
                            <Badge
                                color="primary"
                                size="lg"
                            >
                                {detallesShow.data?.tvShow.start_date}
                            </Badge>
                        </Grid>

                        <Grid xs={3} direction="column" >
                            <Text  h4>Cadena Televisiva</Text>
                            <Badge 
                                enableShadow 
                                disableOutline 
                                color="warning"
                                size={'lg'}
                                >
                                { detallesShow.data?.tvShow.network }
                            </Badge>
                        </Grid> 

                        <Grid xs={4} direction="column" wrap="wrap" >
                            <Text h4 >Generos</Text>
                            <div style={{
                                display: 'flex',
                                gap: 5
                            }} >
                                {
                                    detallesShow.data?.tvShow.genres.map(genero => (
                                        <Badge
                                            size="md"
                                            enableShadow disableOutline color="success"
                                        >{genero}</Badge>
                                    ))
                                }
                            </div>
                        </Grid>

                        <Grid xs={12} direction="column" css={{
                            marginTop: '20px'
                        }} >
                            <Text h4 >Imagenes Relacionadas</Text>
                            <Grid.Container gap={3} wrap="wrap" >

                                {
                                    detallesShow.data?.tvShow.pictures.map(imagenes => (
                                        <SlideImaenes
                                            imagenen={imagenes}
                                        />

                                    ))
                                }
                            </Grid.Container>
                        </Grid>

                    </Grid.Container>
                </Card.Body>

            </Card>
        </Grid>
    )
}
