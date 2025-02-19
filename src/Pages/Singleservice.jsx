import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

export default function Singleservice() {
    const {taskTitle,taskDetails,
        requiredWorks,payableAmount,
        taskImageUrl,
        buyerName
        } = useLoaderData()
    // console.log(_id)
  return (
    <div className="card glass w-96">
  <figure>
    <img
      src={taskImageUrl}
      alt="car!" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">TaskTitle: {taskTitle}</h2>
    <p>Buyer Name: {buyerName}</p>
    <p>Description: {taskDetails}</p>
    <p>Required Workers: {requiredWorks}</p>
    <p>Payable Amount: {payableAmount}</p>
    <div className="card-actions justify-end">
      <Link to='/'><button className="btn btn-primary">Back to Home</button></Link>
    </div>
  </div>
</div>
  )
}
