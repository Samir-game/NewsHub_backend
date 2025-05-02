const express= require('express');
const app= express();
const cors= require('cors')
const userRouter= require('./router/user.router.js')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api/user",userRouter)

module.exports= app