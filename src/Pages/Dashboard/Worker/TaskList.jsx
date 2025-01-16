import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

export default function TaskList() {
    const taskList = useLoaderData();
  return ( 
    <div>
        {taskList.map((task,index)=><div key={task._id} className="card lg:card-side bg-base-100 shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
      alt="Album" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{task.taskTitle}</h2>
    <p>{task.payableAmount}</p>
    <p>{task.buyerName}</p>
    <p>{task.status}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary"><Link to={`/dashboard/taskDetails/${task._id}`}>Details</Link></button>
    </div>
  </div>
</div>)}
    </div>
    
  )
}
