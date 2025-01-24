import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import useCoin from '../../../Hooks/useCoin';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

export default function Addtask() {
   
    const {user} = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const axiosSecure= useAxiosSecure()
    const [coin] = useCoin()
    const navigate = useNavigate()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit =async (data) => {
        console.log(data)
        const totalPayableAmount = data.requiredWorks*data.payableAmount
        console.log(totalPayableAmount)
        if(coin.coins <totalPayableAmount){
             Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You have no availavl coin Plz purchess coin",
             
              });
            return navigate('/userCoin')
        }
        const imageFile={image: data.taskImageUrl[0]}
        const res = await axiosPublic.post(image_hosting_api,imageFile,{
            headers:{
                'Content-Type':'multipart/form-data'
            }
        })
        console.log(res.data)
        if(res.data.success){
            const taskInfo = {
                email:user.email,
                name:user.displayName,
                taskTitle:data.taskTitle,
                taskDetail: data.taskDetail,
                requiredWorks:data.requiredWorks,
                payableAmount:data.payableAmount,
                completionDate:data.completionDate,
                submissionInfo:data.submissionInfo,
                taskImageUrl:res.data.data.display_url,
                buyerName:user.displayName,
                status:'pending'
            }
            const tasksRes = await axiosSecure.post('/taskItems',taskInfo)
            console.log(tasksRes.data)
        }
        
    };
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Plz Add Task!</h1>
                    <p className="py-6">
                    Our platform makes it simple to post tasks with a user-friendly interface. Just describe the task, set the price, and wait for results. It's that easy!
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Task Title</span>
                            </label>
                            <input type="text" {...register("taskTitle", { required: true })} placeholder="Task Title" className="input input-bordered" required />
                            {errors.taskTitle && <span className='text-red-700'>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Task Detail</span>
                            </label>
                            <input type="text" {...register("taskDetail", { required: true })} placeholder="Task Detail" className="input input-bordered" required />
                            {errors.taskDetail && <span className='text-red-700'>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Required Works</span>
                            </label>
                            <input type="number" {...register("requiredWorks", { required: true })} placeholder="Required Works" className="input input-bordered" required />
                            {errors.requiredWorks && <span className='text-red-700'>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Payable Account</span>
                            </label>
                            <input type="number" {...register("payableAmount", { required: true })} placeholder="Payable Account" className="input input-bordered" required />
                            {errors.payableAmount && <span className='text-red-700'>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Completion Date</span>
                            </label>
                            <input type="date" {...register("completionDate", { required: true })} placeholder="Completion Date" className="input input-bordered" required />
                            {errors.completionDate && <span className='text-red-700'>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Submission Info  </span>
                            </label>
                            <input type="text" {...register("submissionInfo", { required: true })} placeholder="Submission Info" className="input input-bordered" required />
                            {errors.submissionInfo && <span className='text-red-700'>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Task Image URL</span>
                            </label>
                            <input type="file" {...register("taskImageUrl", { required: true })} placeholder="Task Image URL" className="input input-bordered" required />
                            {errors.taskImageUrl && <span className='text-red-700'>This field is required</span>}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Add Task</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
