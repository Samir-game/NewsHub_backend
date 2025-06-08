const mongoose= require('mongoose')

const connectionDB= async()=>{
    try {
        const result= await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log("connection of MongoDB successfull || host:",result.connection.host)

    } catch (error) {
        console.log("Error connecting to MongoDB",error)
        process.exit(1)
    }
}

module.exports={
    connectionDB
}