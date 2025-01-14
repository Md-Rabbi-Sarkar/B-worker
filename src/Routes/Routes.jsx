import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home";
import Dashboard from "../Layouts/Dashboard";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

export const router = createBrowserRouter([
   {
    path:'/',
    element:<Main></Main>,
    children: [
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'login',
            element:<Login></Login>
        },
        {
            path:'register',
            element:<Register></Register>
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