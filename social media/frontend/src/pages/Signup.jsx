import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const Signup = () => {
  const navigate = useNavigate()
  const [userData, setuserData] = useState({
    name:"",
    email:"",
    password:""
  });

  function handleChanger(e){
      setuserData({...userData, [e.target.name]:e.target.value})
  }

 async function handleSubmit(e){
    e.preventDefault();
    console.log(userData)
    try {
      let res = await fetch('http://localhost:8090/users/register',{
      method:"post",
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(userData)
    })
    let data = await res.json();
    console.log(data)

    if(res.status===200 || res.status==201){
      toast.success(data.msg, {position:"top-center"})
        navigate('/login')
    }
    else{
      toast.error(data.error , {position:"top-center"})
    }

    } catch (error) {
      console.log(error.message)
    }

    

  }
  return (
    <div className='h-screen md:flex-row flex-col bg-[url(https://free-3dtextureshd.com/wp-content/uploads/2024/04/39.jpg.webp)] bg-cover bg-ceter text-white flex justify-center items-center md:gap-2 gap-4'>

        <div className='md:w-[30%] w-[70%] md:text-left text-center'>
            <h1 className='font-bold italic text-xl bg-linear-to-r from-gray-300 via-yellow-500 to-amber-400 text-transparent bg-clip-text '>Create your space, share your story, and connect with people who truly matter to you.</h1>
        </div>
        <form onSubmit={handleSubmit} action="" className='flex flex-col gap-2 backdrop-blur-md  bg-yellow-300/5 p-5 w-[35%] rounded-2xl min-w-87.5'>
            <label htmlFor="">Name</label>
            <input onChange={handleChanger} name='name' className='border px-4 py-2 rounded' type="text" placeholder='enter your name' />

            <label htmlFor="">Email</label>
            <input onChange={handleChanger} name='email' className='border px-4 py-2 rounded' type="email" placeholder='enter your email' />

            <label htmlFor="">Password</label>
            <input onChange={handleChanger} name='password' className='border px-4 py-2 rounded' type="password" placeholder='enter your password' />

            <button type='submit' className='bg-black text-white hover:bg-[#211d1d] px-2 py-2 rounded'>Sign up</button>
            <p className='text-center'>Already a user? <Link to={'/login'} className='text-blue-500 my-2'>login</Link></p>
        </form>
    </div>
  )
}

export default Signup
