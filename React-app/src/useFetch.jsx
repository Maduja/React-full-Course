import { useEffect, useState } from 'react';

const useFetch = (url)=>{

  const [courses,setCourses] = useState(null);

  const [dummy,setDummy] = useState(true)

  const [error,setError] = useState(null)

    useEffect(()=>{
    // console.log("use effect called")
    // console.log(dummy)
    setTimeout(()=>{
      fetch(url)
      .then(response=>{
        if(!response.ok){
          throw Error("couldn't reterive data")
        }
        console.log(response)
        return response.json()
      }).then(data=>setCourses(data))
      .catch((error)=>{
        console.log(error.message)
        setError(error.message)
      })
  })
  },[])
  return [courses,dummy,error]
}

export default useFetch;