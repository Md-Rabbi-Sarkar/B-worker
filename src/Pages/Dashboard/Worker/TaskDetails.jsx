import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom'
import { AuthContext } from '../../../Providers/AuthProvider';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

export default function TaskDetails() {
    const {_id,taskTitle,taskDetail,requiredWorks,payableAmount,completionDate,
        submissionInfo,
        taskImageUrl,email,buyerName,status,name} = useLoaderData()
    const {user} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    // console.log(taskDetail)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit =async (data) => { 
        const submitInfo ={
            taskId:_id,
            taskTitle,
            payableAmount,
            workerEmail:user.email,
            submissionDetails:data.submitionDetails,
            workerName:user.displayName,
            buyerName,
            buyerEmail:email,
            buyerName:name,
            requiredWorks: requiredWorks,
            submissionDate:new Date(),
            status:'pending'
        }
        const res = await axiosSecure.post('/submitTask',submitInfo)
        console.log(res.data)

    }
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <textarea {...register("submitionDetails", { required: true })}
                    placeholder="Submition Info"
                    className="textarea textarea-bordered textarea-lg w-full max-w-xs"></textarea>
                    {errors.submitionDetails && <span>This field is required</span>}
           <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </form>
             
            </div>
            
            
        </div>
    )
}
