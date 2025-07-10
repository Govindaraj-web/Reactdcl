import React from 'react'
import Props1 from './Props1'
import css from '/assets/hard.png'
import js from '/assets/yotu.png'
import html from '/assets/chrome.jpg'

function Sortfilter() {
    const courses = [
        {
            id: 1,
            name: "HTML",
            price: "199",
            image: html,
            rating: 5
        },
        {
            id: 2,
            name: "CSS",
            price: "199",
            image: css,
            rating: 5
        },
        {
            id: 3,
            name: "JavaScript",
            price: "499",
            image: js,
            rating: 4
        },
        {
            id: 4,
            name: "React JS",
            price: "999",
            image: js,
            rating: 5
        }
    ]

    // courses.sort((x,y) => x.rating -y.rating) // ascending order
    courses.sort((x, y) => y.rating - x.rating) // desascending order

    // courses.sort((x, y) => y.price - x.price)
    const vfmCourses = courses.filter((course) => course.price < 200)

    // const coursesList = courses.map((course, index) => sort line
    // const coursesList = vfmCourses.map((course, index) => filter line

    const coursesList = courses.map((course, index) => (
        <Props1
            key={index}
            name={course.name}
            image={course.image}
            price={course.price}
            rating={course.rating}
        />
    ));
    return (
        <>{coursesList}
            <div className='routerr'>
                <img src="../assets/props1.png" alt="props1" />
                <img src="../assets/props2.png" alt="props2" />
                <img src="../assets/sortfilter.png" alt="cssmethod" />
            </div>
        </>
    )
}
export default Sortfilter