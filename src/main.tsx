import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// Importar el BrowserRouter para el manejo de las rutas
import { BrowserRouter } from 'react-router-dom'
// Importaciones de la libreria react query, para manejar las peticiones HTTP
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

// Importaciones de NextuiProvider, para los estilos
import { NextUIProvider } from '@nextui-org/react'
import { darkTheme } from './themes/darkTheme.ts'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const query = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={query} >
      <ReactQueryDevtools />
      <NextUIProvider theme={darkTheme} >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </NextUIProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
