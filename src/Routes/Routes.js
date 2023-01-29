import { createBrowserRouter } from "react-router-dom";
import Login from "../components/auth/Login";
import Login2 from "../components/auth/Login2";
import Register from "../components/auth/Register";
import Home from "../components/Home/Home";
import Table from "../components/Home/Table";
import Main from "../components/Main";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
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
                path:'/login2',
                element: <Login2></Login2>
            },
            {
                path:'/table',
                element: <Table></Table>
            }
        ]
    }
])