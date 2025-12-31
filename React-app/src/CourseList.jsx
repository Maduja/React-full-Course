import Course from './Course';
import { useEffect, useState } from 'react';

function CourseList() {
  const [courses,setCourses] = useState(null);

  const [dummy,setDummy] = useState(true)

  useEffect(()=>{
    // console.log("use effect called")
    // console.log(dummy)

    fetch('http://localhost:3000/courses')
    .then(response=>{
      console.log(response)
      return response.json()
    }).then(data=>setCourses(data))

  },[])

  function handleDelete(id){
    const newCourses = courses.filter((courses)=>courses.id!=id)
    setCourses(newCourses)
  }

//sorting

//courses.sort((x,y)=>y.price-x.price)

//filtering 
const vfmcourse = courses.filter((course)=>course.price>50)

  //const coursesList = vfmcourse.map(

  if(!courses){
    return <></>
  }
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

//npx json-server --watch data/dummyData.json --port 3000 --static ./data
