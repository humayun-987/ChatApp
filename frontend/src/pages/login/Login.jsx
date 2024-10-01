import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { set } from 'mongoose';
import { useAuthContext } from '../../context/AuthContext';
const Login = () => {
    const [inputs, setInputs] = useState({
        username: '',
        password: '',
    })
    const handleChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    }
    const handleInputErrors = () => {
        if (!inputs.username.trim() || !inputs.password.trim()) {
            console.error('Please fill all fields');
            return false;
        }
        return true
    }
    const [loading, setLoading] = useState(false)

    const { setAuthUser } = useAuthContext()

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const success = handleInputErrors(inputs)
        
        if(!success){
            return
        }
        
        setLoading(true);
        
        try {

            const res = await fetch('/api/auth/login', {
                method: "POST",
                body: JSON.stringify(inputs),
                headers: { "Content-Type": "application/json" }
            })

            const data = await res.json()

            if (data.error) {
                throw new Error(data.error)
            }

            localStorage.setItem('chat-user', JSON.stringify(data));
            setAuthUser(data);
            toast.success('Login successful!');

        } catch (error) {
            console.error(error)
            toast.error('Login not successful!');
        } finally {
            setLoading(false)
        }
    }
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className="p-6 h-full w-full bg-gray-600 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40">
                {/* to get the above css for glass texture visit : "https://tailwindcss-glassmorphism.vercel.app/" */}
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    Login
                    <span className='text-blue-500'> ChatApp</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Username</span>
                        </label>
                        <input type="text" name='username' value={inputs.username} onChange={handleChange} placeholder='Enter username' className='w-full input input-bordered h-10' />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input type="password" name='password' value={inputs.password} onChange={handleChange} placeholder='Enter password' className='w-full input input-bordered h-10' />
                    </div>
                    <Link to="/signup" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>{"Don't"} have an account?</Link>
                    <div>
                        <button type='submit' className='btn btn-block btn-primary btn-sm mt-2' disabled={loading}>
                            {loading ? (
                                <span className='loading loading-spinner'></span>
                            ) : (
                                "Login"
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
