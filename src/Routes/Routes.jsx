import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home";
import Dashboard from "../Layouts/Dashboard";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Addtask from "../Pages/Dashboard/Buyer/Addtask";
import UserCoin from "../Pages/UserCoin";
import Mytasks from "../Pages/Dashboard/Buyer/Mytasks";
import UpdateTask from "../Pages/Dashboard/Buyer/UpdateTask";

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
        },
        {
            path:'/userCoin',
            element:<UserCoin></UserCoin>
        }
    ]
   },
   {
    path:'/dashboard',
    element:<Dashboard></Dashboard>,
    children:[
        // Buyer Dashboard -----
        {
            path:'addNewTask',
            element:<Addtask></Addtask>
        },
        {
            path:'myTasks',
            element:<Mytasks></Mytasks>
        },
        {
            path:'updateTask/:id',
            element:<UpdateTask></UpdateTask>,
            loader:({params}) =>fetch(`http://localhost:5000/updateTask/${params.id}`)
        }
    ]
   }
])