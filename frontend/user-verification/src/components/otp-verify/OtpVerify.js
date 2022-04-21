import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
function OtpVerify({handleSubmit,mail,handleMail}) {
  const [otp,setOtp]=useState(0);
  const data={mail,otp};
  function handleOtp(e){
    setOtp(e.target.value);
  }
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
      <label htmlFor="otp">OTP</label>
      <input type="text" className="form-control" id="otp" value={otp}  placeholder="OTP" onChange={handleOtp}/>
    </div>
    <button className="btn btn-success btn-md btn-block submitBtn"  disabled={!(mail&&otp)} onClick={e => handleSubmit(e,data,"verification")}>
          Verify
        </button>
<hr/>
       
        <div className='my-3'>
          Already Verified ? <Link to="/login">Login</Link>
        <span className='verticalLine mx-2'></span>
          New to App ? <Link to="/signup">SignUp</Link>
        </div>
  </>
  )
}

export default OtpVerify