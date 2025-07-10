import React from 'react'


const course1 = "HTML"
function Cssmethod() {

    const styles = {
        backgroundColor: "green",
    }

    return (
        <>
    <div style={styles}>  {/* Internal Css method */}
 {/* <div className="card"> External Css method  */}
        <h3>{course1}</h3>
        <p style={{backgroundColor:"blue", color:"white"}}>
            This is Css Method code</p>  {/* Inline CSS */}

    </div>
         <div className='routerr'>
        <img src="../assets/cssmeth.png" alt="cssmethod" />
    </div>
    </>
    )
}

export default Cssmethod

