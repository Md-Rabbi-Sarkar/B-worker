import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Providers/AuthProvider'
import useCoin from '../Hooks/useCoin'
import Swal from 'sweetalert2'

export default function Nav() {
    const {user,logOut} =useContext(AuthContext)
    const [theme, setTheme] = useState("light")
    const [coin] =useCoin()
    const navigate = useNavigate()
    const handleLogOut =() =>{
        logOut()
        .then(()=>{})
        .catch(error=>Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });)
        navigate('/')
    }
    const navLink = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='https://github.com/Programming-Hero-Web-Course4/b10a12-client-side-Md-Rabbi-Sarkar'>Join as Developer</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        {user ?
                            <>
                            <li><Link to='/dashboard'>Dashboard</Link></li>
                            <li><Link to='/userCoin'>Coin ${coin.coins}</Link></li>
                            <li><Link to='/profile'>Profile</Link></li>
                            </>
                            :
                            <>
                            </>}
    </>
      useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
        document.documentElement.setAttribute("data-theme", savedTheme);
      }, []);
      const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
      };
    return (
        <div className="navbar text-white bg-slate-800 border-2 fixed top-0 z-10">
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
                <Link className="btn btn-ghost text-xl ml-5">Bworker</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="theme-toggle flex items-end ml-5">
        <li className='list-none ' onClick={toggleTheme}>
          {theme === "dark" ? "🌞" : "🌙"}
        </li>
      </div>
            <div className="navbar-end mr-5">
                {
                user? 
                <>
                <li onClick={handleLogOut} className='list-none'><Link to='/logout'>LogOut</Link></li>
                </>
                :
                <>
                <li className='mr-5 list-none'><Link to='/login'>LogIn</Link></li>
                <li className='list-none'><Link to='/register'>Register</Link></li></>
                }
            </div>
        </div>
    )
}
