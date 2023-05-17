import { Card, Grid, Row, Text } from "@nextui-org/react"
import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  id: number;
  imgUrl: string;
  title: string;
  date: string
  permalink: string
}


export const CardShow: FC<Props> = (props) => {

  const navigate = useNavigate()

  const cardLink = () => {
    navigate(`/show-details/${ props.permalink }`)
  }

  return (
    <Grid xs={12} sm={3}>
      <Card 
        isPressable 
        isHoverable
        onClick={cardLink}
        >
        <Card.Body css={{ p: 0 }}>
          <Card.Image
            src={props.imgUrl}
            objectFit="cover"
            width="100%"
            height={500}
            alt={props.title} />
        </Card.Body>
        <Card.Footer css={{ justifyItems: "flex-start" }}>
          <Row wrap="wrap" justify="space-between" align="center">
            <Text b>{props.title}</Text>
            <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
              {props.date}
            </Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  )
}
