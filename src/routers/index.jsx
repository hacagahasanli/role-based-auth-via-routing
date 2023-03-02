import { createBrowserRouter } from "react-router-dom";
import { Login, Auth, Error } from "../components";
import { Home } from "../pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <Error />
    },
    {
        element: <Auth />,
        children: [{
            path: "/login",
            element: <Login />
        }]
    }
])