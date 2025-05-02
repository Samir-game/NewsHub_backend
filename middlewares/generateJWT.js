const jwt= require('jsonwebtoken')

const generateJWT= (user)=>{
    return jwt.sign(
        {
            _id: user._id,
            userName: user.userName,
            userEmail: user.userEmail
        },
        process.env.JWT_TOKEN_SECRET,
        {
            expiresIn: process.env.JWT_EXPIRY
        }
    )
}

module.exports={
    generateJWT
}