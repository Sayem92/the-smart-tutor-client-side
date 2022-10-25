import { createBrowserRouter } from "react-router-dom";
import Login from "../components/form/Login";
import Register from "../components/form/Register";
import Home from "../components/Home/Home";
import Main from "../layout/Main";

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
            }
        ]
    }
])