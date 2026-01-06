import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='h-screen bg-[url(https://free-3dtextureshd.com/wp-content/uploads/2024/04/39.jpg.webp)] bg-cover bg-ceter text-white flex justify-center items-center'>

        <div className='w-[30%]'>
            <h1 className='font-semibold text-lg'>Create your space, share your story, and connect with people who truly matter to you.</h1>
        </div>
        <form action="" className='flex flex-col gap-2 backdrop-blur-md  bg-yellow-300/5 p-5 w-[35%] rounded-2xl min-w-87.5'>
    
            <label htmlFor="">Email</label>
            <input className='border px-4 py-2 rounded' type="email" placeholder='enter your email' />

            <label htmlFor="">Password</label>
            <input className='border px-4 py-2 rounded' type="password" placeholder='enter your password' />

            <button className='bg-black text-white hover:bg-[#211d1d] px-2 py-2 rounded'>Sign up</button>
            <p className='text-center'>Dont have an account? <Link to={'/signup'} className='text-blue-500 my-2'>register</Link></p>
        </form>
    </div>
  )
}

export default Login
