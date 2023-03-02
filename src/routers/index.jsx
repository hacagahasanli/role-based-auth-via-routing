import { createBrowserRouter } from "react-router-dom";
import { Login, Auth, Error } from "../components";
import { Home } from "../pages";
import { PageEntrance } from "../shared/PageEntrance";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <Error />,
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        element: <Auth />,
        children: [{
            path: "/admin",
            element: <PageEntrance name="Admin" />
        }]
    },
    {
        element: <Auth />,
        children: [{
            path: "/customer",
            element: <PageEntrance name="Customer" />
        }]
    },
    {
        element: <Auth />,
        children: [{
            path: "/seller",
            element: <PageEntrance name="Seller" />
        }]
    },
    {
        element: <Auth />,
        children: [{
            path: "/assistant",
            element: <PageEntrance name="Assistant" />
        }]
    },
])