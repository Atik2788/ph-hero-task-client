import { createBrowserRouter } from "react-router-dom";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import Home from "../components/Home/Home";
import MainSec from "../components/Home/MainSec";
import Table from "../components/Home/Table/Table";
import Main from "../components/Main";
import NotFound from "../NotFound";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element: <MainSec></MainSec>
            },
            {
                path:'/home',
                element: <Home></Home>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path:'/table',
                element: <Table></Table>
            }
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>

    }
])