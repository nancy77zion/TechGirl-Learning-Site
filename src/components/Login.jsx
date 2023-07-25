import React from 'react'
import { useState, useEffect } from "react"
//link used for nav link
import { Link, useNavigate } from 'react-router-dom'
import  { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs"



const Login = () => {

  const [show, setShow] = useState(true)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState({})

  const navigate = useNavigate()

  useEffect(() => {
    const registerData = sessionStorage.getItem('username')
    const userInfo = JSON.parse(registerData) //makes it an object again
    //console.log(registerData)
    setUserData(userInfo)
  },[])

  const handleSubmit = (e) => {
    if (userData?.username === username && userData?.
      password === password) {
      //alert('Weclome back')
      sessionStorage.setItem('username',username)
      navigate('/dashboard')
    } else {
      alert('invalid user')
    }
  }

  return (
    <div  className='form-div container-fluid  py-4 pt-md-5' style={{background: '#d7fad7'}}> 
      <form onSubmit={handleSubmit} className='reg-form  bg-white p-5'>
        <div className='form-group'>
          <label className='form-label' htmlFor='username'>Full Names </label>
          <input className='form-control' type='text' name='username' value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
          
        <div style={{position: 'relative'}}>
          <label className='form-label' htmlFor='username'>Password </label>
          <input className='form-control' type={show ? 'text' : 'password'} name='password' value={password}  onChange={(e) => setPassword(e.target.value)} />
          <div style={{position: 'absolute', left: '180px', top: '40px'}}
              onClick={() => setShow((prev) => !prev)}>{show ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
           </div>
        </div>
        <div className='d-grid mt-4'>
          <button type='submit' className='btn btn-success'>submit</button>
        </div>
      </form>

      <div className='text-center pt-3'>
          <p className='h6'>Don't have an Account? <Link className='text-decoration-none h6 text-warning' to={'/register'}>Register</Link></p> 
      </div>   

    </div>
  )
}

export default Login