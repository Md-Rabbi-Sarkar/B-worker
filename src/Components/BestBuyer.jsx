import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxiosPublic from '../Hooks/useAxiosPublic'

export default function BestBuyer() {
    const axiosPublic = useAxiosPublic();
    const {data: bestBuyer=[]} = useQuery({
        queryKey:['bestbuyer'],
        queryFn:async () =>{
            const res = await axiosPublic.get('/bestBuyer')
            console.log(res.data)
            return res.data
        }
    })
  return (
    <div >
      <h1 className='text-5xl my-10 text-center '>-----Best Buyer-----</h1>
      {bestBuyer.map(buyer => <div data-aos="flip-left" key={buyer._id} className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img className='w-1/2'
            src={buyer.photoURL}
            alt="Album" />
        </figure>
        <div className="card-body flex flex-col justify-center items-center">
          <h2>Worker Name: {buyer.name}</h2>
          <p>Worker Coin: {buyer.coin}</p>
        </div>
      </div>)}
    </div>
  )
}
