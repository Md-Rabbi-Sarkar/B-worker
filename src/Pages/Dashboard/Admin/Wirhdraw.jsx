import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxiosSecure from '../../../Hooks/useAxiosSecure'

export default function Wirhdraw() {
    const axiosSecuire = useAxiosSecure()
    const {data: withdraw =[], refetch}=useQuery({
        queryKey:['withdraw'],
        queryFn: async () =>{
            const res = await axiosSecuire.get('/withdraw')
            //  console.log(res.data)
            return res.data
        }
    })
    const handleClick =async(id,email,withdrawCoin)=>{
        const info = {
            email:email,
            workerCoin:withdrawCoin
        }
        const res = await axiosSecuire.put(`/withdrawApproved/${id}`,info)
        console.log(res.data)

        refetch()
    }
  return (
    <div className="overflow-x-auto mt-10">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Amount</th>
        <th>status</th>
        <th>action</th>
      </tr>
    </thead>
    <tbody>
      {withdraw.map((item,index)=><tr key={item._id}>
        <th>{index+1}</th>
        <th>{item.workerName}</th>
        <td>${item.withdrawAmounts}</td>
        <td>{item.status}</td>
        <td onClick={()=>handleClick(item._id,item.workerEmail,item.withdrawCoin)}>Approve</td>
      </tr>)}
      
      
    </tbody>
  </table>
</div>
  )
}
