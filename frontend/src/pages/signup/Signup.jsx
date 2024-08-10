import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import GenderCheckBox from './GenderCheckBox'
import { useAuthContext } from '../../context/AuthContext' // this stores the useContext hook along with the state variables 
import toast from 'react-hot-toast'
// APPLY TOASTS AS REQUIRED
const Signup = () => {
    const { authUser, setAuthUser } = useAuthContext()
    const [loading, setLoading] = useState(false)
    const [inputs, setInputs] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: ''
    })
    const handleInputErrors = () => {
        if (!inputs.fullName.trim() || !inputs.username.trim() || !inputs.password.trim() || !inputs.confirmPassword.trim() || !inputs.gender) {
            console.error('Please fill all fields');
            return false;
        }
        if (inputs.password !== inputs.confirmPassword) {
            console.error('Passwords do not match')
            return false;
        }
        if (inputs.password.length < 6) {
            console.error('Try a longer password')
            return false;
        }
        return true
    }
    const handleCheckBoxChange = (gender) => {
        setInputs({ ...inputs, gender })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const success = handleInputErrors(inputs)
        if (!success) {
            return
        }
        setLoading(true)
        // console.log(inputs)
        try {
            let res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(inputs)
            })
            let data = await res.json();
            if (data.error) {
                throw new Error(data.error)
            }
            // set local storage
            localStorage.setItem("chat-user", JSON.stringify(data))
            // update our context variables
            setAuthUser(data);
            console.log(data);
        } catch (error) {
            console.error(error.message)
        } finally {
            setLoading(false)
        }
    }

    const handleChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    }

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className="p-6 w-full bg-gray-600 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40">
                {/* to get the above css for glass texture visit : "https://tailwindcss-glassmorphism.vercel.app/" */}
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    Sign Up
                    <span className='text-blue-500'> ChatApp</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Fullname</span>
                        </label>
                        <input type="text" name='fullName' onChange={handleChange} placeholder='Full Name' value={inputs.fullName} className='w-full input input-bordered h-10' />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Username</span>
                        </label>
                        <input type="text" name='username' onChange={handleChange} placeholder='username' value={inputs.username} className='w-full input input-bordered h-10' />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input type="password" name='password' onChange={handleChange} placeholder='Enter Password' value={inputs.password} className='w-full input input-bordered h-10' />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Confirm Password</span>
                        </label>
                        <input type="password" name='confirmPassword' onChange={handleChange} placeholder='Confirm Password' value={inputs.confirmPassword} className='w-full input input-bordered h-10' />
                    </div>

                    <GenderCheckBox onCheckboxChange={handleCheckBoxChange} selectedGender={inputs.gender} />

                    <Link to="/login" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>Already have an account?</Link>

                    <div>
                        <button type="submit" className='btn btn-block btn-primary btn-sm mt-2' disabled={loading}>
                            {loading ? (
                                <span className='loading loading-spinner'></span>
                            ) : (
                                "Sign Up"
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup
