import React, { useEffect } from 'react'
import './App.css'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from './store/userSlice'
import Navbar from './components/Navbar'

const App = () => {
  let ctx = useSelector((state)=>state.user);
  console.log(ctx)
  let login = ctx.login  //store ke slice  --> false , true

  let dispatch = useDispatch();


  async function getUserDetails(){
    let res  = await fetch('http://localhost:8090/users',{
      method:"get",
      headers:{
        'Authorization':ctx.token
      }
    })
    let data = await res.json();
    console.log(data)
    dispatch(updateUser(data.user))
  }


  useEffect(()=>{
    if(ctx.token){
      getUserDetails()
    }
  },[ctx.token])
  
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
            <Route path='/' element={login===true? <Home/> : <Navigate to='/login'/>}/>
            <Route path='/signup' element={login===false ?<Signup/> : <Navigate to='/'/>}/>
            <Route path='/login' element={login===false ?<Login/> : <Navigate to='/'/>}/>
        </Routes>
        <ToastContainer/>
      </BrowserRouter>
    </div>
  )
}

export default App
