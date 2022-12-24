const router = require('express').Router();



const {register, login} = require("../controllers/login_register")


router.post("/register",register)
router.post("/login",login)

module.exports = router