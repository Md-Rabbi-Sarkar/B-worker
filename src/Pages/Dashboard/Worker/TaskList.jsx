import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

export default function TaskList() {
  const taskList = useLoaderData();
  return (
    <div>
      {taskList.map((task, index) => <div key={task._id} className="card lg:card-side bg-base-100 shadow-xl">
        <div className="">
          <img className='w-screen h-1/2 px-10 object-cover'
            src={task.
              taskImageUrl
              }
            alt="Album" />
        </div>
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
