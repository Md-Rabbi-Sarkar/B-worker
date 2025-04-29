import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../Providers/AuthProvider'
import useAxiosPublic from '../../../Hooks/useAxiosPublic'
import useAxiosSecure from '../../../Hooks/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'

export default function MySubmission() {
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const [itemsPerPage, setItemsPerpage] =useState(5)
    const [currentPage, setCurrentPage] = useState(0)
    const {data:submissionTask =[]}=useQuery({
      queryKey:['submitTask',user?.email,currentPage,itemsPerPage],
      queryFn: async()=>{
          const res = await axiosSecure.get(`/submitTask?email=${user.email}&page=${currentPage}&size=${itemsPerPage}`)
         return res.data
      }
  })
    
    const totaldata = submissionTask.length
    const numberOfPage = Math.ceil(totaldata/itemsPerPage)
    const pages = [ ...Array(numberOfPage).keys()]
    const handleItemsPerPage =e =>{
      const val = parseInt(e.target.value)
      setItemsPerpage(val)
      setCurrentPage(0)
    }
    const handlePre =() =>{
      if(currentPage >0 ){
        setCurrentPage(currentPage-1)
      }
    }
    const handleNext =()=>{
      if(currentPage<pages.length -1){
        setCurrentPage(currentPage + 1)
      }
    }

    return (
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Task Title</th>
        <th>Date</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {submissionTask.map((task,index)=><tr key={index} >
        <th>{index+1}</th>
        <td>{task.taskTitle}</td>
        <td>{task.submissionDate}</td>
        <td>{task.status}</td>
      </tr>)}
      
      
    </tbody>
  </table>
  <div className='absolute bottom-5 left-1/2'>
  <button onClick={handlePre} className="join-item btn btn-outline">Previous</button>
    {pages.map(page=>  <button className={currentPage ===page ?'join-item btn btn-active' :'join-item btn'} key={page} onClick={()=>setCurrentPage(page)}>{page}</button>)}
    <button onClick={handleNext} className="join-item btn btn-outline">Next</button>
        <select defaultValue={itemsPerPage} onChange={handleItemsPerPage} name="" id="">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="40">40</option>
        </select>
        
  </div>
</div>
    )
}
