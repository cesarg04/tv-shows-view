import { Loading } from "@nextui-org/react"

export const ComponenteDeCarga = () => {
    return (
        <div>
            <Loading
                loadingCss={{ $$loadingSize: "100px", $$loadingBorder: "10px" }}
            />
        </div>
    )
}
