import React, { useContext } from 'react'
import useAxiosSecure from '../../../Hooks/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../../../Providers/AuthProvider'

export default function BuyerHome() {
  const axiosSecure = useAxiosSecure()
  const { user } = useContext(AuthContext)
  const { data: buyerTask = [] } = useQuery({
    queryKey: ['pendingTask'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/buyerTotalTask?email=${user.email}`)
      console.log(buyerTask)
      return res.data
    }
  })
  const handleClick = async (id, email, payAmount) => {
    const info = {
      workerEmail: email,
      payAbleAmount: payAmount
    }
    const res = await axiosSecure.put(`/approveTask/${id}`, info)
    console.log(res.data)
  }
  const handleDelete = async (id, email) => {
    const info = { email }
    const res = await axiosSecure.put(`/rejectTask/${id}`, info)
    console.log(res.data)
  }
  return (
    <div>
      <div>
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div className="stat-title">Total Task</div>
            <div className="stat-value">{buyerTask.totalTask}</div>
            <div className="stat-desc">Jan 1st - Feb 1st</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
              </svg>
            </div>
            <div className="stat-title">Pending Task</div>
            <div className="stat-value">{buyerTask.requiredWorks}</div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
              </svg>
            </div>
            <div className="stat-title">Payment Paid</div>
            <div className="stat-value">{buyerTask.payAbleAmount}</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th>#</th>
              <th>Worker Name</th>
              <th>Task Title</th>
              <th>Payable Amount</th>
              <th>Submission Info</th>
              <th >Approve</th>
              <th >Reject</th>
            </tr>
          </thead>
          <tbody>
            {buyerTask?.result?.map((task, index) => <tr key={task._id}>
              <th>{index + 1}</th>
              <th>{task.workerName}</th>
              <td>{task.taskTitle}</td>
              <td>{task.payableAmount}</td>
              <td>{task.submissionDetails}</td>
              <td onClick={() => handleClick(task._id, task.workerEmail, task.payableAmount)}>Approve</td>
              <td onClick={() => handleDelete(task._id, task.buyerEmail)}>Reject</td>

            </tr>)}


          </tbody>

        </table>
      </div>
    </div>

  )
}
