import { useEffect } from "react"
import { useState } from "react"

function Counter(props){
    
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
            <h2>{props.value}</h2>
            <h2>{count}</h2>
            <button onClick={inc}>Up</button>     
        </>
    )
}

export default Counter