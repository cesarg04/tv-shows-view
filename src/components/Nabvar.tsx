import { FormEvent } from "react";
import { Input, Spacer, useTheme } from "@nextui-org/react"
import { Image } from "@nextui-org/react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../hooks";
import queryString from "query-string";
import tv_show_logo from '../assets/tv-show-logo.png'

interface CampoBusqueda {
    busqueda: any
}

export const Nabvar = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const { q = '' } = queryString.parse(location.search);
    const { theme } = useTheme()

    const { busqueda, onChange, resetearForm } = useForm<CampoBusqueda>({
        busqueda: q
    })

    const onSubmit = (evento: FormEvent<HTMLFormElement>) => {
        evento?.preventDefault()

        if (busqueda.trim().length <= 1) return;
        // Estoy agregando un query parameter, esto me va a simplificar las cosas a la hora de trabajar con esa data en 
        // otros componentes, sin necesidad de utilizar un gstor de estado global, o un context
        navigate(`?q=${ busqueda.toLowerCase().trim() }`)

    }

    const focusBuscar = () => {
        navigate('pagina-busqueda')
        resetearForm()

    }

    return (
        <div
            style={{
                backgroundColor: theme?.colors.gray100.value,
                width: '100%',
                display: 'flex',
                alignItems: 'center'


            }}
        >

            <div
                style={{
                    display: "flex",
                    alignItems: 'center',
                    cursor: 'pointer'
                }}
                onClick={() => navigate('/')}
            >

                <Image
                    width={70}
                    height={70}
                    src={tv_show_logo}
                />
                <h2>TV-Shows Populares</h2>
            </div>


            <Spacer css={{ flex: 1 }} />

            <div style={{ paddingRight: 10 }} >
                <form onSubmit={(evento) => onSubmit(evento) }>
                <Input
                    type="search"
                    size="lg"
                    width="200px"
                    placeholder="Buscar"
                    onFocus={focusBuscar}
                    onChange={({ target }) => onChange(target.value, 'busqueda') }
                />


                </form>
            </div>
        </div>
    )
}
