import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import useAxiosSecure from '../../Hooks/useAxiosSecure'
import { AuthContext } from '../../Providers/AuthProvider'

export default function DashboardNav() {
    const axiosSecure = useAxiosSecure()
    const {user} = useContext(AuthContext)
    const {data: userInfo=[]}= useQuery({
        queryKey:['userInfo'],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/userInfo?email=${user.email}`)
            // console.log(res.data)
            return res.data
        }
    })
    const navLink = <>
        <div className='flex flex-col md:flex-row gap-3'>
            <li>Coin {userInfo.coin} </li>
            <img className='rounded-full w-6 h-6' src={user?.photoURL} alt="" />
            <li>{userInfo.role} </li>
            <li>{userInfo.name}</li>
            <li><img src="" alt="" /></li>
        </div>

    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLink}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl">Beworker</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/dashboard/notifications' className="btn">Notification</Link>
            </div>
        </div>
    )
}
