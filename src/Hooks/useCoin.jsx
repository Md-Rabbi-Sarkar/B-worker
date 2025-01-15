import React, { useContext } from 'react'
import { AuthContext } from '../Providers/AuthProvider'
import useAxiosSecure from './useAxiosSecure'
import { useQuery } from '@tanstack/react-query'

export default function useCoin() {
    const {user,loading} =useContext(AuthContext)
    const axiosSecure=useAxiosSecure()
    const {data: coin=[],refetch} =useQuery({
        queryKey:['coin',user?.email],
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/coin/${user.email}`)
            return res.data
        }
    })
  return[coin,refetch]
}
