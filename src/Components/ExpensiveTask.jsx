import React from 'react'
import useAxiosPublic from '../Hooks/useAxiosPublic'
import { useQuery } from '@tanstack/react-query'

export default function ExpensiveTask() {
    const axiosPublic = useAxiosPublic()
    const {data: expensivTask=[]} = useQuery({
        queryKey:['expensivTask'],
        queryFn: async() =>{
            const res = await axiosPublic.get('/expensivTask')
            console.log(res.data)
            return res.data
        }
    })
  return (
    <div className='mt-5' >
      <h1 className='text-5xl my-10 text-center '>-----Expensiv Task-----</h1>
      {expensivTask.map(task => <div data-aos="flip-left" key={task._id} className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img className='w-1/2'
            src={task.taskImageUrl}
            alt="Album" />
        </figure>
        <div className="card-body flex flex-col justify-center items-center">
          <h2>Task Title: {task.taskTitle}</h2>
          <p>Payable Amount: {task.payableAmount}</p>
        </div>
      </div>)}
    </div>
  )
}
