import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import { getRandomEmoji } from '../../utils/emoji'
const CurrentUser = () => {
    const emoji = getRandomEmoji()
    const { authUser } = useAuthContext()
    return (
        <div className={`bg-[rgba(0,0,0,0.6)] flex gap-2 mb-3 items-center rounded-lg p-2 cursor-pointer`}>
            <div className="avatar online">
                {/* this avatar and online functionality comes from daisyUI */}
                <div className="w-14 rounded-full">
                    <img src={authUser.profilePic} alt="user avatar" />
                </div>
            </div>
            <div className="flex justify-between items-center flex-1">
                <div className='flex flex-col'>
                    <p className='font-semibold text-gray-200'>{authUser.fullName}</p>
                    <p>{authUser.username}</p>
                </div>
                <span className='text-xl'>{emoji}</span>
            </div>
        </div>
    )
}

export default CurrentUser
