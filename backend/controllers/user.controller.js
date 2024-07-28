import User from "../models/User.js";
export const getUsersForSidebar = async (req,res) => {
    try{

        const loggedInUserId = req.user._id;
        const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password"); // all users whose _id is not equal to loggedInUserId
        res.status(201).json(filteredUsers);

    }
    catch(error){
        res.status(500).json({error:"Internal server error"})
    }
}