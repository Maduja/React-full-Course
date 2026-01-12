import { useEffect } from "react"
import { useState,useContext,useRef } from "react"

import { dataContext } from "./Home"

function Counter(){
    
    const data = useContext(dataContext)

   

    const[count,setCount] = useState(0)
     let refCount = useRef(3)

    function inc(){
        setCount(preCount=> preCount +1)
        //setCount(preCount=> preCount +1)
        //console.log(count)

        refCount.current ++
    }
    
    useEffect(()=>{
        // console.log(count)
        console.log(refCount)
    },[count])
    return(
        <>
            <h2>{data}</h2>
            <h2>{count}</h2>
            <button onClick={inc}>Up</button>     
        </>
    )
}

export default Counter