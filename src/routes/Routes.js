import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Faq from "../components/FAQ/Faq";
import Login from "../components/form/Login";
import Register from "../components/form/Register";
import Home from "../components/Home/Home";
import Tutorials from "../components/TuitorialAll/Tutorials/Tutorials";
import Main from "../layout/Main";

 export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/tutorials',
                loader: ()=> fetch('http://localhost:5000/tutorials'),
                element: <Tutorials></Tutorials>
            },
            {
                path:'/faq',
                element: <Faq></Faq>
            },
            {
                path:'/blog',
                element: <Blog></Blog>
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