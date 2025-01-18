
import { useContext } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import WorkerCal from './component/WorkerCal'
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';

export default function WithDrawalForm() {
  const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const { register, handleSubmit,watch,reset, formState: { errors } } = useForm();
    const { data: workerCoin = [] } = useQuery({
        queryKey: ['workerCoin'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/workerCal?email=${user.email}`)
            // console.log(res.data)
            return res.data
        }
    })
    const withdrawalCoin = workerCoin.coin / 20
  console.log(withdrawalCoin)
 const see = watch('withdrawCoin')

  const withdrawAmounts =see / 20
  console.log(see,withdrawAmounts)
 
  const onSubmit =async data =>{
    console.log(data)
    const info = {
      workerEmail:user.email,
      workerName:user.displayName,
       withdrawCoin: data.withdrawCoin,
       withdrawAmounts:withdrawAmounts,
       paymentSystem:data.paymentSystem,
       accountNumber:data.accountNumber,
       withdrawData: new Date(),
       status:'pending'
      }
      const res = await axiosSecure.post ('/withdrawRequest',info)
      console.log(res.data)
    }
  

  return (
    <div>
      <div>
      <div className="stats bg-primary text-primary-content">
            <div className="stat">
                <div className="stat-title">Account balance</div>
                <div className="stat-value">{workerCoin.coin}</div>
                <div className="stat-actions">
                    <button className="btn btn-sm btn-success">Add funds</button>
                </div>
            </div>

            <div className="stat">
                <div className="stat-title">WithDrawals balance</div>
                <div className="stat-value">{withdrawalCoin}</div>
                <div className="stat-actions">
                    <button className="btn btn-sm">Withdrawal</button>
                    <button className="btn btn-sm">Deposit</button>
                </div>
            </div>
        </div>
      </div>
      <div>
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
                                        <span className="label-text">Withdraw Coin</span>
                                    </label>
                                    <input type="number" {...register("withdrawCoin", { required: true })} placeholder="coin" className="input input-bordered"  />
                                    {/* {errors.name && <span>This field is required</span>} */}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Withdraw Amount</span>
                                    </label>
                                    <input type="number" value={withdrawAmounts} disabled {...register("withdrawAmount")} placeholder="amount" className="input input-bordered" />
                                    {/* {errors.photoUrl && <span>This field is required</span>} */}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Payment SYstem</span>
                                    </label>
                                    <select defaultValue={'default'} {...register("paymentSystem")}
                                        className="select select-bordered w-full ">
                                        <option disabled value={'default'}>Select System</option>
                                        <option value="bkash">Bkash</option>
                                        <option value="nagod">Nagod</option>
                                        <option value="rocket">Rocked</option>
                                    </select>
                                    {/* {errors.photoUrl && <span>This field is required</span>} */}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Account Number</span>
                                    </label>
                                    <input type="number" {...register("accountNumber", { required: true })} placeholder="account number" className="input input-bordered"  />
                                    {/* {errors.email && <span>This field is required</span>} */}
                                </div>
                                
                                <div className="form-control mt-6">
                                  { withdrawalCoin <10?<p>Insufficnent balance</p>:<button className="btn btn-primary">WithDraw</button>}
                                    
                                </div>
                            </form>
                            
                        </div>
                    </div>
                </div>
      </div>
      </div>

  )
}

