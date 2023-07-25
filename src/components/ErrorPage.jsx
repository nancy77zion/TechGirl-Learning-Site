import React from 'react'
import {useNavigate} from 'react-router-dom'

const ErrorPage = () => {

  const navigate = useNavigate()
  return (
    <>
    <div >
      <h1>Error 404</h1>
      <p>check your connection</p>
      <p>page not found</p>
      <button className='text-white bg-black btn btn-md' onClick={()=>navigate('/')}>Back</button>
    </div>
    </>
  )
}

export default ErrorPage