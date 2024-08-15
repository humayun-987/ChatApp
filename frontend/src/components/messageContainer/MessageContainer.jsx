import React from 'react'
import { useEffect } from 'react'
import { TiMessages } from "react-icons/ti"
import Messages from './Messages'
import MessageInput from './MessageInput'
import useConversation from '../../zustand/useConversation'
import { useAuthContext } from '../../context/AuthContext'
import { FaArrowLeft } from 'react-icons/fa';
const MessageContainer = () => {

  const { selectedConversation, setSelectedConversation, openMessage, setOpenMessage } = useConversation()
  
  useEffect(() => {
    // when we logout then selectedConversation should be reset to null
    // cleanup function when unmounts
    return () => setSelectedConversation(null)
  }, [setSelectedConversation])
  return (
    <div className={`${!openMessage ? 'hidden' : 'flex flex-col'} md:flex md:flex-col w-[350px] md:w-[400px] lg:w-[550px] relative`}>
      {!selectedConversation ? <NoChatSelected /> : (
        <>
          <div className='text-white bg-[rgba(0,0,0,0.2)] font-medium flex justify-between items-center relative top-0 right-0 px-4 py-2 mb-2'>
            <span className="p-2 text-lg">To : <span className="text-md">{selectedConversation.fullName}</span></span>
            <button onClick={() => setOpenMessage(false)}><FaArrowLeft/></button>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  )
}

export default MessageContainer

const NoChatSelected = () => {
  const {authUser} = useAuthContext()
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font semibold flex flex-col items-center gap-2'>
        <p>Welcome 👋 {authUser.fullName}</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className='text-3xl md:text-6xl text-center' />
      </div>
    </div>
  )
}