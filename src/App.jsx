import './App.css'
import {Link} from 'react-router-dom'

function App() {
 

  return (
    <>
    <div className="homepa">
     <h1>Home Page</h1>
      <Link to='/Demo'>Demo</Link>
      <Link to='/amaz/AmazGridBo'>Amazon Grid Box</Link> 
      <Link to='/amaz/AmazScrollbar'>Amazon Scroll Bar</Link>
      <Link to='/router_file/Routerr'>Router React</Link>
      <Link to='/usehook/UseMemo&UseCallback'>UseMemo & UseCallback</Link>
      <Link to='/usehook/UseRef'>UseRef Hook</Link>
  
</div>
    </>
  )
}

export default App
