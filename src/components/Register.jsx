import React from 'react'
import { useState } from 'react'
import { useNavigate, Link} from 'react-router-dom'
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs"
import '../app.css'


const Register = () => {

  const navigate = useNavigate()

  const initialValue = {
    username: '',
    password: '',
    email: '',
    age: 0,
    gender: '',
    skills: '',
    bio: '',
    tick: false

  }
  

  const [userData, setUserData] = useState(initialValue)
  const [show, setShow] = useState(true)


  const handleChange = (e) => {
    const {name, value, type, checked, } = e.target
    setUserData({...userData,[name]: type === 'checkbox' ? checked : value})
  }
  console.log(userData)

  const handleSubmit = (e) => {
    e.preventDefault()
    const newUser = JSON.stringify(userData)
    sessionStorage.getItem('username') === null
      ? sessionStorage.setItem('username', newUser) 
      : (sessionStorage.removeItem('username'),
        sessionStorage.setItem('username', newUser))
    navigate('/Login')
    //alert(JSON.stringify(userData))
  }


  return (
    <div className='form-div container-fluid py-4 pt-md-5 ' style={{background: '#d7fad7'}}>
         <div className='text-center'>
          <p className='h6'>Already signed-up? <Link className='text-decoration-none h6 text-warning' to={'/login'}>Login here</Link></p> 
        </div> 
        <form onSubmit={handleSubmit} className='reg-form mx-0 bg-white p-5'>
          <div className='form-group'>
            <label className='form-label' htmlFor='username'>Full Names </label>
            <input className='form-control' type='text' name='username' value={userData.username} onChange={handleChange}/>
          </div>
          <div className='form-group' style={{position: 'relative'}}>
            <label className='form-label' htmlFor='password'>Password</label>
            <input className='form-control' type={show ? 'text' : 'password' } name='password' value={userData.password}  onChange={handleChange}/>
            <div className='form-eye' onClick={() => setShow((prev) => !prev)}>{show ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}</div>
          </div>
          <div className='form-group'>
            <label className='form-label'>Email</label>
            <input className='form-control' type='email' placeholder='example@gmail.com' name='email' value={userData.email}  onChange={handleChange}/>
          </div>
           <div className='form-group'>
            <label className='form-label'>age</label>
            <input className='form-control' type='number' name='age' value={userData.age}  onChange={handleChange}/>
          </div>

          <div className='form-group'>
            <label className='form-label'>choose a skill</label>
            <select className='form-control form-select' name='skills' value={userData.skills} onChange={handleChange}>
              <option value=''></option>
              <option value='html'>HTML</option>
              <option value='css'>CSS</option>
              <option value='js'>JS</option>
              <option value='react'>REACT</option>
            </select>
          </div>

          <div className='form-group'>
            <label className='form-label'>Gender</label>
            <select className='form-control form-select' name='gender' value={userData.gender} onChange={handleChange}>
              <option value=''></option>
              <option value='html'>Male</option>
              <option value='css'>Female</option> 
            </select>
          </div>
          
          <div className='form-group'>
            <label className='form-label'>Bio
            <textarea className='form-control' type='text' name='bio' value={userData.bio} placeholder='Tell us something about you'  onChange={handleChange}/>
            </label>
          </div>

          <div className='form-check'>
            <label className='form-check-label '> I agree to the terms and conditions  
              <input className='form-control form-check-input px-1' style={{}} type='checkbox' name='tick' checked={userData.tick} onChange={handleChange}/>   
            </label>
          </div>
          <div className='d-grid mt-4'>
          <button type='submit' className='btn btn-success'>submit</button>
          </div>
        </form>
                
      </div>
  
  )
}

export default Register