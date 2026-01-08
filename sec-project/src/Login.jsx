import { useState } from "react";

function Login() {

    const[pwd1, setPwd1] = useState("")
    const[pwd2, setPwd2] = useState("")
    const[same,setSame] = useState("")

    function handlePwd1Change(event){
      setPwd1(event.target.value)
      console.log(event.target.value)
    }
    function handlePwd2Change(event){
      setPwd2(event.target.value)
      console.log(event.target.value)
    }
    function handlePasswordCheck(){
      if(pwd1==pwd2){
        console.log("password matched")
        setSame(true)
      }else{
        console.log("password not matched")
        setSame(false)
      }
    }

  return (
    <>
      <form className = "my-5" style={{width:"50%",margin:"auto"}}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control"/>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" onChange={handlePwd1Change} className="form-control" value={pwd1}/>
        </div>
        <div className="mb-3">
          <label className="form-label">Re-enter Password</label>
          <input type="password" onChange={handlePwd2Change} className="form-control" value={pwd2}/>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" onChange={handlePasswordCheck}/>
          <label className="form-check-label">I Agree</label>
        </div>
       {same && <p>Passwords Match</p>}
       {!same && <p>Passwords not Match</p>}

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default Login;
