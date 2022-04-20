const express = require('express');
const app = express();

require("dotenv").config();

const bodyParser = require("body-parser");
app.use(express.json());
bodyParser.urlencoded({extended:true});

const bcrypt = require("bcrypt");
const saltRounds = 10;
const mongoose = require("mongoose");
mongoose.connect(process.env.DB_URL);

const PORT = process.env.port || 3000;



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

//Register User
app.post('/register',function(req,res){
    const {fullName,age,gender,mail,password} = req.body;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);

    const userData = new User({fullName,age,gender,mail,password:hash});

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
});

//Login User

app.post("/login",function(req,res){

    const {mail,password} = req.body;

     User.findOne({mail},function(err,user){
        if(err){
            console.log(err);
        }
        else{
            //Checks user if Existed
            if(user){
                //Checks Password
                if(bcrypt.compareSync(password, user.password) ){
                    res.send("Login Successfully!!");
                }
                else{
                    res.send("Invalid Login!!")
                }
                
            }
            else{
                res.send("User Not existed!!")
            }

        }
    })

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