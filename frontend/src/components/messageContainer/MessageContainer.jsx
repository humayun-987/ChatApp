import React from 'react'
import { useEffect } from 'react'
import { TiMessages } from "react-icons/ti"
import Messages from './Messages'
import MessageInput from './MessageInput'
import useConversation from '../../zustand/useConversation'

const MessageContainer = () => {

  const { selectedConversation, setSelectedConversation } = useConversation()
  
  useEffect(() => {
    // when we logout then selectedConversation should be reset to null
    // cleanup function when unmounts
    return () => setSelectedConversation(null)
  }, [setSelectedConversation])
  return (
    <div className="md:min-w-[550px] relative flex flex-col">
      {!selectedConversation ? <NoChatSelected /> : (
        <>
          <div className='text-white bg-[rgba(0,0,0,0.2)] font-medium  relative top-0 right-0 px-4 py-2 mb-2'>
            <span className="p-2 text-lg">To : <span className="text-md">{selectedConversation.fullName}</span></span>
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
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font semibold flex flex-col items-center gap-2'>
        <p>welcome 👋 Humayun Ahmad</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className='text-3xl md:text-6xl text-center' />
      </div>
    </div>
  )
}