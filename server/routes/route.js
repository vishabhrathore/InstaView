const router = require('express').Router();
const Post = require("../models/Post")
const User = require("../models/User")
const jwt = require("jsonwebtoken")


const {register, login} = require("../controllers/login_register")

const authentication = require("../authorization/authorize")


router.post("/register",register)
router.post("/login",login)



router.post('/newpost',authentication, async (req,res)=>{
    try {
        const {caption ,location, img} = req.body

        if(!caption || !location || !img){
           return res.status(420).send("please fill all fields")
        }
    
       
        const createPost = new Post({
            caption,
            location,
            img,
            date:Date.now(),
            user:req.user._id
        })   

        await createPost.save()

        return res.status(200).json({
            createPost
        })
          
    } catch (error) {
        res.status(400).send("this error in post sever" + error) 
    }  
})

 
router.post("/feed/post" ,async (req,res)=>{
    console.log(req.body.id)
    try {

        const token = req.body.id
        const decoded = jwt.verify(token,"thisistestforsomething")
        console.log(decoded)
        const data = await Post.find({user:decoded.user.id}).sort({date:-1})  

        res.status(200).json({
            data
        })

    } catch (error) {
        console.log("error in post fetching -->" + error.message)
    }
})


module.exports = router