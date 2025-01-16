import React from 'react'
import useAxiosSecure from '../../../Hooks/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'

export default function ManageTasks() {
    const axiosSecure = useAxiosSecure()
    const {data:allTasks=[],refetch} = useQuery({
        queryKey:['alltasks'],
        queryFn: async ()=>{
            const res = await axiosSecure.get('allTasks')
            return res.data
        }
    })
    const handleDelete = async (id)=>{
        const res = await axiosSecure.delete(`/taskDelete?id=${id}`)
        console.log(res.data)
        refetch()
    }
  return (
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Task Title</th>
        <th>Submission Info</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {allTasks.map((task,index)=><tr key={task._id}>
        <th>{index+1}</th>
        <td>{task.taskTitle}</td>
        <td>{task.submissionInfo}</td>
        <td onClick={()=>handleDelete(task._id)}>Delete</td>
      </tr>)}
      
    </tbody>
  </table>
</div>
  )
}
