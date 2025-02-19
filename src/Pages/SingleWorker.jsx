import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

export default function SingleWorker() {
    const {_id,name,email,role,photoURL,coin} = useLoaderData()
    console.log(_id)
  return (
    <div className="card glass w-96">
  <figure>
    <img
      src={photoURL}
      alt="car!" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Name: {name}</h2>
    <p>Email: {email}</p>
    <p>Role: {role}</p>
    <p>Coin: {coin}</p>
    <div className="card-actions justify-end">
      <Link to='/'><button className="btn btn-primary">Back to Home</button></Link>
    </div>
  </div>
</div>
  )
}
