import React from 'react'


const course1 = "HTML"
function Cssmethod() {

    const styles = {
        backgroundColor: "green",
    }


    return (
  // <div style={{backgroundColor:"green", color:"white"}}>  Inline CSS
        <div style={styles}>  {/* Internal Css method */}
            {/* <div className="card"> External Css method  */}

            <h3>{course1}</h3>
            <p>This is Css Method code</p>

        </div>
    )
}

export default Cssmethod