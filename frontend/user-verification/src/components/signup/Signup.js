import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
function Signup({handleSubmit,fullName,age,gender,mail,password,handleFullName,handleAge,handleGender,handleMail,handlePassword,setMessage}) {
 

const data ={fullName,age,gender,mail,password}
  


  return (
    <>

    
      {/* Full Name */}
      <div className="form-group">
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          className="form-control"
          id="fullName"
          placeholder="Full Name"
          value={fullName}
          onChange={handleFullName}

        />
      </div>

      {/* Age*/}
      <div className="form-group">
        <label htmlFor="age">Age</label>
        <input
          type="text"
          className="form-control"
          id="age"
          placeholder="Age"
          value={age}
          onChange={handleAge}
        />
      </div>

      {/* Gender*/}
      <div className="form-group">
        <label htmlFor="gender">Gender</label>
        <input
          type="text"
          className="form-control"
          id="gender"
          placeholder="Gender"
          value={gender}
          onChange={handleGender}

        />
      </div>

      {/* email */}
      <div className="form-group">
        <label htmlFor="exampleFormControlInput1">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          value={mail} 
          onChange={handleMail}

        />
      </div>
      {/* Password */}
      <div className="form-group">
        <label htmlFor="inputPassword4">Password</label>
        <input type="password" className="form-control" id="inputPassword" value={password}  placeholder="Password"  onChange={ handlePassword}/>
      </div>


      <button className="btn btn-success btn-md btn-block submitBtn" onClick={e=> handleSubmit(e,data,"register")} disabled={!(fullName&&age&&gender&&mail&&password)}>
          Submit
        </button>

       
        <div className='mb-2 mt-2'>
          Already Have account ? <Link to="/login">Login</Link>
        </div>

<hr/>
        <div className='mt-2'>
          <Link className="otpPage" to="/verification">Verify My Account</Link>
        </div>
    </>
  )
}

export default Signup