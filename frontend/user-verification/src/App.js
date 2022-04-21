import "./App.css";
import Login from "./components/login/Login";
import OtpVerify from "./components/otp-verify/OtpVerify";
import Signup from "./components/signup/Signup";
import Toasts from "./components/toasts/Toasts";
import Account from "./components/account/Account";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate
} from "react-router-dom";
import { useState } from "react";

function App() {
   
  const [fullName,setFullName] = useState("");
  const [age,setAge] = useState("");
  const [gender,setGender] = useState("");
  const [mail,setMail] = useState("");
  const [password,setPassword] = useState("");
  const [message,setMessage]=useState("")


    function handleFullName(e){
      setFullName(e.target.value)
    }function handleAge(e){
      setAge(e.target.value)
    }function handleGender(e){
      setGender(e.target.value)
    }
      function handleMail(e){
          setMail(e.target.value)
    }
    function handlePassword(e){
      setPassword(e.target.value)
    }


  const handleSubmit = (e,data,endpoint) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    };
console.log(data);
    async function postData(){
      try {
        const response = await fetch(`http://localhost:4000/${endpoint}`, requestOptions);
        const result =  await response.json()
        setMessage(result)
        console.log(result);
      } catch (error) {
        console.log(error);
      }

    }
    postData()

    
    
  };



  return (
    <div className="App">
      <div className="form">
        <Router>
        <Routes>

            <Route path="/login"  element={<Login handleSubmit={handleSubmit} mail={mail} handleMail={handleMail} password={password} handlePassword={handlePassword} />}/>
            <Route path="/signup"  element={<Signup handleSubmit={handleSubmit} fullName={fullName} handleFullName={handleFullName} age={age} handleAge={handleAge} gender={gender} handleGender={handleGender} mail={mail} handleMail={handleMail} password={password} handlePassword={handlePassword}/>}/>
            <Route path="/verification"  element={<OtpVerify handleSubmit={handleSubmit} mail={mail} handleMail={handleMail}/>} />
            <Route path="/account" element={<Account message={message}/>}/>
             

            </Routes>

        </Router>
         
       
      </div>
     { message&&<Toasts  message={message} setMessage={setMessage}/>} 
    </div>
  );
}

export default App;
