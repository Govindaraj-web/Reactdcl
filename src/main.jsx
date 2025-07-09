import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import AmazGridBox from './amaz/AmazGridBox.jsx'
import AmazScrollbar from './amaz/AmazScrollbar.jsx'
import Demo from './Demo.jsx'
import Routerreact from './router_file/Routerreact.jsx'
import Usememousecallback from './usehook/Usememousecallback.jsx'
import Useref from './usehook/Useref.jsx'

const router = createBrowserRouter ([
  {
    path:'/',
    element:<App />
  },
  {
    path:'/Demo',
    element:<Demo />
  },
  {
    path:'/amaz/AmazGridbo',
    element:<AmazGridBox />
  },
  {
    path:'/amaz/AmazScrollbar',
    element:<AmazScrollbar />
  },
  {
    path: '/router_file/Routerr',
    element:<Routerreact />
  },
  {
    path:'/usehook/UseMemo&UseCallback',
    element:<Usememousecallback />
  },
  {
    path:'/usehook/UseRef',
    element:<Useref />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
