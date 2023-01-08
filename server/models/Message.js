const mongoose = require("mongoose");
const messageSchema = new mongoose.Schema({
   
    message:{
        type:String,
        required:true
    },
    postId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'POST',
        required:true
    },
    userFROM:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'USER',
        required:true
    },
    userTO:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'USER',
        required:true
    },
})
const Message = mongoose.model("MESSAGE",messageSchema)
module.exports = Message   