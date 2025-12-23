import Course from './Course';
import image1 from './assets/html.png';
import image2 from './assets/css.jpg';
import image3 from './assets/js.png';

function CourseList() {
  const courses = [
    { 
      id:1,
      name: "HTML Full Course", 
      price: 49, 
      image: image1

    },
    { id:2,
      name: "CSS Full Course", 
      price: 59, 
      image: image2 
    },
    { id:3,
      name: "JS Full Course", 
      price: 79, 
      image: image3 
    },
    
  ];

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
    />);

  return(
    <>
    {coursesList}
    </>
  );
  
}

export default CourseList;


//map(course,index)
//key = {index}