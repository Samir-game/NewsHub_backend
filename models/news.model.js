const mongoose= require('mongoose')

const commentSchema= new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    comment:{
        type: String,
        required: true,
        trim: true,
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

const newsSchema= new mongoose.Schema({
    newsTitle:{
        type: String,
        required: true,
        trim: true,
    },

    newsDescription:{
        type: String,
        required: true,
        trim: true,

    },

    newsContent:{
        type: String,
        required: true,
        trim: true,

    },

    newsUrl:{
        type: String,
        required: true,
    },

    newsImage:{
        type: String,
    },

    newsPublishedAt:{
        type: String,
        required: true,

    },

    newsSource:{
        type: String,
        required: true
    },

    newsComments:[commentSchema]

},{timestamps:true})

const News= mongoose.model("News",newsSchema)
module.exports= News