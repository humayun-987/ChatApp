import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import useConversation from '../../zustand/useConversation';
import useGetConversations from '../../hooks/useGetConversations';

const SearchUser = () => {
    const [search, setSearch] = useState('')
    const {setSelectedConversation} = useConversation()
    const {conversations} = useGetConversations()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!search) return;
        if(search.length < 3) {
            return
        }
        const conversation = conversations.find(c => c.fullName.toLowerCase().includes(search.toLowerCase()));
        if(conversation){
            setSelectedConversation(conversation)
        }
    }

    return (
        <form onSubmit={handleSubmit} className='flex items-center gap-2'>
            <input type="text" placeholder='Search...' onChange={(e)=>setSearch(e.target.value)} value={search} className='rounded-full input w-[90%] input-bordered' />
            <button type="submit" className='btn btn-circle bg-blue-500'><IoSearchSharp className='w-6 h-6 outline-none' /></button>
        </form>
    )
}

export default SearchUser
