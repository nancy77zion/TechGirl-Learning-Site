import React from 'react'
import {Outlet, Navigate} from 'react-router-dom'

const ProtectedRoutes = () => {

  const username = sessionStorage.getItem('username')

  return username ? <Outlet /> : <Navigate to={'/login'} />
}

export default ProtectedRoutes