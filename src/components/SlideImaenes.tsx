import { FC } from 'react';
import { Grid, Image } from '@nextui-org/react';


interface Props {
    imagenen: string
}

export const SlideImaenes: FC<Props> = ({ imagenen }) => {

    return (
        <Grid>
            <Image
                css={{
                    borderRadius: 10
                }}
                src={imagenen}
                width={200}
                height={150}
            />

        </Grid>

    )
}
