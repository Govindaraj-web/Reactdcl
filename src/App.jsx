import './App.css'
import {Link} from 'react-router-dom'

function App() {
 

  return (
    <>
    <div className="apppage">

   
    <div className="homepa">
      <h1>React App 1</h1> 
      <Link to='/reactinst'>React install and Shortcut Key</Link>
      <Link to='/ques'>React & FED question</Link>
      <Link to='/Cssmethod'>CSS Method </Link>
      <Link to='/Propsmethod'>Props Method</Link>
      <Link to='/sortfilter'>Sort & Filter</Link>
      <Link to='/clickevents'>Click Events</Link>
      <Link to='/usestatehook'>UseState Hook</Link>
      <Link to='/usestatehandledelete'>UseState Handle Delete</Link>
      <Link to='useeffect1'>UseEffect insert method</Link>
      <Link to='fetchapi'>Fetch API Data or JSON Resource</Link>
      <Link to='errorandsettimeout'>Error Handling & Settimout method</Link>
      <Link to='customhook'>UseFetch & CustomHook</Link> 
      </div>


      <div className="homepa">
     <h1>Home Page</h1>
      <Link to='/Demo'>Demo</Link>
      <Link to='/amaz/AmazGridBo'>Amazon Grid Box</Link> 
      <Link to='/amaz/AmazScrollbar'>Amazon Scroll Bar</Link>
      <Link to='bannerslide'>Amazon Banner</Link>
      <Link to='shopcard'>Amazon Shopping card</Link>
      <Link to='/router_file/Routerr'>Router React</Link>
      <Link to='/usehook/UseMemo&UseCallback'>UseMemo & UseCallback</Link>
      <Link to='/usehook/UseRef'>UseRef Hook</Link>
      <Link to='/usestate1'>UseState1</Link>
      <Link to='/usestate2'>UseState2</Link>
      <Link to='/usestate3'>UseState3</Link>
      <Link to='/usestate4'>UseState4</Link>
      <Link to='/usestate5'>UseState5</Link>
      <Link to='useeffect2'>UseEffect hook</Link>
     </div>

           <div className="homepa">
     <h1>Online</h1>
     <Link to='Gdrive'>G-Drive</Link>
     <Link to='Drivegallery'>G-Drive Gallery</Link>
     <Link to='dummyjson'>Json file Fetch online</Link>
     <Link to='customert'>Customer Table</Link>
     <Link to='Localstro'>Local Storage</Link>
     <Link to='stringfy'>Stringfy</Link>
      
     </div>

 </div>
    </>
  )
}

export default App
