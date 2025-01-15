import React, { useContext } from 'react'
import { AuthContext } from '../Providers/AuthProvider'
import useWorker from '../Hooks/useWorker'
import { Navigate, useLocation } from 'react-router-dom'

export default function WorkerRoute({children}) {
    const {user , loading} = useContext(AuthContext)
    const [isWorker, isWorkerLoading] = useWorker()
    const location = useLocation()
    if(loading,isWorkerLoading){
        return <span className="loading loading-spinner text-neutral"></span>
    }
    if(user && isWorker){
        return children
    }
  return <Navigate to='/login' state={{from:location}} replace></Navigate>
}
