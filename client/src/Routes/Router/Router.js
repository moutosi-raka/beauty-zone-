import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AddService from "../../pages/AddService/AddService";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import MyReview from "../../pages/MyReview/MyReview";
import Register from "../../pages/Register/Register";
import ServiceDetailsReview from "../../pages/ServiceDetailsReview/ServiceDetailsReview";
import ServicesPage from "../../pages/ServicesPage/ServicesPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DisplayError from "../../pages/Shared/DisplayError/DisplayError";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path: '/services',
            loader : ()=> fetch("http://localhost:5000/all-services"),
            element: <ServicesPage></ServicesPage>
        },
        {
            path: '/service/:id',
            element: <ServiceDetailsReview></ServiceDetailsReview>,
            loader: ({params})=> fetch(`http://localhost:5000/service/${params.id}`)
        },
        {
            path: '/my-review',
            element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
        },
        {
            path: '/add-services',
            element: <PrivateRoute><AddService></AddService></PrivateRoute>
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