const mongoose = require("mongoose");
const friendSchema = new mongoose.Schema({
    
    followedTo:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'USER',
        required:true
    },
    followedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'USER',
        required:true
    },
    
})
const Friends = mongoose.model("USER",friendSchema)
module.exports = Friends   