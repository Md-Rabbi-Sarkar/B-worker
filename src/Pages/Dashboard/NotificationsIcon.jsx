import React, { useContext } from 'react'

import { Container, Button, Link } from 'react-floating-action-button'
import { IoIosNotifications } from 'react-icons/io'
import { AuthContext } from '../../Providers/AuthProvider'
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../../Hooks/useAxiosSecure'
export default function NotificationsIcon() {
  const {user} = useContext(AuthContext)
  const axiosSecure = useAxiosSecure()
  const {data:recentNotification=[]}=useQuery({
    queryKey:['recentNotofication'],
    queryFn: async ()=>{
      const res = await axiosSecure.get(`/notificationsIcon?email=${user.email}`)
      // console.log(res.data)
      return res.data
    }
  })
  const handleClick= async () =>{
    const res = await axiosSecure.put(`/notiStatus?email=${user.email}`)
  // console.log(res.data)
  }
  return (
    <div>
      <Container>
      <Link onClick={handleClick} href='/dashboard/notifications'
                tooltip="Notification"
                />
        <button className="btn rounded-full">
        <IoIosNotifications />
          <div  className="badge badge-secondary">{recentNotification.result
            }</div>
        </button>
      </Container>
    </div>
  )
}
