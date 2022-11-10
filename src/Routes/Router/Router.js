import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AddService from "../../pages/AddService/AddService";
import Blog from "../../pages/Blog/Blog";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import MyReview from "../../pages/MyReview/MyReview";
import Register from "../../pages/Register/Register";
import ServiceDetailsReview from "../../pages/ServiceDetailsReview/ServiceDetailsReview";
import ServicesPage from "../../pages/ServicesPage/ServicesPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path: '/services',
            loader : ()=> fetch("https://beauty-parlour-server-moutosi-raka.vercel.app/all-services"),
            element: <ServicesPage></ServicesPage>
        },
        {
            path: '/service/:id',
            element: <ServiceDetailsReview></ServiceDetailsReview>,
            loader: ({params})=> fetch(`https://beauty-parlour-server-moutosi-raka.vercel.app/service/${params.id}`)
        },
        {
            path: '/my-review',
            element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
        },
        {
            path: '/add-services',
            element: <PrivateRoute><AddService></AddService></PrivateRoute>
        },
        {
            path: '/blog',
            element: <Blog></Blog>
        }
       
    ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    }
])