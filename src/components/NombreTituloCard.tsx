import { Card, Grid, Text } from "@nextui-org/react"
import { FC } from "react";
import { Link } from "react-router-dom";

interface Props {
    nombre: string;
    descripcion: string;
    descripcionUrl: string
}

export const NombreTituloCard: FC<Props> = ({ descripcion, descripcionUrl }) => {
    return (
        <Grid xs={12}>
            <Card css={{ textJustify: 'unset' }} >
                <Card.Header>
                    <Text
                        h2
                        weight="bold"
                    >
                        Descripción
                    </Text>
                </Card.Header>

                <Card.Body>
                    <Text span >{descripcion}</Text>
                    <Link to={descripcionUrl} target="_blank" >
                        <Text color="primary" span> Ver Descripcion completa </Text>
                    </Link>
                </Card.Body>
            </Card>

        </Grid>
    )
}
