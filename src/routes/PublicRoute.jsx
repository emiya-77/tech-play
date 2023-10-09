import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import EventDetail from "../pages/EventDetail/EventDetail";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AboutUs from "../pages/AboutUs/AboutUs";
import PrivateRoute from "./PrivateRoute";
import Discover from "../pages/Discover/Discover";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/data/service.json')
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/events/:id',
                element: <PrivateRoute>
                    <EventDetail></EventDetail>
                </PrivateRoute>,
                loader: () => fetch('/data/service.json')
            },
            {
                path: '/discover',
                element: <Discover></Discover>,
                loader: () => fetch('/data/discover.json')
            },
            {
                path: '/about',
                element: <AboutUs></AboutUs>
            }
        ]
    }
])

export default router;