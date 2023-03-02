import { createBrowserRouter } from "react-router-dom";
import { Login } from "../components";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    }
])