import React from 'react'

function Click1(props) {
         function BuyCourse(discount,e){
        console.log(props.name,"purchased with",discount,"%discount")
        console.log(e)
    }
  return (
     props.name &&  <div className="propscard"> 
        <img src={props.image} alt="Myimage" />
        <h3>{props.name}</h3>
        <p>{props.price}</p>

        <button onClick={(event) =>{BuyCourse(20,event)}}>Buy Now</button>
    </div>
  )
}

export default Click1