const mongoose = require("mongoose");
require("dotenv").config()
exports.dbconnect = ()=>{
const baseUrl = process.env.BASE_URI;

mongoose.connect(baseUrl,{})
.then( ()=>{console.log("DBCONNECTION SUCCESSFUL ")})
.catch( (error)=>{
    console.log("dbconnection fail")
    console.error(error)
    process.exit(1)
})

}

