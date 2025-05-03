const express= require('express')
const { handleSignUp, handleLogin } = require('../controllers/user.controller')
const router= express.Router()

router
.route("/signup")
.post(handleSignUp)

router
.route("/login")
.post(handleLogin)





module.exports= router