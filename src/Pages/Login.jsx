import React, { useContext } from 'react'
import { useForm } from "react-hook-form";
import { AuthContext } from '../Providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';

export default function Login() {
    const {signIn,googleSignIn} =useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from=location.state?.from?.pathname ||'/'
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data =>{
        console.log(data)
        signIn(data.email,data.password)
        .then(result =>{
            const user = result.user 
            console.log(user)
            navigate(from,{replace:true})
        })
    };
    const handleGoogleSignIn =() =>{
        googleSignIn()
        .then(result=>{
            const user = result.user
            console.log(user)
            navigate(from,{replace:true})
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
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"  {...register("email", { required: true })} placeholder="email" className="input input-bordered" required />
                            {errors.name && <span>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", { required: true })} placeholder="password" className="input input-bordered" required />
                            {errors.password && <span>This field is required</span>}
                            
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <button onClick={handleGoogleSignIn} className='btn btn-primary'><FaGoogle></FaGoogle>Google</button>
                    
                </div>
            </div>
        </div>
    )
}
