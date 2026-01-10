import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Home.jsx'
import Login from './Login.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import NotFound from './NotFound.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home />,
    errorElement:<NotFound/>
  },
  {
    path:'login',
    element:<Login />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
