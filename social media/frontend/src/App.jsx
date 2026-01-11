import React from 'react'
import './App.css'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import { useSelector } from 'react-redux'

const App = () => {
  let ctx = useSelector((state)=>state.user);
  console.log(ctx)
  let login = ctx.login
  
  return (
    <div>
      <BrowserRouter>
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
