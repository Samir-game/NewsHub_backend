const {connectionDB}= require('./database/db.js')
const app= require('./app.js')
const dotenv= require('dotenv')

dotenv.config({
    path:"./.env"
})
const PORT= process.env.PORT || 8001

connectionDB()
.then(()=>{
    app.listen(PORT,()=>{
        console.log("Server started at PORT: ",PORT)
    })
})
.catch((error)=>{
    console.log("connection to Database Failed.",error)
})