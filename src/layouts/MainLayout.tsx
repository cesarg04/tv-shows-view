import { Outlet } from "react-router-dom"
import { Nabvar } from "../components/Nabvar"

// Se crea un contenedor, donde estaran la
export const MainLayout = () => {
  return (
    <div>
        <Nabvar/>
        <div
          style={{
            padding: '20px 20px'
          }}
        >
        <Outlet/>

        </div>
    </div>
  )
}
