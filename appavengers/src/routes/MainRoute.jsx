import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import NotFound from '../components/NotFound'
import RegisterPage from '../pages/RegisterPage'
import LoginPage from '../pages/LoginPage'
import Dashboard from '../pages/Dashboard'

function MainRoute() {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/signup' element={<RegisterPage/>}/>
        <Route path='/signin' element={<LoginPage/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/*' element={<NotFound/>}/>
    </Routes>
  )
}

export default MainRoute