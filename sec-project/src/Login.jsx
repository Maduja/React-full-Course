import { useState } from "react";

function Login() {

    const[pwd1, setPwd1] = useState("")
    const[pwd2, setPwd2] = useState("")

    function handlePwd1Change(event){
      setPwd1(event.target.value)
      console.log(event.target.value)
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
          <input type="password" className="form-control" value={pwd2}/>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input"/>
          <label className="form-check-label">I Agree</label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default Login;
