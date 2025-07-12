const express = require("express");
const app = express();

app.listen(3000, ()=>{
    console.log("SERVER IS RUNNING ON PORT 3000")
})

app.get("/",(req,res)=>{
    res.send("Server Started")
} )