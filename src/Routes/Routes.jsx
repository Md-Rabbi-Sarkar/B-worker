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
import TaskList from "../Pages/Dashboard/Worker/TaskList";
import TaskDetails from "../Pages/Dashboard/Worker/TaskDetails";
import MySubmission from "../Pages/Dashboard/Worker/MySubmission";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers";
import ManageTasks from "../Pages/Dashboard/Admin/ManageTasks";
import AdminHome from "../Pages/Dashboard/Admin/AdminHome";
import BuyerHome from "../Pages/Dashboard/Buyer/BuyerHome";
import WorkerHome from "../Pages/Dashboard/Worker/WorkerHome";
import WithDrawal from "../Pages/Dashboard/Worker/WithDrawalForm";
import PurchaseCoin from "../Pages/Dashboard/Buyer/PurchaseCoin";
import CheckOutForm from "../Pages/Dashboard/Buyer/Component/CheckOutForm";
import Payment from "../Pages/Dashboard/Buyer/Payment";
import Notifications from "../Pages/Dashboard/Worker/Notifications";
import PaymentHistory from "../Pages/Dashboard/Buyer/PaymentHistory";
import Error from "../Pages/Error";
import Forbidden from "../Pages/Forbidden";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Singleservice from "../Pages/Singleservice";
import SingleWorker from "../Pages/SingleWorker";
import SingleBuyer from "../Pages/SingleBuyer";
export const router = createBrowserRouter([
    
   {
    path:'/',
    element:<Main></Main>,
    errorElement:<Error></Error>,
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
        },
        {
            path:'/about',
            element:<About></About>
        },
        {
            path:'/contact',
            element:<Contact></Contact>
        },
        {
            path:'/services/:id',
            element:<Singleservice></Singleservice>,
            loader:({params}) => fetch(`https://bworker-server.vercel.app/expensivtaskDetails/${params.id}`)
        },
        {
            path:'/singleWorker/:id',
            element:<SingleWorker></SingleWorker>,
            loader:({params})=>fetch(`https://bworker-server.vercel.app/singleWorker/${params.id}`)
        },
        {
            path:'/singleBuyer/:id',
            element:<SingleBuyer></SingleBuyer>,
            loader:({params})=>fetch(`https://bworker-server.vercel.app/singleBuyer/${params.id}`)
        }
    ]
   },
   {
    path:'/dashboard',
    element:<Dashboard></Dashboard>,
    errorElement:<Error></Error>,
    children:[
        //Admin Dashboard
        {
            path:'adminHome',
            element:<AdminHome></AdminHome>
        },
        {
            path:'manageUsers',
            element:<ManageUsers></ManageUsers>
        },
        {
            path:'manageTasks',
            element:<ManageTasks></ManageTasks>
        },
        // Buyer Dashboard -----
        {
            path:'buyerHome',
            element:<BuyerHome></BuyerHome>
        },
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
            loader:({params}) =>fetch(`https://bworker-server.vercel.app/updateTask/${params.id}`)
        },
        {
            path:'purchaseCoin',
            element:<PurchaseCoin></PurchaseCoin>
        },
        {
            path:'payment',
            element:<Payment></Payment>
        },
        {
            path:'paymentHistory',
            element:<PaymentHistory></PaymentHistory>
        },
        //Worker dashboard
        {
            path:'workerHome',
            element:<WorkerHome></WorkerHome>
        },
        {
            path:'taskList',
            element:<TaskList></TaskList>,
            loader:()=> fetch('https://bworker-server.vercel.app/taskList')
        },
        {
            path:'taskDetails/:id',
            element:<TaskDetails></TaskDetails>,
            loader:({params})=>fetch(`https://bworker-server.vercel.app/tsskDetails/${params.id}`)
        },
        {
            path:'mySubmission',
            element:<MySubmission></MySubmission>,
        },
        {
            path:'withdrawals',
            element:<WithDrawal></WithDrawal>
        },
        {
            path:'notifications',
            element:<Notifications></Notifications>
        },
        {
            path:'forbidden',
            element:<Forbidden></Forbidden>
        }
    ]
   }
])