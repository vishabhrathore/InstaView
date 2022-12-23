const mongoose = require('mongoose');
const DB = process.env.DATABASE
mongoose.connect(DB,{
    useCreateIndex: true,
    useFindAndModify: false, 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}).then((res)=>{
    console.log("Connected Successfully")
}).catch(()=>{
    console.log("No connection")
})