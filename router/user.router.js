const express= require('express')
const { handleSignUp, handleLogin } = require('../controllers/user.controller')
const {addComment,deleteComment,getNewsandComments}= require('../controllers/comment.controller.js')
const { fetchNewsFromDB } = require('../controllers/news.controller.js')
const { auth } = require('../middlewares/auth.js')

const router= express.Router()

router
.route("/signup")
.post(handleSignUp)

router
.route("/login")
.post(handleLogin)

router
.route("/home")
.get(fetchNewsFromDB)

router
.route("/addComment/:newsId")
.post(auth,addComment)

router
.route("/deleteComment/:commentId")
.delete(auth,deleteComment)

router
.route("/home/:newsId")
.get(getNewsandComments)




module.exports= router