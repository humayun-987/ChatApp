import React, { useState } from 'react'
import { BiLogOut } from "react-icons/bi";
import { useAuthContext } from '../../context/AuthContext';
import toast from 'react-hot-toast';

const LogoutBtn = () => {
    
    const [loading,setLoading] = useState(false)
    const {setAuthUser} = useAuthContext()
    
    const logout = async () => {
        try{
            setLoading(true);
            const res = await fetch('api/auth/logout', {
                method:"POST",
                headers: {"Content-Type": "application/json"}
            });
            const data = await res.json();
            
            localStorage.removeItem('chat-user');
            setAuthUser(null);
            // console.log(data);
        } catch(error) {
            console.error(error)
        } finally{
            setLoading(false)
        }
    }

    return (
        <div className='mt-auto'>
           {!loading ? (
             <BiLogOut onClick={logout} className='w-6 h-6 text-white cursor-pointer'/>
           ) : (
            <span className='loading loading-spinner'></span>
           )}
        </div>
    )
}

export default LogoutBtn
