import React ,{useEffect,useState} from 'react'

function UseEffect2() {
     const [users, setUsers] = useState([]);
        
          useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/users')
              .then(res => res.json())
              .then(data => setUsers(data));
          }, []);
    
  return (

    <>
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div> 
     <div className='routerr'>
                <img src="../assets/useef2.png" alt="UseEffect_method" />
            </div>
        </>
  )
}

export default UseEffect2