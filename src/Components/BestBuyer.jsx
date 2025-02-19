import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxiosPublic from '../Hooks/useAxiosPublic'

export default function BestBuyer() {
  const axiosPublic = useAxiosPublic();
  const { data: bestBuyer = [] } = useQuery({
    queryKey: ['bestbuyer'],
    queryFn: async () => {
      const res = await axiosPublic.get('/bestBuyer')
      console.log(res.data)
      return res.data
    }
  })
  return (
    <div className='bg-stone-50 p10'>
      <h1 className='text-5xl my-10 text-center '>-----Best Buyer-----</h1>
    <div className='grid grid-cols-1 lg:grid-cols-2 space-y-5 justify-items-center'>
      
      {bestBuyer.map(buyer =>
        <div data-aos="flip-left" key={buyer._id} className="card bg-base-100 w-96 shadow-xl h-full">
          <figure className="px-10 pt-10">
            <img className="rounded-xl w-full h-48 object-cover"
              src={buyer.photoURL}
              alt="buyer photo"
            />
          </figure>
          <div className="card-body items-center text-center w-full">
            <h2 className="card-title">Buyer Name: {buyer.name}</h2>
            <p>Buyer Coin: {buyer.coin}</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buyer Details</button>
            </div>
          </div>
        </div>
        // <div data-aos="flip-left" key={buyer._id} className="card lg:card-side bg-base-100 shadow-xl">
        //   <figure>
        //     <img className='w-1/2'
        //       src={buyer.photoURL}
        //       alt="Album" />
        //   </figure>
        //   <div className="card-body flex flex-col justify-center items-center">
        //     <h2>Worker Name: {buyer.name}</h2>
        //     <p>Worker Coin: {buyer.coin}</p>
        //   </div>
        // </div>
      )}
    </div>
    </div>
  )
}
