import React, { useContext } from 'react'
import { AuthContext } from '../Providers/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'

export default function PrivateRoute({children}) {
    const {user,loading} =useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <span className="loading loading-spinner text-neutral"></span>
    }
    if(user){
        return children
    }
  return <Navigate to='/login' state={{from:location}} replace></Navigate>
}
