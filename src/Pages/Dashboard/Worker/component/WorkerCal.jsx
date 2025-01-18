import React, { useContext } from 'react'
import { AuthContext } from '../../../../Providers/AuthProvider'
import useAxiosSecure from '../../../../Hooks/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'

export default function WorkerCal() {
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const { data: workerCoin = [] } = useQuery({
        queryKey: ['workerCoin'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/workerCal?email=${user.email}`)
            // console.log(res.data)
            return res.data
        }
    })
    const withdrawalCoin = workerCoin.coin / 20
    // console.log(withdrawalCoin)
    return (
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
    )
}
