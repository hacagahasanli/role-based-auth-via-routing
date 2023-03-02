import { createBrowserRouter } from "react-router-dom";
import { Login } from "../components";
import { Home } from "../pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    }
])