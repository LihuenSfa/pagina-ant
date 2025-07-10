import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReproductorCaminos from './components/ReproductorCaminos.jsx'
import ReproductorLove from './components/ReproductorLove.jsx'
import ReproductorDocumental from './components/ReproductorDocumental.jsx'
import Nosotros from './components/Nosotros.jsx'
import Alquiler from './components/Alquiler.jsx'
import Contacto from './components/Contacto.jsx'
import Proyectos from './components/Proyectos.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
  },
  {
        path:'ReproductorCaminos',
        element: <ReproductorCaminos/>
  },
  {
        path:'ReproductorLove',
        element: <ReproductorLove/>
  },
  {
        path:'ReproductorDocumental',
        element: <ReproductorDocumental/>
  },
  {
        path:'Nosotros',
        element: <Nosotros/>
  },
  {
        path:'Alquiler',
        element: <Alquiler/>
  },
  {
      path:'Contacto',
      element: <Contacto/>
  },
  {
      path:'Proyectos',
      element: <Proyectos/>
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
