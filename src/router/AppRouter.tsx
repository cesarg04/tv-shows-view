import { Route, Routes } from "react-router-dom"
import { Home } from "../pages"
import { MainLayout } from "../layouts/MainLayout"
import { DescripcionShow } from "../pages/DescripcionShow"
import { PaginaBusqueda } from "../pages/PaginaBusqueda"


export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route path="/" element={<Home />} />   
                <Route path="show-details/:permalink" element={ <DescripcionShow/> }/>
                <Route path="pagina-busqueda" element={ <PaginaBusqueda/> } />
            </Route>
    </Routes >
  )
}
