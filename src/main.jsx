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
import Cssmethod from './Reactapp1/Cssmethod.jsx'
import Props2 from './Reactapp1/Props2.jsx'
import Sortfilter from './Reactapp1/Sortfilter.jsx'
import Click2 from './Reactapp1/Click2.jsx'
import Usestatehook2 from './Reactapp1/Usestatehook2.jsx'
import Usestatehandledelete2 from './Reactapp1/Usestatehandledelete2.jsx'
import UseEffect1 from './Reactapp1/UseEffect1.jsx'
import Fetchapidata from './Reactapp1/Fetchapidata.jsx'
import Errorsettimeout from './Reactapp1/Errorsettimeout.jsx'
import Usefetch from './Reactapp1/Usefetch.jsx'
import Arjuna from './Gdrive/Arjuna.jsx'
import DummyJson from './Jsononline/DummyJson.jsx'
import DriveGallery from './Gdrive/DriveGallery.jsx'
import Reactinstalandshortcut from './Reactapp1/Reactinstalandshortcut.jsx'


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
  },
  {
    path:'/reactinst',
    element:<Reactinstalandshortcut />
  },
  {
    path:'Cssmethod',
    element:<Cssmethod />
  },
  {
    path:'Propsmethod',
    element:<Props2 />
  },
  {
    path:'sortfilter',
    element:<Sortfilter />
  },
  {
    path:'clickevents',
    element:<Click2 />
  },
  {
    path:'usestatehook',
    element:<Usestatehook2 />
  },
  {
    path:'usestatehandledelete',
    element:<Usestatehandledelete2 />
  },
  {
    path:'useeffect1',
    element:<UseEffect1 />
  },
  {
    path:'fetchapi',
    element:<Fetchapidata />
  },
  {
    path:"errorandsettimeout",
    element:<Errorsettimeout />
  },
  {
    path:'customhook',
    element:<Usefetch />
  },
  {
    path:'Gdrive',
    element:<Arjuna />
  },
  {
    path:'Drivegallery',
    element:<DriveGallery />
  },
  {
    path:'dummyjson',
    element:<DummyJson />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
