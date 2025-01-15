import React, { useContext } from 'react'
import { AuthContext } from '../Providers/AuthProvider'
import useAxiosSecure from './useAxiosSecure'
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

export default function useAdmin() {
    const {user,loading} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
    const {data : isAdmin = [], isPending : isAdminLoading} =useQuery({
      queryKey:[user?.email,'isadmin'],
      enabled:!loading,
      queryFn: async () =>{
        const res = await axiosSecure.get(`/user/admin/${user.email}`)
        return res.data?.admin
      }
    })
  return [isAdmin ,isAdminLoading]
}
