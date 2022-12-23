const mongoose = require('mongoose');
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
    // Your code goes here
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

userSchema.pre('save', async function(next) {

    if(this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12); 
    }
    next()
})

const User = mongoose.model('USER', userSchema);

module.exports = User;