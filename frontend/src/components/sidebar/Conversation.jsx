import React from 'react'

const Conversation = () => {
    return (
        <>
            <div className='flex gap-2 mr-1 items-center hover:bg-sky-500 rounded-lg p-2 cursor-pointer'>
                <div className="avatar online"> 
                    {/* this avatar and online functionality comes from daisyUI */}
                    <div className="w-12 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="user avatar" />
                    </div>
                </div>
                <div className="flex flex-col flex-1">
                    <div className='flex gap-3 justify-between'>
                        <p className='font-semibold text-gray-200'>Humayun Ahmad</p>
                        <span className='text-xl'>🌟</span>
                    </div>
                </div>
            </div>
            <div className="divider"></div>
        </>
    )
}

export default Conversation
