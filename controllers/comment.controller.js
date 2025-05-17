const News= require('../models/news.model.js')
const User= require('../models/user.model.js')

const addComment=async(req,res)=>{

    const newsId= req.params.newsId;
    const userId= req.user._id;

    const {comment}= req.body;
    if(!comment || comment.trim()===""){
        return res.status(400).json({
            msg:"write the comment"
        })
    }

    try {

        const news= await News.findById(newsId);
        if(!news){
            return res.status(404).json({
                msg:"news not found"
            })
        }

        const user= await User.findById(userId);
        if(!user){
            return res.status(404).json({
                msg:"invalid access,login first!"
            })
        }

        const userComment={
            user: userId,
            comment:comment,
            createdAt: Date.now()
        }

        news.newsComments.push(userComment);
        await news.save();

        return res.status(200).json({
            msg:"comment added",
            user:userId,
            newsId:newsId,
            userName:user.userName,
            userEmail:user.userEmail,
        })

    } catch (error) {
        console.log("error writing the comment",error)
        return res.status(500).json({
            msg:"internal server error"
        })
    }

}

const deleteComment= async(req,res)=>{

    const commentId=req.params.commentId;
    const userId=req.user._id;
    
    try {
        
        const news= await News.findOne({"newsComments._id":commentId})
        if (!news) {
            return res.status(404).json({ 
                msg: "Comment not found in any news post" 
            });
        }
        
        const comment=news.newsComments.id(commentId);
        if (!comment) {
            return res.status(404).json({
                msg: "Comment not found",
            });
        }

        if(!comment.user.equals(userId)){
            return res.status(403).json({
                msg:"you are not authorised to delete this comment"
            })
        }

        const findIndex = news.newsComments.findIndex((c)=>c._id.equals(comment._id));
        news.newsComments.splice(findIndex,1)
        await news.save();

        return res.status(200).json({
            msg:"comment deleted"
        })
    
    } catch (error) {
        console.log("error deleting the comment",error)
        return res.status(500).json({
            msg:"internal server error"
        }) 
    }
}

const getNewsandComments= async(req,res)=>{

    const newsId=req.params.newsId;

    try {

        const news= await News.findById(newsId)
        .populate("newsComments.user","userName userEmail")
        .lean()

        if(!news){
            return resizeBy.status(404).json({
                msg:"news not found"
            })
        }

        return res.status(200).json({
            news
        })

    } catch (error) {
        console.log("error getting detail about this news",error)
        return res.status(500).json({
            msg:"internal server error"
        })
    }
}

module.exports={
    addComment,
    deleteComment,
    getNewsandComments
}