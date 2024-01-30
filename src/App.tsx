import React from 'react'
import {  Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import Home from './components/Home'

const App = () => {
  return (
    <div>
      <Navbar />
        {/* <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/dashboard' element={<PrivateRoute Component={Dashboard}/>}/>
        </Routes> */}
    </div>
  )
}

export default App
