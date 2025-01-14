import React from 'react'
import DashboardNav from '../Components/Dashboard/DashboardNav';
import Footer from '../Components/Footer';
import Navigation from '../Components/Dashboard/Navigation';
import { Outlet } from 'react-router-dom';

export default function Dashboard() {
    
    return (
        <div>
            <DashboardNav></DashboardNav>
            <div className='flex'>
                <Navigation></Navigation>
                <div className='flex-1 p-8'>
                <Outlet></Outlet>
            </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
