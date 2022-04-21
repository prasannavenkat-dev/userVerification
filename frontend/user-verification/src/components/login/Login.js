import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
function Login({mail,handleMail,password,handlePassword,handleSubmit}) {

  const data = {mail,password}
  return (
    <>
      {/* email */}
      <div className="form-group">
        <label htmlFor="exampleFormControlInput1">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          value={mail}
          onChange={handleMail}
          placeholder="name@example.com"
        />
      </div>
      {/* Password */}
      <div className="form-group">
        <label htmlFor="inputPassword4">Password</label>
        <input type="password" className="form-control" id="inputPassword"  placeholder="Password" value={password} onChange={handlePassword} />
      </div>

      <button className="btn btn-success btn-md btn-block submitBtn" disabled={!(mail && password)} onClick={e => handleSubmit(e,data,"login")}>
          Login
        </button>

       
        <div className="mb-2 mt-1">
          New to App ? <Link to="/signup">SignUp</Link>
        </div>
        <hr/>
        <div className="my-2">
          <Link className="otpPage" to="/verification">Verify My Account</Link>
        </div>

    </>
  );
}

export default Login;
