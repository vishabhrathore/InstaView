const Post = require("../models/Post")
const User = require("../models/User")
const jwt = require("jsonwebtoken")


const Authorization = async (req,res,next)=>{
    try {
       const {authenticate = ""} = req.headers
       if(!authenticate){
           return res.status(401).send('token is not recieved')
       }

       const decoded = jwt.verify(authenticate,"thisistestforsomething")

       console.log(decoded.user.id)
       const data = await User.findOne({_id:decoded.user.id})
       if(!data){
         return res.status(401).send("User not Found")
       }
       req.user = data
       next()

   } catch (error) {
       console.log("error in fetching user -->" + error.message)
       res.status(401).json({
           status:"Token Expired"
       })
   }
}
module.exports = Authorization

