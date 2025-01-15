import React, { useContext } from 'react'
import { AuthContext } from '../Providers/AuthProvider'
import useAxiosSecure from './useAxiosSecure'
import { useQuery } from '@tanstack/react-query';

export default function useBuyer() {
    const {user,loading} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure();
    const {data : isWorker = [], isPending : isWorkerLoading} =useQuery({
      queryKey:[user?.email,'isWorker'],
      enabled:!loading,
      queryFn: async () =>{
        const res = await axiosSecure.get(`/user/worker/${user.email}`)
        return res.data?.worker
        
      }
    })
  return [isWorker ,isWorkerLoading]
}
