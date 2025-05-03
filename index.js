const {connectionDB}= require('./database/db.js')
const app= require('./app.js')
const dotenv= require('dotenv')
const { getNews } = require('./controllers/news.controller.js')
const cron= require('node-cron')

dotenv.config({
    path:"./.env"
})

const PORT= process.env.PORT || 8001

const getNewsTask= async ()=>{
    try {
        console.log("fetching news from gnews.io")
        await getNews()
    } catch (error) {
        console.log("error getting news",error)
    }
}

connectionDB()
.then(()=>{
    app.listen(PORT,()=>{
        console.log("Server started at PORT: ",PORT)
    })

    cron.schedule("*/10 * * * *",getNewsTask)
    console.log("Cron job scheduled: News will be fetched every 10 minutes.");
})
.catch((error)=>{
    console.log("connection to Database Failed.",error)
})