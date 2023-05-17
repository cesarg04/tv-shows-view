import { FC } from "react"
import { Grid, Image } from "@nextui-org/react"

interface Props {
    imgUrl: string | undefined
}

export const ImagenesShow: FC<Props> = ({ imgUrl }) => {
    return (
        <Grid xs={12} md={3} >
           
                <Image
                    src={imgUrl}
                    width={400}
                    height={500}
                    
                />

        </Grid>
    )
}
