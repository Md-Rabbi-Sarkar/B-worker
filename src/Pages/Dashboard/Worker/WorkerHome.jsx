import React, { useContext } from 'react'
import useAxiosSecure from '../../../Hooks/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../../../Providers/AuthProvider'
import States from './component/States'

import Notifications from '../NotificationsIcon'
import NotificationsIcon from '../NotificationsIcon'

export default function WorkerHome() {
  const axiosSecure = useAxiosSecure()
  const { user } = useContext(AuthContext)
  const { data: workerApprovedTask = [] } = useQuery({
    queryKey: ['workerApproveTask'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/workerApproveTask?email=${user.email}`)
      return res.data
    }
  })
  return (
    <div>
      <div className='mb-10
      '>
        <States></States>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Task Title</th>
              <th>Payable Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {workerApprovedTask.map((task, index) => <tr key={task._id}>
              <th>{index + 1}</th>
              <td>{task.buyerName}</td>
              <td>{task.taskTitle}</td>
              <td>{task.payableAmount}</td>
              <td>{task.status}</td>
              
            </tr>)}

          </tbody>
        </table>
      </div>
      <NotificationsIcon></NotificationsIcon>
    </div>

  )
}
