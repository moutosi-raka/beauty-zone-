import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AddService from "../../pages/AddService/AddService";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import MyReview from "../../pages/MyReview/MyReview";
import Register from "../../pages/Register/Register";
import ServiceDetailsReview from "../../pages/ServiceDetailsReview/ServiceDetailsReview";
import ServicesPage from "../../pages/ServicesPage/ServicesPage";


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
            element: <MyReview></MyReview>
        },
        {
            path: '/add-services',
            element: <AddService></AddService>
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