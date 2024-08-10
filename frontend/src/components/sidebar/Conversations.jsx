import React from 'react'
import Conversation from './Conversation'
import useGetConversations from '../../hooks/useGetConversations'
import { getRandomEmoji } from '../../utils/emoji'
const Conversations = () => {
  const {loading, conversations} = useGetConversations();
  // console.log("CONVERSATIONS :",conversations)
  return (
    <div className='py-2 flex flex-col h-[calc(90vh-172px)]] overflow-y-auto '>
      {loading ? <span className='loading loading-spinner'></span> : null}
      {conversations.map((conversation,idx)=>(
         <Conversation 
         key={conversation._id}
         conversation={conversation}
         emoji={getRandomEmoji()} 
         isLastIndex={idx === conversations.length-1}
         />
      ))}
      {/* {conversations.map((conversation)=> <Conversation/> )} */}
    </div>
  )
}

export default Conversations
