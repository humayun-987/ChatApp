import React from 'react'
import {getTimeFromDateString} from '../../utils/extractTime.js'
import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation'

const Message = ({message}) => { 
    const {authUser} = useAuthContext()
    const {selectedConversation} = useConversation()
    const fromMe = message.senderId === authUser._id
    const chatClassName = fromMe ? 'chat-end' : 'chat-start';
    const profilePicture = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
    const bgColor = fromMe ? 'bg-sky-500' : "";

    return (
        <>
            <div className={`chat ${chatClassName}`}>
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS chat bubble component"
                            src={profilePicture}/>
                    </div>
                </div>
                <div className={`chat-bubble text-white ${bgColor}`}>{message.message}</div>
                <div className="chat-footer"><time className="text-xs">{getTimeFromDateString(message.createdAt)}</time></div>
            </div>
        </>
    )
}

export default Message
// chat bubbles are imported from daisyUI
{/* <div className="chat chat-start">
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img
                    alt="Tailwind CSS chat bubble component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
        </div>
        <div className="chat-header">
            Obi-Wan Kenobi
            <time className="text-xs opacity-50">12:45</time>
        </div>
        <div className="chat-bubble">You were the Chosen One!</div>
        <div className="chat-footer opacity-50">Delivered</div>
    </div> */}