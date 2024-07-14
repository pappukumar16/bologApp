const express = require("express");
require("dotenv").config();
const port = process.env.PORT || 5000;  
const app = express();
const router = require("./routes/blog");
app.use(express.json())


app.use("/api/v1",router)
 require("./config/database").dbconnect()

app.listen(port, ()=>{
    console.log("Aplication start port no ",port);
})

app.get("/", (req,res)=>{
    res.send(
        `<h1>Helo kaya hail hai </h1>`
    )
})

