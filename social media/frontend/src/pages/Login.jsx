import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {
  let emailRef = useRef()
  let passwordRef = useRef()

  const navigate = useNavigate()

  async function handleSubmit(e){
    e.preventDefault();
    let obj = {
      email:emailRef.current.value,
      password:passwordRef.current.value
    }
    try {
      let res = await axios.post('http://localhost:8090/users/login',obj);
    console.log(res)
    if(res.status==200){
      localStorage.setItem('divaToken', res.data.token);
      toast.success(res.data.msg, {position:"top-center"})
      navigate('/')
    }
    } catch (error) {
      console.log(error) //{}
        toast.error(error.response.data.msg, {position:"top-center"})
    }


  }
  return (
    <div className='h-screen bg-[url(https://free-3dtextureshd.com/wp-content/uploads/2024/04/39.jpg.webp)] bg-cover bg-ceter text-white flex justify-center items-center'>

        <div className='w-[30%]'>
            <h1 className='font-semibold text-lg'>Create your space, share your story, and connect with people who truly matter to you.</h1>
        </div>
        <form action="" className='flex flex-col gap-2 backdrop-blur-md  bg-yellow-300/5 p-5 w-[35%] rounded-2xl min-w-87.5'>
    
            <label htmlFor="">Email</label>
            <input ref={emailRef} className='border px-4 py-2 rounded' type="email" placeholder='enter your email' />

            <label htmlFor="">Password</label>
            <input ref={passwordRef} className='border px-4 py-2 rounded' type="password" placeholder='enter your password' />

            <button onClick={handleSubmit} className='bg-black text-white hover:bg-[#211d1d] px-2 py-2 rounded'>Login</button>
            <p className='text-center'>Dont have an account? <Link to={'/signup'} className='text-blue-500 my-2'>register</Link></p>
        </form>
    </div>
  )
}

export default Login
