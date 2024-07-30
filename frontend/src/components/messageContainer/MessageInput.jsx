import React from 'react'
import {BsSend} from "react-icons/bs"
const MessageInput = () => {
  return (
    <form>
      <div className='w-full relative flex gap-1 items-center mx-2'>
        <input type="text" placeholder='Send a message' className='border text-sm rounded-lg block w-full p-2 bg-gray-800 border-gray-950 text-white' />
        <button type='submit' className='flex items-center absolute p-2 right-2 pe-3'>
          <BsSend/>
        </button>
      </div>
    </form>
  )
}

export default MessageInput
