import React from 'react'
import useAxiosSecure from '../../../Hooks/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import Wirhdraw from './Wirhdraw'
import { CiCoinInsert, CiCoins1 } from 'react-icons/ci'
import { GiCementShoes } from 'react-icons/gi'
const axiosSecure = useAxiosSecure()

export default function AdminHome() {
  const { data: total = [] } = useQuery({
    queryKey: ['totalCount'],
    queryFn: async () => {
      const res = await axiosSecure.get('/admin/totalInfoCount')
      // console.log(res.data)
      return res.data
    }
  })
  return (
    <div>
      <div className="stats shadow">
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
