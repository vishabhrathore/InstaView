
const User = require("../models/User") 


exports.register = async (req, res) => {
    const { name, username, email, password } = req.body;
    console.log(req.body)
   
    try {
      if (! email || !password || !name || !username) {
        return res.status(422).json({
          status: "fail",
          message: "Please provide all fields",
        });
      }
  
      if (password.length < 8) {
        return res.status(422).json({
          status: "fail",
          message: "Password should be more than 8 characters long",
        });
      }
  
      let userEmail = await User.findOne({ email });
      if (userEmail) {
        return res.status(409).json({
          status: "fail",
          message_email: "Email already exists.",
        });
      }

      let userExist = await User.findOne({ username });
      if (userExist) {
        return res.status(422).json({
          status: "fail",
          message_user: "Username already exists.",
        });
      }

      const user = new User({
           name,
           username,
           email,
           password
      })

      await user.save()

      res.status(201).json({
        message:"User Created Successfully"
      })
       
    } catch (err) {
      res.status(400).json({
        status: "fail",
        message: err.message,
      });
    }
};
