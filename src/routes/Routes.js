import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Faq from "../components/FAQ/Faq";
import Login from "../components/form/Login";
import Register from "../components/form/Register";
import Home from "../components/Home/Home";
import CheckOutPage from "../components/TuitorialAll/CheckOutPage/CheckOutPage";
import DetailsPage from "../components/TuitorialAll/Tutorials/DetailsPage/DetailsPage";
import Tutorials from "../components/TuitorialAll/Tutorials/Tutorials";
import Main from "../layout/Main";
import PrivateRoutes from "./PrivateRoutes";

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
                path:'/tutorials/:id',
                loader: ({params})=> fetch(`http://localhost:5000/tutorials/${params.id}`),
                element: <DetailsPage></DetailsPage>
            },
            {
                path:'/tutorials/detailsPage/:id',
                loader: ({params})=> fetch(`http://localhost:5000/tutorials/detailsPage/${params.id}`),
                element: <PrivateRoutes><CheckOutPage /></PrivateRoutes>
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