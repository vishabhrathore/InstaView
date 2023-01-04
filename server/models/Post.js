const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
    caption:{type: String,
    required:true},
    location:{
        type:String,
        required:true
    },
    img:{
        type: String,
        required: true, 
    },
    date:{
        type: Number,
        required: true,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'USER',
        required:true
    }
})
const Post = mongoose.model("POST",postSchema)
module.exports = Post   