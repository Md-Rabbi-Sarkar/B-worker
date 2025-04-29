import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxiosPublic from '../Hooks/useAxiosPublic'
import { Link } from 'react-router-dom';

export default function BestBuyer() {
  const axiosPublic = useAxiosPublic();
  const { data: bestBuyer = [] } = useQuery({
    queryKey: ['bestbuyer'],
    queryFn: async () => {
      const res = await axiosPublic.get('/bestBuyer')
      return res.data
    }
  })
  return (
    <div className=' p10'>
      <h1 className='text-5xl my-10 text-center underline p-5'>-Best Buyer-</h1>
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 justify-items-center'>
      
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
              <Link to={`singleBuyer/${buyer._id}`}><button className="btn btn-primary">Buyer Details</button></Link>
            </div>
          </div>
        </div>
        
      )}
    </div>
    </div>
  )
}
