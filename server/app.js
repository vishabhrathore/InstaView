const dotenv = require("dotenv")
const mongoose = require('mongoose');
const express = require("express")
const app = express()   
const authorization = require("../server/routes/route")    
const cors = require('cors')
   
app.use(cors())
  

dotenv.config({path:'./config.env'}) 
// app.use(express.cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: false }))


const PORT = process.env.PORT || 5000

require("./database/conn")

app.get("/",(req,res)=>{
    res.send("WELCOME")  
})

app.use('/api', authorization);

if(process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"));
    const path = require("path");
    app.get("*", (req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    })
}

app.listen(PORT,()=>{
    console.log(`server is runnning at ${PORT}`)
})

//2rep9DD6yZDgkcca