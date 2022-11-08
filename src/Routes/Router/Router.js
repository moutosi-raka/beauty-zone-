import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
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