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
app.use('/api', authorization);


app
const PORT = process.env.PORT

require("./database/conn")

app.get("/",(req,res)=>{
    res.send("WELCOME")  
})

app.listen(PORT,()=>{
    console.log(`server is runnning at ${PORT}`)
})

//2rep9DD6yZDgkcca