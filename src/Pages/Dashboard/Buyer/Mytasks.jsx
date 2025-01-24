import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import { AuthContext } from '../../../Providers/AuthProvider'
import useAxiosSecure from '../../../Hooks/useAxiosSecure'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

export default function Mytasks() {
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure();
    const { data: myTasks = [], refetch } = useQuery({
        queryKey: ['myTasks', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/mytasks/${user.email}`)
            // console.log(res.data)
            return res.data
        }
        
    })
    const sortedTasks = [...myTasks].sort((a,b)=>new Date(b.completionDate) - new Date(a.completionDate))
    const handleDelete = async (id,requiredWorks,payableAmount) => {
        const totalPayableAmount=requiredWorks*payableAmount
        const update= {totalPayableAmount,email:user.email}
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then(async(result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.put(`/deleteTask/${id}`,update)
        console.log(res.data)
        refetch()
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
    }
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>TaskTitle</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedTasks.map((task, index) => <tr key={task._id}>
                        <th>{index + 1}</th>
                        <td>{task.taskTitle}</td>
                        <td ><Link to={`/dashboard/updateTask/${task._id}`}>Update</Link></td>
                        <td onClick={() => handleDelete(task._id,task.requiredWorks,task.payableAmount)}>Delete</td>
                    </tr>)}

                </tbody>
            </table>
        </div>
    )
}
