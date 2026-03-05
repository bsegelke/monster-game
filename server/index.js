const express = require("express");
const cors = require("cors")
const app = express();
const router = express.Router()
const authRoutes = require("./routes/auth");

app.listen(3000, ()=>{
    console.log("SERVER IS RUNNING ON PORT 3000")
})

app.get("/",(req,res)=>{
    res.send("Server Started")
} )

// Middleware

app.use(express.json()); // Parse JSON request bodies
app.use(cors())
app.use("/api/auth", authRoutes);


module.exports = router