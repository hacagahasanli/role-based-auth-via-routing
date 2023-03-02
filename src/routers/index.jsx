import { createBrowserRouter } from "react-router-dom";
import { Login } from "../components";
import { Auth } from "../components/Auth";
import { Home } from "../pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,

    },
    {
        element: <Auth />,
        children: [{
            path: "/login",
            element: <Login />
        }]
    }
])