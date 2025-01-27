import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom'
import { AuthContext } from '../../../Providers/AuthProvider';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

export default function TaskDetails() {
    const { _id, taskTitle, taskDetail, requiredWorks, payableAmount, completionDate,
        submissionInfo,
        taskImageUrl, email, buyerName, status, name } = useLoaderData()
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    // console.log(taskDetail)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        const submitInfo = {
            taskId: _id,
            taskTitle,
            payableAmount,
            workerEmail: user.email,
            submissionDetails: data.submitionDetails,
            workerName: user.displayName,
            buyerName,
            buyerEmail: email,
            buyerName: name,
            requiredWorks: requiredWorks,
            submissionDate: new Date(),
            status: 'pending'
        }
        const res = await axiosSecure.post('/submitTask', submitInfo)
        if(res.data.acknowledged){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your submission has been granted , Plz wait until respons form Buyer",
                showConfirmButton: false,
                timer: 1500
              });
        }
    }
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={taskImageUrl}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Task Title: {taskTitle}</h2>
                <h2 className="card-title">Buyer Name: {name}</h2>
                <h2 className="card-title">Buyer Email: {email}</h2>
                <p>Task Details: {taskDetail}</p>
                <p>Required Workers: {requiredWorks}</p>
                <p>Payable Amount: {payableAmount}</p>
                <p>Submission Info: {submissionInfo}</p>
                <p>Status: {status}</p>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <textarea {...register("submitionDetails", { required: true })}
                        placeholder="Submission Text"
                        className="textarea textarea-bordered textarea-lg w-full max-w-xs"></textarea>
                    {errors.submitionDetails && <span>This field is required</span>}
                    <div className="card-actions">
                        <button className="btn btn-primary">Submit Now</button>
                    </div>
                </form>

            </div>


        </div>
    )
}
