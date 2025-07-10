import React from 'react'

function Props1(props) {

  return (
   
 // props.name && <=Handling Missing Data <div className="card">  
   props.name &&  
            <div className="propscard"> 
            <img src={props.image} alt="Myimage" />
            <h3>{props.name}</h3>
            <p>{props.price}</p>
            <span>{props.rating}</span>
        </div>
  )
}

export default Props1
