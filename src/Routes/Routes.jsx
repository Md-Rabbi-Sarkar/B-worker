import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home";
import Dashboard from "../Layouts/Dashboard";

export const router = createBrowserRouter([
   {
    path:'/',
    element:<Main></Main>,
    children: [
        {
            path:'/',
            element:<Home></Home>
        }
    ]
   },
   {
    path:'dashboard',
    element:<Dashboard></Dashboard>,
    children:[
        
    ]
   }
])