const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const User = require("../models/User")
      

exports.register = async (req, res) => {
  const { name, username, email, password } = req.body;
  console.log(req.body)

  try {
    if (!email || !password || !name || !username) {
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
        message: "Email already exists.",
      });
    }

    let userExist = await User.findOne({ username });
    if (userExist) {
      return res.status(409).json({
        status: "fail",
        message: "Username already exists.",
      });
    }
              
    const user = new User({   
      name,
      username,
      email,
      password,
      img:"Remy Sharp"
    })

    await user.save()  

    return res.status(201).json({
      message: "User Created Successfully"
    })

  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  console.log(req.body)
  try {
    if (!username || !password) {
      return res.status(400).json({
        status: "fail",
        message: "Please provide an email and a password.",
      });
    }

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(400).json({
        status: "fail",
        message: "User does not exists",
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        status: "fail",
        message: "Invalid Credentials",
      }); 
    }

    const payload = {
      user: {
        id: user._id,
        name: user.name,  
        username: user.username
      },
    };
    const token = jwt.sign(payload, "thisistestforsomething", {
      expiresIn: '100m',
    });

    res.status(200).json({
      status: "Successfully Login",
      data: { token, user },
    });
    

  } catch (err) {    
    res.status(409).json({
      status: "fail",
      message: err.message,
    });
  }
};
