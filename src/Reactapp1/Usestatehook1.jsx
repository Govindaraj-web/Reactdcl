import { useState } from "react"

function Usestatehook1(props) {
    // const [purchased,setPurchased] = useState(false) 
    const [purchased, setPurchased] = useState('false')

    const [discount, setDiscount] = useState(props.price)

    // function BuyCourse(discount){
    //     console.log(props.name,"purchased with",discount,"%discount")
    //     setPurchased('true')
    // Below function 2 }

    function BuyCourse(amt) {
        setPurchased('true')
        setDiscount(discount - amt)
    }

    return (
        props.name &&  <div className="propscard"> 
        <img src={props.image} alt="Myimage" />
        <h3>{props.name}</h3>
        {/* <p>{props.price}</p>  Below line first*/}
        <p>{discount}</p>
        <button onClick={() => {BuyCourse(20)}}>Buy Now</button>
        {/* <p>{purchased ? "Already Purchased": "Get it Now"}</p> below line second */}
        <p>{purchased}</p>
    </div>
    )
}

export default Usestatehook1