import React, { useContext } from 'react'
import { AuthContext } from '../../../Providers/AuthProvider'
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../../../Hooks/useAxiosSecure'

export default function PaymentHistory() {
    const {user} = useContext(AuthContext)
    const axiosSecuire = useAxiosSecure()
    const {data: paymentHistory =[]}= useQuery({
        queryKey:['paymentHistory'],
        queryFn: async ()=>{
            const res = await axiosSecuire.get(`/paymentHistory?email=${user.email}`)
            console.log(res.data)
            return res.data
        }
    })
  return (
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Date</th>
        <th>Transaction ID</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {paymentHistory.map((history,index)=><tr key={history._id}>
        <th>{index +1}</th> 
        <td>{history.data}</td>
        <td>{history.transactionId}</td>
        <td>{history.price}</td>
      </tr>)}
      
    </tbody>
  </table>
</div>
  )
}
