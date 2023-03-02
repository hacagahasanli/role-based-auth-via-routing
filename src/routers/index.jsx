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
        element: <Auth roleCode={roles.ADMIN.role_code} />,
        children: [{
            path: "/admin",
            element: <PageEntrance name={roles.ADMIN.role} />
        }]
    },
    {
        element: <Auth roleCode={roles.CUSTOMER.role_code} />,
        children: [{
            path: "/customer",
            element: <PageEntrance name={roles.CUSTOMER.role} />
        }]
    },
    {
        element: <Auth roleCode={roles.SELLER.role_code} />,
        children: [{
            path: "/seller",
            element: <PageEntrance name={roles.SELLER.role} />
        }]
    },
    {
        element: <Auth roleCode={roles.ASSISTANT.role_code} />,
        children: [{
            path: "/assistant",
            element: <PageEntrance name={roles.ASSISTANT.role} />
        }]
    },
    {
        path: "*",
        element: <Error />
    }
])