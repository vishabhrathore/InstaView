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
        const data = await Post.find({user:decoded.user.id})
        res.status(200).json({
            data
        })

    } catch (error) {
        
    }

})
 



module.exports = router