import { useState,useEffect } from 'react'
import Usestatehandledelete1 from './Usestatehandledelete1'
import css from '/assets/hard.png'
import js from '/assets/yotu.png'
import html from '/assets/chrome.jpg'

function UseEffect1() {

     const [courses,setCourses] = useState( [
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
])

const [dummy,setDummy] =useState(true)

useEffect(()=>{
    console.log('use Effect Called')
    console.log(dummy)
},[])  //Please check notes breif Explain is there


//Handle Delete Function 
function handleDelete(id){
    // console.log(id)
    const newCourses = courses.filter((course) => course.id !=id)
    setCourses(newCourses)
}

const coursesList = courses.map((course) => (
    <Usestatehandledelete1
      key = {course.id}    
      name={course.name}
      image={course.image}
      price={course.price}
      rating={course.rating}
      delete = {handleDelete}
      id={course.id}
    />
  ));

  return (
    <>
    {coursesList}
    <button onClick={()=>setDummy(false)}> dummy button</button>
    <div className='useeff'>
                <img src="../assets/usestatehd1.png" alt="usestate_handle_delete1" />
                <img src="../assets/usestatehd2.png" alt="usestate_handle_delete2" />
                <img src="../assets/useeffect1.png" alt="useeffect1" />
                <img src="../assets/useeffect2.png" alt="useeffect_nodes" />
            </div>
           
    </>
    
  )
}

export default UseEffect1