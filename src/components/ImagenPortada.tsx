import { Image } from "@nextui-org/react"
import { FC } from "react"

interface Props {
    url: string
}

export const ImagenPortada:FC<Props> = ({ url }) => {
  return (
    <Image
        width={200}
        height={500}
        src={url}
        alt={'Imagen no disponible'}
    />
  )
}
