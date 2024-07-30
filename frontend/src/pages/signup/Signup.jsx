import React from 'react'
import GenderCheckBox from './GenderCheckBox'
const Signup = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className="p-6 w-full bg-gray-600 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40">
                {/* to get the above css for glass texture visit : "https://tailwindcss-glassmorphism.vercel.app/" */}
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    Sign Up
                    <span className='text-blue-500'> ChatApp</span>
                </h1>

                <form >
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Fullname</span>
                        </label>
                        <input type="text" placeholder='Humayun Ahmad' className='w-full input input-bordered h-10' />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Username</span>
                        </label>
                        <input type="text" placeholder='humayun987' className='w-full input input-bordered h-10' />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input type="password" placeholder='Enter Password' className='w-full input input-bordered h-10' />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Confirm Password</span>
                        </label>
                        <input type="password" placeholder='Confirm Password' className='w-full input input-bordered h-10' />
                    </div>
                    <GenderCheckBox/>
                    <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>Already have an account?</a>

                    <div>
                        <button className='btn btn-block btn-primary btn-sm mt-2'>Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default Signup
