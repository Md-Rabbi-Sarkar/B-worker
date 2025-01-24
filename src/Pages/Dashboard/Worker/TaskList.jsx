import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

export default function TaskList() {
  const taskList = useLoaderData();
  return (
    <div>
      {taskList.map((task, index) => <div key={task._id} className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
            alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Task Title: {task.taskTitle}</h2>
          <p>Buyer Name: {task.buyerName}</p>
          <p>Completion Date: {task.completionDate
          }</p>
          <p>PayableAmount: {task.payableAmount}</p>

          <p>RequiredWorkers: {task.requiredWorks}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary"><Link to={`/dashboard/taskDetails/${task._id}`}>Details</Link></button>
          </div>
        </div>
      </div>)}
    </div>

  )
}
