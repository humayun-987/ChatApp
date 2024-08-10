import Conversation from "../models/Conversation.js";
import Message from "../models/Message.js"
export const sendMessage = async (req,res) => {
    try{
        // destructured {message} extracts message property from req.body
        const {message} = req.body;
        const {id:recieverId} = req.params;
        // in protectRoute middleware we have added user in req as req.user = user if authentication is successfull
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId,recieverId]} // $ all: [senderId,recieverId] checks whether both element for the participants array are present
        });
        if(!conversation){
            conversation = await Conversation.create({
                participants: [senderId,recieverId],
            })
        }

        const newMessage = new Message({
            senderId: senderId,
            recieverId: recieverId,
            message:message,
        })
        // await newMessage.save()
        if(newMessage){
            // to enter a model and access an element of the model we use : model.element
            conversation.messages.push(newMessage._id);
            // await conversation.save();
        }
        // this will save both of them at the same time
        await Promise.all([conversation.save(),newMessage.save()])

        // SOCKET IO WILL GO HERE

        return res.status(201).json(newMessage)
    } catch(error){
        console.log("Error in sendMessage controller :",error.message)
        res.status(500).json({error:"Internal server error"})
    }
};

export const getMessages = async (req,res) => {
    try{
        const {id:userToChat} = req.params;
        const senderId = req.user._id;
        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChat] }
        }).populate("messages"); // populate is provided by mongoose; 
        // by using it we can refer to Message model and get the content of actual "message" by using their _id
        if(!conversation){
            return res.status(200).json([])
        }
        const messages = conversation.messages;
        res.status(201).json(messages) // conversation.message is an array of message
    }
    catch (error){
        console.log("Error in getMessage controller :",error.message);
        res.status(500).json({error: "Internal server error"})
    }
}