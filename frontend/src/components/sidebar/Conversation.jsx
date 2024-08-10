import React from 'react'
import useConversation from '../../zustand/useConversation'

const Conversation = ({conversation,emoji,isLastIndex}) => {
    
    const {selectedConversation, setSelectedConversation} = useConversation()
    const isSelected = selectedConversation?._id === conversation._id
    
    return (
        <>
            <div onClick={() => setSelectedConversation(conversation) } className={`flex gap-2 mr-1 items-center hover:bg-sky-500 rounded-lg p-2 cursor-pointer ${isSelected?'bg-sky-500':''}`}>
                <div className="avatar online"> 
                    {/* this avatar and online functionality comes from daisyUI */}
                    <div className="w-12 rounded-full">
                        <img src={conversation.profilePic} alt="user avatar" />
                    </div>
                </div>
                <div className="flex flex-col flex-1">
                    <div className='flex gap-3 justify-between'>
                        <p className='font-semibold text-gray-200'>{conversation.fullName}</p>
                        <span className='text-xl'>{emoji}</span>
                    </div>
                </div>
            </div>
            {!isLastIndex ? <div className="divider"></div> : '' }
        </>
    )
}

export default Conversation
