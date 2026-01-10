import { useEffect } from "react";
import { useState } from "react";

function Login() {

    const [message,setMsg] = useState("")


    useEffect(()=>{
        setMsg("this msg will disapper after 5sec")

        const timer = setTimeout(()=>{
            setMsg("")
        },5000)
        //cleanup function
        return()=>{
            clearTimeout(timer)
        }
    },[])

  return (
    <>
      <div>
        <h2>LogIn</h2>
        {message && <p>{message}</p>}
        <input type="email" placeholder="email" />
        <br />
        <input type="password" placeholder="password" />
        <br />
        <button>submit</button>
      </div>
    </>
  );
}

export default Login;
