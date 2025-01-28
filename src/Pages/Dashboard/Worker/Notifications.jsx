import React, { useContext } from 'react'
import useAxiosSecure from '../../../Hooks/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../../../Providers/AuthProvider'
import { info } from 'autoprefixer'

export default function Notifications() {
    const {user} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const {data:notifications=[]}=useQuery({
        queryKey:['notifications'],
        queryFn: async () =>{
            
            const res = await axiosSecure.get(`/notifications?email=${user.email}`)
            // console.log(res.data)
            return res.data
        }
    })
  return (
    <div className='flex flex-col gap-5'>
        {notifications.map((item,index)=><div key={item._id} className='border'>
            <p>{item.message}</p>
        </div>)}
    </div>
  )
}
