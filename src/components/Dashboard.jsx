import React from 'react'
import {useNavigate} from 'react-router-dom'
import {useState, useEffect} from 'react'

const Dashboard = () => {

  const [user, setUser] = useState('')

  useEffect(()=>{
    const username = sessionStorage.getItem('username')
    setUser(username)
  },[])
  
  const navigate = useNavigate()

  return (
    <>
      <div>welcome to your Dashborad</div>
      <h3>Hello {user}</h3>
      <button className='btn' type='button' onClick={()=> {
        sessionStorage.removeItem('username')
        navigate('/login')}}>
        Sign Out
      </button>
    </>
  )
}

export default Dashboard