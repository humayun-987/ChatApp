import mongoose from "mongoose";
const MessageSchema = new mongoose.Schema({
    senderId: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "User", required: true
    },
    recieverId: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    message: {
        type:String,
        required:true
    }
    // createdAt updatedAt
    // mongoose will try to automatically add these two if timestamp is true
}, {timestamps: true});

const Message = mongoose.model("Message",MessageSchema);
export default Message;