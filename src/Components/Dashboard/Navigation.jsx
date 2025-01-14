import React from 'react'
import { FaAd, FaCalendar, FaHome, FaList, FaShoppingCart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
    const isAdmin = false;
    const isBuyer = false;
  return (

            <div className="w-64 min-h-screen bg-orange-400">
                <ul className='menu p-2'>
                    {
                        isAdmin ?
                            <>
                                <li>

                                    <NavLink to='/dashboard/adminHome'><FaShoppingCart></FaShoppingCart> Home</NavLink>
                                </li>
                                <li>

                                    <NavLink to='/dashboard/additems'><FaHome></FaHome>Manage Users</NavLink>
                                </li>
                                <li>

                                    <NavLink to='/dashboard/manageItems'><FaCalendar></FaCalendar>Manage Task</NavLink>
                                </li>
                                
                            </>
                            :
                            <>
                                {
                                    isBuyer ?
                                        <>
                                            <li>

                                                <NavLink to='dashboard/cart'><FaShoppingCart></FaShoppingCart>Home </NavLink>
                                            </li>
                                            <li>

                                                <NavLink to='/dashboard/userHome'><FaHome></FaHome>Add New Tasks</NavLink>
                                            </li>
                                            <li>

                                                <NavLink to='/dashboard/paymentsHistory'><FaCalendar></FaCalendar>My Task's</NavLink>
                                            </li>
                                            <li>

                                                <NavLink to='dashboard/review'><FaAd></FaAd>Pruchase Coin</NavLink>
                                            </li>
                                            
                                        </>
                                        :
                                        <>
                                            <li>

                                                <NavLink to='dashboard/cart'><FaShoppingCart></FaShoppingCart>Home </NavLink>
                                            </li>
                                            <li>

                                                <NavLink to='/dashboard/userHome'><FaHome></FaHome>Task List</NavLink>
                                            </li>
                                            <li>

                                                <NavLink to='/dashboard/paymentsHistory'><FaCalendar></FaCalendar>My Submissions</NavLink>
                                            </li>
                                            <li>

                                                <NavLink to='dashboard/review'><FaAd></FaAd>Withdrawals</NavLink>
                                            </li>
                                            
                                        </>
                                }

                            </>
                    }
                </ul>
            </div>
            

  )
}
