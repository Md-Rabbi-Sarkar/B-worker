import React from 'react'
import useAxiosSecure from '../../../Hooks/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import Wirhdraw from './Wirhdraw'
import { CiCoinInsert, CiCoins1 } from 'react-icons/ci'
import { GiCementShoes } from 'react-icons/gi'


export default function AdminHome() {
  const axiosSecure = useAxiosSecure()
  const { data: total = [] } = useQuery({
    queryKey: ['totalCount'],
    queryFn: async () => {
      const res = await axiosSecure.get('/admin/totalInfoCount')
      return res.data
    }
  })
  return (
    <div >
      <div className="w-full mb-10 mx-auto text-center stats shadow p-10">
        <div className="stat">
          <div className="stat-figure text-secondary">
          <CiCoins1 className='text-4xl'/>
          </div>
          <div className="stat-title">Coin</div>
          <div className="stat-value">{total.coin}</div>
          
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
          <GiCementShoes className='text-4xl' />
          </div>
          <div className="stat-title">Workers</div>
          <div className="stat-value">{total.worker}</div>
          
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
          <GiCementShoes className='text-4xl' />
          </div>
          <div className="stat-title">Buyer</div>
          <div className="stat-value">{total.buyer}</div>
          
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
          <CiCoinInsert className='text-4xl'/>
          </div>
          <div className="stat-title">Payment Coin</div>
          <div className="stat-value">{total.payment}</div>
         
        </div>
      </div>
      
      <div>
        <Wirhdraw></Wirhdraw>
      </div>
    </div>
  )
}
