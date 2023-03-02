import { createBrowserRouter } from "react-router-dom";
import { Login } from "../components";
import { Auth } from "../components/Auth";
import { Home } from "../pages";
import { Error } from "../components/Error";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <Error page="Home" />
    },
    {
        element: <Auth />,
        children: [{
            path: "/login",
            element: <Login />
        }]
    }
])