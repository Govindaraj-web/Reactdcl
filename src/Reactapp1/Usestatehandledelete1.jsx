import { useState } from "react"

function Usestatehandledelete1(props) {
    const [purchased,setPurchased] = useState('false')
    
        const [discount,setDiscount] =useState(props.price)
    
    
    
        function BuyCourse(amt){
            setPurchased('true')
            setDiscount(discount-amt)
        }

  return (
    props.name &&  <div className="propscard"> 
        <img src={props.image} alt="Myimage" />
        <h3>{props.name}</h3>
        <p>{discount}</p>
        <button onClick={() => {BuyCourse(20)}}>Buy Now</button>
        <button onClick={() => props.delete(props.id)}>Delete</button>
        <p>{purchased}</p>
    </div>
  )
}

export default Usestatehandledelete1