// set up JWT and setup cookies
import jwt from 'jsonwebtoken'
// JWTs are a secure way to transmit information between parties as a JSON object.
const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn: '15d'
    });
    res.cookie("jwt",token,{
        maxAge: 15*24*60*60*1000, // in ms
        httpOnly: true, // prevent XSS attacks cross-site scripting attacks
        sameSite : "strict",
        secure: process.env.NODE_ENV !== "development",
    })
};

export default generateTokenAndSetCookie