import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Demo() {

const [users,setUsers] = useState([])

useEffect(()=> {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    console.log(response)
    return response.json()})
  .then(data => setUsers(data))
  .catch(error => console.error('data not fetch:',error))
},[])

  return (
    <>
      <Link to='/'>Home</Link>  {/* Component Link */}
      <div>
        <ul>
        {users.map((user) => 
        <li key={user.id}>
          <strong>Name: {user.name}</strong>
          <p>Username: {user.username}</p>
          <p>Email Id: {user.email}</p>   
          <em>Address</em>
          <p>Street:{user.address.street}</p>      
          <p>Zipcode:{user.address.zipcode}</p>
        </li>

        )}
        </ul>
      </div>
    </>

  )
}

export default Demo

