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
    <div >
      <h1 className='text-5xl my-10'>Best Worker</h1>
      {bestWorker.map(worker => <div data-aos="flip-left" key={worker._id} className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img className='w-1/2'
            src={worker.photoURL}
            alt="Album" />
        </figure>
        <div className="card-body flex flex-col justify-center items-center">
          <h2>Worker Name: {worker.name}</h2>
          <p>Worker Coin: {worker.coin}</p>
        </div>
      </div>)}
    </div>

  )
}
