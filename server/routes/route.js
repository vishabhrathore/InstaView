const router = require('express').Router();
const Post = require("../models/Post")
const User = require("../models/User")
const jwt = require("jsonwebtoken")


const {register, login} = require("../controllers/login_register")


router.post("/register",register)
router.post("/login",login)



router.post('/newpost', async (req,res)=>{
    try {
        const {caption ,location, img, user} = req.body
        console.log(req.body) 
        if(!caption || !location || !img || !user){
           return res.status(420).send("please fill all fields")
        }
        // const createPost = new Post({
        //     caption, 
        //     descripition:desc,
        //     image:url,
        //     user:userId
        // })   
       
        const createPost = new Post({
            caption,
            location,
            img,
            date:Date.now(),
            user
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
        console.log(data)

        res.status(200).json({
            data
        })

    } catch (error) {
        console.log("error in post fetching -->" + error.message)
    }
})


router.post("/user/id" ,async (req,res)=>{
     console.log("hello iam here")
    try {

        const token = req.body.id
        const decoded = jwt.verify(token,"thisistestforsomething")
        console.log(decoded.user.id)
        res.status(200).json({
            userId:decoded.user.id
        })

    } catch (error) {
        console.log("error in post fetching -->" + error.message)
        res.status(439).json({
            status:"Token Expired"
        })
    }
})
 



module.exports = router