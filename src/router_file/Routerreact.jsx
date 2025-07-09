import React from 'react'
import { Link } from 'react-router-dom'

function Routerreact() {

  return (
    <>
     <Link to='/'>Home</Link>
    <div className='routerr'>
        <img src="../img/router1.png" alt="before" />
        <img src="../img/router2.png" alt="after" />
        <img src="../img/router3.png" alt="Another file" />
    </div>
    </>
  )
}

export default Routerreact