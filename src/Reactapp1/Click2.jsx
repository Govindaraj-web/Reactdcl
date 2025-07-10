import React from 'react'
import Click1 from './Click1'
import css from '/assets/hard.png'
import js from '/assets/yotu.png'
import html from '/assets/chrome.jpg'

function Click2() {

    const courses = [
        {
            id: 1, 
            name:"HTML",
            price:"199",
            image: html,
            rating: 5
        },
        {
            id: 2,
            name:"CSS",
            price:"199",
            image: css,
            rating: 5
        },
        {
            id: 3,
            name:"JavaScript",
            price:"499",
            image: js,
            rating: 4
        },
        {
            id: 4,
            name:"React JS",
            price:"999",
            image: js,
            rating: 5
        }
    ]

    const coursesList = courses.map((course, index) => (
    <Click1
      key = {index}    
      name={course.name}
      image={course.image}
      price={course.price}
      rating={course.rating}
    />
  ));
  return (
     <>{coursesList}
            <div className='routerr'>
                <img src="../assets/clicke1.png" alt="clickeventhandling" />
                <img src="../assets/clicke2.png" alt="clickeventhandling" />
                <img src="../assets/clicke3.png" alt="console_log" />
            </div>
        </>
  )
}

export default Click2