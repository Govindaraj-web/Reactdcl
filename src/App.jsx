import './App.css'
import {Link} from 'react-router-dom'

function App() {
 

  return (
    <>
    <div className="apppage">

   
    <div className="homepa">
      <h1>React App 1</h1> 
      <Link to='/Cssmethod'>CSS Method</Link>
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
      <Link to='/router_file/Routerr'>Router React</Link>
      <Link to='/usehook/UseMemo&UseCallback'>UseMemo & UseCallback</Link>
      <Link to='/usehook/UseRef'>UseRef Hook</Link>
     </div>

           <div className="homepa">
     <h1>Online</h1>
     <Link to='Gdrive'>G-Drive</Link>
     <Link to='Drivegallery'>G-Drive Gallery</Link>
     <Link to='dummyjson'>Json file Fetch online</Link>
      
     </div>

 </div>
    </>
  )
}

export default App
