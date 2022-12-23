const router = require('express').Router();



const {register} = require("../controllers/login_register")


router.post("/register",register)

module.exports = router