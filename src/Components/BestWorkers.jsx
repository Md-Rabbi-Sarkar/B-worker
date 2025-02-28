import React, { useEffect, useState } from 'react'

import { useQuery } from '@tanstack/react-query'
import useAxiosPublic from '../Hooks/useAxiosPublic'
import { Link } from 'react-router-dom'

export default function BestWorkers() {
  const axiosPublic = useAxiosPublic()

  const { data: bestWorker = [] } = useQuery({
    queryKey: ['bestWoker'],
    queryFn: async () => {
      const res = await axiosPublic.get('/bestWorker')
      return res.data
    }
  })
  return (
    <div className=' p-10'>
      <h1 className='text-5xl my-10 text-center underline p-5 '>-Best Worker-</h1>
      <div className='grid grid-cols-1 lg:grid-cols-2  space-y-5 justify-items-center'>

        {bestWorker.map(worker =>
          <div data-aos="flip-left" key={worker._id} className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10 ">
              <img className="rounded-xl w-full h-48 object-cover"
                src={worker.photoURL}
                alt="Shoes"
              />
            </figure>
            <div className="card-body items-center text-center w-full">
              <h2 className="card-title">Worker Name: {worker.name}</h2>
              <p>Worker Coin: {worker.coin}</p>
              <div className="card-actions">
                <Link to={`singleWorker/${worker._id}`}><button className="btn btn-primary">Worker Details</button></Link>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
