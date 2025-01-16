import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../../Providers/AuthProvider'
import useAxiosPublic from '../../../Hooks/useAxiosPublic'
import useAxiosSecure from '../../../Hooks/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'

export default function MySubmission() {
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const {data:submissionTask =[]}=useQuery({
        queryKey:['submitTask',user?.email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/submitTask/${user.email}`)
           return res.data
        }
    })
    
    return (
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Task Title</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {submissionTask.map((task,index)=><tr>
        <th>{index+1}</th>
        <td>{task.taskTitle}</td>
        <td>{task.submissionDate}</td>
        <td>{task.status}</td>
      </tr>)}
      
      
    </tbody>
  </table>
</div>
    )
}
