import React, { useRef, useEffect } from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'
import useConversation from '../../zustand/useConversation'
import MessageSkeleton from '../skeleton/MesageSkeleton'

const Messages = () => {
  
  const { messages, loading } = useGetMessages()
  const lastMessageRef = useRef()
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({behaviour: "smooth"})
    }, 100);
  }, [messages])
  
  return (
    <div className='px-4 flex-1 overflow-auto'>
      {loading && <div className='flex flex-col gap-2 mt-10'><MessageSkeleton/><MessageSkeleton/><MessageSkeleton/></div>}
      
      {!loading && messages.length === 0 && (
        <p className='text-center'>Send a message to start the conversation</p>
      )}
      {/* as messages are mapped for the latest div which is created its ref is set to be the lastMessageRef and we scrolling into view that lastMessageRef.current */}
      {!loading && messages.length > 0 && messages.map((message,idx) => <div ref={lastMessageRef} key={message._id}><Message message={message} /></div>)}
    </div>
  )
}

export default Messages
