import React from 'react'
import { useForm } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

export default function UpdateTask() {
    const task = useLoaderData()
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()
    // console.log(task)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit =async (data) =>{
        // console.log(data)
        const updateInfo ={
        taskTitle: data.taskTitle,
        taskDetail: data.taskDetail,
        submissionInfo: data.submissionInfo
    }
    const res=await axiosSecure.put(`/updateTask/${task._id}`,updateInfo)
        // console.log(res.data)
        if(res.data.modifiedCount>0){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your have successfully update task",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/dashboard/myTasks')
        }
    }
    
   
  return (
    <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Task Title</span>
                            </label>
                            <input type="text" defaultValue={task.taskTitle} {...register("taskTitle", { required: true })} placeholder="Task Title" className="input input-bordered" required />
                            {errors.taskTitle && <span className='text-red-700'>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Task Detail</span>
                            </label>
                            <input type="text" defaultValue={task.taskDetail} {...register("taskDetail", { required: true })} placeholder="Task Detail" className="input input-bordered" required />
                            {errors.taskDetail && <span className='text-red-700'>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Submission Info  </span>
                            </label>
                            <input type="text" defaultValue={task.submissionInfo} {...register("submissionInfo", { required: true })} placeholder="Submission Info" className="input input-bordered" required />
                            {errors.submissionInfo && <span className='text-red-700'>This field is required</span>}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Update Task</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
  )
}
