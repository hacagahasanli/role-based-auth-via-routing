import { createBrowserRouter } from "react-router-dom";
import { Login, Auth, Error } from "../components";
import { roles } from "../constants";
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
            element: <PageEntrance name={roles.ADMIN} />
        }]
    },
    {
        element: <Auth />,
        children: [{
            path: "/customer",
            element: <PageEntrance name={roles.ADMIN} />
        }]
    },
    {
        element: <Auth />,
        children: [{
            path: "/seller",
            element: <PageEntrance name={roles.SELLER} />
        }]
    },
    {
        element: <Auth />,
        children: [{
            path: "/assistant",
            element: <PageEntrance name={roles.ASSISTANT} />
        }]
    },
])