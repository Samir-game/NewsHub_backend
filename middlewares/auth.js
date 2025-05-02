const jwt= require('jsonwebtoken')
const User=  require('../models/user.model.js')

const auth= async(req,res,next)=>{
    try {

        const authHeader= req.headers?.authorization;
        if (!authHeader?.startsWith('Bearer ')) {
            return res.status(401).json({ 
                msg: "No token found. Please login first"
            });
        }
        
        const token= authHeader.split(" ")[1];
        const decodeToken= jwt.verify(token, process.env.JWT_TOKEN_SECRET)

        if(!decodeToken){
            return res.status(401).json({
                msg:"invalid token"
            })
        }

        const user= await User.findById(decodeToken._id)
        if(!user){
            return res.status(404).json({
                msg:"user not found, invalid token"
            })
        }

        req.user=user;
        next();
        
    } catch (error) {
        console.log("error verifying jwt",error)
        return res.status(500).json({
            msg:"internal server error during authentication"
        })
    } 
}

module.exports={
    auth
}