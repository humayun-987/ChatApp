import React, { useState } from 'react'
import {BsSend} from "react-icons/bs"
import useSendMessages from '../../hooks/useSendMessages'
const MessageInput = () => {
  
  const [message, setMessage] = useState('')

  const {loading,sendMessage} = useSendMessages()
  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!message) return;
    await sendMessage(message);
    setMessage('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='w-[95%] mx-auto mb-2 relative flex gap-1 items-center'>
        <input type="text" onChange={(e)=>setMessage(e.target.value)} value={message} placeholder='Send a message' className='border text-sm rounded-lg block w-full p-2 bg-gray-800 border-gray-950 text-white' />
        <button type='submit' className='flex items-center absolute p-2 right-2 pe-3'>
          {loading ? (
            <div className='loading loading-spinner'></div>
          ) : (
            <BsSend/>
          )}
        </button>
      </div>
    </form>
  )
}

export default MessageInput
