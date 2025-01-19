import React from 'react'
import { FaAd, FaCalendar, FaHome, FaList, FaShoppingCart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import useAdmin from '../../Hooks/useAdmin';
import useBuyer from '../../Hooks/useBuyer';


export default function Navigation() {
    const [isAdmin] = useAdmin()
    const [isBuyer] = useBuyer()
  return (
            <div className="w-64 min-h-screen bg-sky-800">
                <ul className='menu p-2'>
                    {
                        isAdmin ?
                            <>
                                <li>
                                    <NavLink to='/dashboard/adminHome'><FaShoppingCart></FaShoppingCart> Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/manageUsers'><FaHome></FaHome>Manage Users</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/manageTasks'><FaCalendar></FaCalendar>Manage Task</NavLink>
                                   
                                </li>
                            </>
                            :
                            <>
                                {
                                    isBuyer ?
                                        <>
                                            <li>
                                                <NavLink to='/dashboard/buyerHome'><FaShoppingCart></FaShoppingCart>Home </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to='/dashboard/addNewTask'><FaHome></FaHome>Add New Tasks</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to='/dashboard/myTasks'><FaCalendar></FaCalendar>My Task's</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to='/dashboard/purchaseCoin'><FaAd></FaAd>Purchase Coin</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to='dashboard/review'><FaAd></FaAd>Payment History</NavLink>
                                            </li>
                                        </>
                                        :
                                        <>
                                            <li>
                                                <NavLink to='/dashboard/workerHome'><FaShoppingCart></FaShoppingCart>Home </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to='/dashboard/taskList'><FaHome></FaHome>Task List</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to='/dashboard/mySubmission'><FaCalendar></FaCalendar>My Submissions</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to='/dashboard/withdrawals'><FaAd></FaAd>Withdrawals</NavLink>
                                               
                                            </li>
                                        </>
                                }
                            </>
                    }
                </ul>
            </div>
  )
}
