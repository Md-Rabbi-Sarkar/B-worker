import React, { useContext } from 'react'
import { useForm } from "react-hook-form";
import { AuthContext } from '../Providers/AuthProvider';
import { Result } from 'postcss';
import { useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import useAxiosPublic from '../Hooks/useAxiosPublic';

export default function Register() {
    const {createUser,updateUserProfile,googleSignIn} = useContext(AuthContext)
    const navigate=useNavigate()
    // const {user:loginuser} = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data =>{
        console.log(data)
        createUser(data.email,data.password)
        .then(result =>{
            const user = result.user
            console.log(user)
            navigate('/')
            updateUserProfile(data.name,data.photoUrl)
            .then(()=>{
                const userInfo ={
                    name:data.name,
                    email: data.email,
                    role:data.role,
                    photoUrl:user.photoURL
                }
                axiosPublic.post('/users',userInfo)
                .then(res=>{
                    if(res.data.insertedId){
                        console.log('user added database')
                        reset()
                        navigate('/')
                    }
                })
            })
            .catch(error =>console.log(error))
        })
    };
    const handleGoogleSignIn =() =>{
        googleSignIn()
        .then(result=>{
            const user = result.user
            console.log(user)
            navigate('/')
        })
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
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} placeholder="name" className="input input-bordered" required />
                            {errors.name && <span>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url" {...register("photoUrl", { required: true })} placeholder="photoUrl" className="input input-bordered" required />
                            {errors.photoUrl && <span>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Role</span>
                            </label>
                            <select defaultValue={'default'} {...register("role")}
                                className="select select-bordered w-full ">
                                <option disabled value={'default'}>Select ROle</option>
                                <option value="worker">Worker</option>
                                <option value="buyer">Buyer</option>
                            </select>
                            {errors.photoUrl && <span>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" required />
                            {errors.email && <span>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", { required: true })} placeholder="password" className="input input-bordered" required />
                            {errors.password && <span>This field is required</span>}
                            
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <button onClick={handleGoogleSignIn} className='btn btn-primary'><FaGoogle></FaGoogle>Google</button>
                </div>
            </div>
        </div>
    )
}
