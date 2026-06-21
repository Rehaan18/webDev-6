import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

const app = express();

app.get("/",(req,res)=>{
    console.log("Default Get API hit");
    res.json({message:"Welcome to my first backend"});
});

app.post("/login",(req,res)=>{
    console.log("Login Successful");
    res.json({message: "Login Succesfull"});
});

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log("Server started on port: ", port);
})