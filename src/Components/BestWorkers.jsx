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
    <div>
      {bestWorker.map(worker => <div key={worker._id} className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
            alt="Album" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title ">{worker.name}</h2>
          <p>{worker.coin}</p>
        </div>
      </div>)}
    </div>

  )
}
