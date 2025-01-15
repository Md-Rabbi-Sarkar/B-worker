import React, { useContext } from 'react'
import { AuthContext } from '../Providers/AuthProvider'
import useAxiosSecure from './useAxiosSecure'
import { useQuery } from '@tanstack/react-query';

export default function useBuyer() {
    const {user,loading} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure();
    const {data : isBuyer = [], isPending : isBuyerLoading} =useQuery({
      queryKey:[user?.email,'isbuyer'],
      enabled:!loading,
      queryFn: async () =>{
        const res = await axiosSecure.get(`/user/buyer/${user.email}`)
        return res.data?.buyer
        
      }
    })
  return [isBuyer ,isBuyerLoading]
}

