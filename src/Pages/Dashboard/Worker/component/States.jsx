import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import { AuthContext } from '../../../../Providers/AuthProvider'
import useAxiosSecure from '../../../../Hooks/useAxiosSecure'

export default function States() {
  const axiosSecure = useAxiosSecure()
  const { user } = useContext(AuthContext)

  const { data: workerpendingTask = [] } = useQuery({
    queryKey: ['workerpendingTask'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/workerStates?email=${user.email}`)
      return res.data
    }
  })
  return (
    <div className="w-full mb-10 mx-auto text-center stats shadow p-10">
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
        <div className="stat-title">Total Submission</div>
        <div className="stat-value">{workerpendingTask.allWorker}</div>

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
        <div className="stat-title">Pending Submission</div>
        <div className="stat-value">{workerpendingTask.allpendingWorker}</div>

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
        <div className="stat-title">T0tal Earning</div>
        <div className="stat-value">$ {workerpendingTask.totalpayablecoin}</div>

      </div>
    </div>
  )
}
