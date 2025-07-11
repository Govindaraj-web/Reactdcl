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
import Usestate1 from './usehook/Usestate1.jsx'
import CustomerTable from './Storage/CustomerTable.jsx'
import LocalStores from './Storage/LocalStores.jsx'
import Usestate2 from './usehook/Usestate2.jsx'
import Usestate3 from './usehook/Usestate3.jsx'
import Usestate4 from './usehook/Usestate4.jsx'
import Stringfy from './Storage/Stringfy.jsx'
import UseEffect2 from './usehook/UseEffect2.jsx'
import Bannerslide from './amaz/Bannerslide.jsx'
import Shoppingcard from './amaz/Shoppingcard.jsx'
import Bgcolorchange from './usehook/Bgcolorchange.jsx'
import Quest from './Reactapp1/Quest.jsx'

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
    path:'bannerslide',
    element:<Bannerslide />
  },
  {
    path:'shopcard',
    element:<Shoppingcard />
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
  },
  {
    path:'usestate1',
    element:<Usestate1 />
  },
  {
    path:'customert',
    element:<CustomerTable />
  },
  {
    path:'Localstro',
    element:<LocalStores />
  },
  {
    path:'usestate2',
    element:<Usestate2 />
  },
  {
    path:'usestate3',
    element:<Usestate3 />
  },
  {
    path:'usestate4',
    element:<Usestate4 />
  },
  {
    path:'usestate5',
    element:<Bgcolorchange />
  },
  {
    path:'stringfy',
    element:<Stringfy />
  },
  {
    path:'useeffect2',
    element:<UseEffect2 />
  },
  {
    path:'ques',
    element:<Quest />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
