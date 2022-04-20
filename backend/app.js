const express = require('express');
const app = express();

require("dotenv").config();

const bodyParser = require("body-parser");
app.use(express.json());
bodyParser.urlencoded({extended:true});


const mongoose = require("mongoose");
mongoose.connect(process.env.DB_URL);

const PORT = process.env.port || 3000;


app.get("/",function(req,res){
    console.log("g");
    res.send("IT WORKS!")
})
//Register User
app.post('/register',function(req,res){
  console.log("hh");
console.log(req.body)

    const {fullName,age,gender,mail,password} = req.body;
    const userSchema = new mongoose.Schema({
        fullName:{
            type:String,
            minlength:2,
            maxlength:20,
            required:true
        },
        age:{
            type:Number,
            required:true
        },
        gender:{
            type:String,
            required:true
        },
        mail:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        }
    })

    const User = mongoose.model("User",userSchema);

    const userData = new User({fullName,age,gender,mail,password});

    userData.save(function(err){
        if(err){
            console.log(err)
            res.send("Registration Failed!")
        }
        else{
            console.log("Registered Successfully!!");
            res.send("Registerd Successfully!");
        }
    });

    
})





//App Listener
app.listen(PORT,function(err){
    if(err){
        console.log(err)
    }
    else{
        console.log(`Server Started at ${PORT}`)
    }
})