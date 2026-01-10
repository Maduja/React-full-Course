import { useEffect } from "react"
import { useState } from "react"

function Counter(){
    
    const[count,setCount] = useState(0)

    function inc(){
        setCount(preCount=> preCount +1)
        setCount(preCount=> preCount +1)
        //console.log(count)
    }
    
    useEffect(()=>{
        console.log(count)
    },[count])
    return(
        <>
            <h2>{count}</h2>
            <button onClick={inc}>Up</button>     
        </>
    )
}

export default Counter