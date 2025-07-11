import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Demo() {

const [user,setUser]=useState([])

useEffect(()=>{setTimeout(() => {
  

  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response)=>{
    console.log(response)
    return response.json()
  }).then((data) =>{
    setUser(data)}
  ).catch(error =>console.error("data not fetch:",error))
  }, 1000);
},[])

  return (
    <>
      <Link to='/'>Home</Link>  {/* Component Link */}
      <div>
        <h1>User List Json</h1>
        <ul>
        {user.map((use)=>(
          <li key={use.id}>
            <h2>{use.name}</h2>
            <h5>{use.username}</h5>
            <p>{use.email}</p>
          </li>
        ))}
        </ul>
      </div>
    </>

  )
}

export default Demo