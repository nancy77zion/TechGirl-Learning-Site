
import React from 'react'
import Register from './components/Register'
import Login from './components/Login'
import Faq from './components/Faq'
import About from './components/About'
import ErrorPage from './components/ErrorPage'
import Dashboard from './components/Dashboard'
import ProtectedRoutes from './components/ProtectedRoutes'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import SharedOutlet from './components/SharedOutlet'
import './app.css'


function App() {

  return (
      <Routes className='container-fluid'>
      <Route path={'/'} element={<SharedOutlet />}>
        <Route index element={<Home />} />
        <Route path={'register'} element={<Register />} />
        <Route path={'login'} element={<Login />} />
        <Route path={'About'} element={<About />} />
        <Route path={'faqs'} element={<Faq/>} />
        <Route element={<ProtectedRoutes />} >
          <Route path={'dashboard'} element={<Dashboard/>} />
        </Route>
      </Route>
      <Route path={'*'} element={<ErrorPage />} />
    </Routes>
    
  )
}

export default App
