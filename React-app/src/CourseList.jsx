import Course from './Course';
import image1 from './assets/html.png';
import image2 from './assets/css.jpg';
import image3 from './assets/js.png';
import { useEffect, useState } from 'react';

function CourseList() {
  const [courses,setCourses] = useState(null);

  const [dummy,setDummy] = useState(true)

  useEffect(()=>{
    // console.log("use effect called")
    // console.log(dummy)

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response=>{
      console.log(response)
      return response.json()
    }).then(data=>{console.log(data)})

  })

  function handleDelete(id){
    const newCourses = courses.filter((courses)=>courses.id!=id)
    setCourses(newCourses)
  }

//sorting

courses.sort((x,y)=>y.price-x.price)

//filtering 
const vfmcourse = courses.filter((course)=>course.price>50)

  //const coursesList = vfmcourse.map(
  const coursesList = courses.map(
    (course)=> 
    <Course
      key ={course.id}
      name={course.name}
      price={course.price}
      image={course.image}
      delete = {handleDelete}
      id={course.id}
    />);

  return(
    <>
    {coursesList}
    <button onClick={()=>{setDummy(false)}}>Dummy Button</button>
    </>
  );
  
}

export default CourseList;


//map(course,index)
//key = {index}