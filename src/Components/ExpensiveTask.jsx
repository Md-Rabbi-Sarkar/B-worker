import React, { useState } from 'react'
import useAxiosPublic from '../Hooks/useAxiosPublic'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'

export default function ExpensiveTask() {
    const axiosPublic = useAxiosPublic()
    const [singleTask,setSingleTask] = useState()
    const {data: expensivTask=[]} = useQuery({
        queryKey:['expensivTask'],
        queryFn: async() =>{
            const res = await axiosPublic.get('/expensivTask')
            console.log(res.data)
            return res.data
        }
    })
  return (
    <div >
      <h1 className='text-5xl text-center my-10'>-----Expensiv Task-----</h1>
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 justify-items-center' >
      
      {expensivTask.map(task => 
      <div data-aos="flip-left" key={task._id} className="card bg-base-100 w-96 shadow-xl h-full">
      <figure className="px-10 pt-10">
        <img className="rounded-xl w-full h-48 object-cover"
          src={task.taskImageUrl}
          alt="buyer photo"
        />
      </figure>
      <div className="card-body items-center text-center w-full">
        <h2 className="card-title">Task Title: {task.taskTitle}</h2>
        <p>Payable Amount: {task.payableAmount}</p>
        <div className="card-actions">
        <Link to={`services/${task._id}`}><button className="btn btn-primary">Task Details</button></Link>  
        </div>
      </div>
    </div>
      // <div data-aos="flip-left" key={task._id} className="card lg:card-side bg-base-100 shadow-xl">
      //   <figure>
      //     <img className='w-1/2'
      //       src={task.taskImageUrl}
      //       alt="Album" />
      //   </figure>
      //   <div className="card-body flex flex-col justify-center items-center">
      //     <h2>Task Title: {task.taskTitle}</h2>
      //     <p>Payable Amount: {task.payableAmount}</p>
      //   </div>
      // </div>
    )}
    </div>
    </div>
  )
}
