import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    const user = true;
    const navLink = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='https://github.com/Programming-Hero-Web-Course4/b10a12-client-side-Md-Rabbi-Sarkar'>Join as Developer</Link></li>
        {user ?
                            <>
                            <li><Link to='/dashboard'>Dashboard</Link></li>
                            <li><Link to='/coin'>Coin</Link></li>
                            <li><Link to='/profile'>Profile</Link></li>
                            </>
                            :
                            <>
                            </>}
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
                <a className="btn btn-ghost text-xl">Bworker</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">
                {
                user? 
                <>
                <button className='btn'><Link to='/logout'>LogOut</Link></button>
                </>
                :
                <>
                <button className='mr-2 btn'><Link to='/login'>LogIn</Link></button>
                <button className='btn'><Link to='/register'>Register</Link></button></>
                }
            </div>
        </div>
    )
}
