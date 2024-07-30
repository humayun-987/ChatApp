import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

const SearchUser = () => {
    return (
        <form className='flex items-center gap-2'>
            <input type="text" placeholder='Search...' className='rounded-full input px-10 input-bordered' />
            <button className='btn btn-circle bg-sky-500'><IoSearchSharp className='w-6 h-6 outline-none' /></button>
        </form>
    )
}

export default SearchUser
