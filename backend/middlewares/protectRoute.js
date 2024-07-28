import jwt from "jsonwebtoken"
import User from "../models/User.js";
const protectRoute = async (req,res,next) => {
    try{
        const token = req.cookies.jwt;
        // check if req has a cookie with a jwt token
        if(!token){
            return res.status(400).json({error: "Unauthorised - No token provided"})
        }
        // we are trying to verify/decode this token that's why we require the JWT secret
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        // verifying the token with secret 
        if(!decoded){
            return res.status(401).json({error: "Unauthorised - No token provided"})
        }
        // token contains pyload/data in this case it is "userId"
        const user = await User.findById(decoded.userId).select("-password");
        // It fetches the user from the database using the userId extracted from the decoded token, excluding the password field.
        if(!user){
            return res.status(404).json({error: "User not found"})
        }
        // attaches user to the req
        req.user = user;
        next()
    }
    catch(error){
        console.log("Error in protectRoute middleware :",error.message)
        res.status(500).json({error:"Internal server error"})
    }
}
export default protectRoute;