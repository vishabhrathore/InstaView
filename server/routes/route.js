const router = require('express').Router();
const Post = require("../models/Post")
const User = require("../models/User")
const Message = require("../models/Message")
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

router.post('/user/comment',authentication, async (req,res)=>{
    try {
        
    
        const createComment = new Message(
           {
                message:req.body.message,
                postId:req.body.postId,
                userFROM:req.user._id,
                userTO:req.body.userTO
           }
        )   
        console.log(createComment)

        await createComment.save()

        return res.status(200).json({
            createComment
        })
          
    } catch (error) {
        res.status(400).send("this error in comment sever" + error) 
    }  
})

router.post('/find/comment',authentication, async (req,res)=>{
    try {
        
        const data = await Message.find({postId:req.body.postId})

        return res.status(200).json({
            data
        })
          
    } catch (error) {
        res.status(400).send("this error in comment sever" + error) 
    }  
})

router.put('/post/like',authentication, async (req,res)=>{
    try {
        const updatedPost = await Post.updateOne({_id:req.body.postId},{
            $push:{likes:req.user._id}
        })
        return res.status(200).json({
            updatedPost
        })
          
    } catch (error) {
        res.status(400).send("this error in post likes" + error) 
    }  
})
router.put('/post/comment',authentication, async (req,res)=>{
    try {
        const updatedPost = await Post.updateOne({_id:req.body.postId},{
            $push:{comments:req.body.commentid}
        })
        return res.status(200).json({
            updatedPost
        })
          
    } catch (error) {
        res.status(400).send("this error in post likes" + error) 
    }  
})
router.put('/post/unlike',authentication, async (req,res)=>{

    try {
        const updatedPost = await Post.updateOne({_id:req.body.postId},{
            $pull:{likes:req.user._id}
        })
        return res.status(200).json({
            updatedPost
        })
          
    } catch (error) {
        res.status(400).send("this error in post likes" + error) 
    }  
})

 
router.post("/feed/post" ,async (req,res)=>{
    console.log(req.body.id)
    try {

        const token = req.body.id
        const decoded = jwt.verify(token,"thisistestforsomething")
        console.log(decoded)
        const data = await Post.find().populate("user").sort({date:-1})  

        res.status(200).json({
            data,
            decoded
        })

    } catch (error) {
        console.log("error in post fetching -->" + error.message)
    }
})


router.post('/user/details', async (req,res)=>{
    console.log(req.body)
    try {

        const token = req.body.id
        const decoded = jwt.verify(token,"thisistestforsomething")
        const user = await User.findOne({_id:decoded.user.id})
        const data = {

            id:user._id,
            name:user.name,
            username:user.username,
            img:user.img
        }
        res.status(200).json({data})
          
    } catch (error) {
        res.status(400).send("this error in post likes" + error) 
    }  
})

router.put('/user/details', async (req,res)=>{
    console.log(req.body)
    try {

        const token = req.body.id
        const decoded = jwt.verify(token,"thisistestforsomething")
        const user = await User.findOneAndUpdate({_id:decoded.user.id},{img:req.body.imgFile})
       
        res.status(200).json({user})
          
    } catch (error) {
        res.status(400).send("this error in post likes" + error) 
    }  
})

module.exports = router