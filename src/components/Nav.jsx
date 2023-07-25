import React from 'react'
import {FaBars} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import {useState} from 'react'
import '../app.css'


const Menu = () => {
  const [isHover,setIsHover] = useState(false)

  const handleMouse = (e) => {
    e.target.style.background = 'white'
    setIsHover(prev => !prev)
  //const handleMouseLeave = () => { setIsHover(false)}
  }
  
  return (
    <div className=' d-flex flex-column flex-md-row '>
    <NavLink className='px-3 text-decoration-none' to={'/'} onMouseOver={handleMouse} style={({isActive}) => isActive ? {color: 'orange'}: {color: 'green'} }>Home</NavLink>
    <NavLink className='px-3 text-decoration-none' to={'/register'} onMouseOver={handleMouse} style={({isActive}) => isActive ? {color: 'orange'} : {color: 'green'}}>Get started</NavLink>
    <NavLink className='px-3 text-decoration-none' to={'/login'} style={({isActive}) => isActive ? {color: 'orange'} : {color: 'green'}}>Login</NavLink>
    <NavLink className='px-3 text-decoration-none' to={'/dashboard'} style={({isActive}) => isActive ? {color: 'orange'} : {color: 'green'}}>My Courses</NavLink>
    <NavLink className='px-3 text-decoration-none' to={'/about'} style={({isActive}) => isActive ? {color: 'orange'} : {color: 'green'}}>About us</NavLink>
    <NavLink className='px-3 text-decoration-none' to={'/faqs'} style={({isActive}) => isActive ? {color: 'orange'} : {color: 'green'}} >FAQs</NavLink>
    </div>
  )
}

const Nav = () => {

  const [show, setShow] = useState(false)

  return (
    <div className=' navbar nav-cont container-fluid px-3 text-center'>
      <div className='d-flex px-2 pt-4'>
        <h1 className='nav-h1'>T</h1>
        <h2 className='nav-h2'>Tech<span className='text-success'>Girls</span></h2>
      </div>
        
        <div className=''>
        <button className='  btn btn-lg px-4 pt-3 d-md-none d-lg-none' type='button' onClick={() => setShow(prev => !prev)}>
        <span ><FaBars /></span>{show && <MobileMenu />}
        </button>
          <div className='lg-menu'>
            <Menu/>
          </div>
        </div>
    </div>
  )
}

export default Nav