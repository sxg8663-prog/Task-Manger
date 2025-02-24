import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Login from '../user/Login'
const PrivateRoute = ({children}) => {
  let navigate = useNavigate();
  useEffect(()=>{
    if(!sessionStorage.getItem("Token")){
      navigate('/login')
    }
  },[navigate])
  return (
    sessionStorage.getItem("Token")?<>{children}</>:<Login/>
  )
}

export default PrivateRoute
