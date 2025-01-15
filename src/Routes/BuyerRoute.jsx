import React, { useContext } from 'react'
import { AuthContext } from '../Providers/AuthProvider'
import useBuyer from '../Hooks/useBuyer'
import { Navigate, useLocation } from 'react-router-dom';

export default function BuyerRoute({children}) {
    const {user,loading} = useContext(AuthContext)
    const [isBuyer, isBuyerLoading] = useBuyer();
    const location = useLocation();
    if(loading || isBuyerLoading){
        return <span className="loading loading-spinner text-neutral"></span>
    }
    if(user && isBuyer){
        return children
    }
  return <Navigate to='/login' state={{from:location}} replace></Navigate>
}
