import { createBrowserRouter } from "react-router-dom";
import { Login, Auth, Error } from "../components";
import { roles } from "../constants";
import { Home } from "../pages";
import { PageEntrance } from "../shared/PageEntrance";

const rolesCodes = {
    ADMIN: "0310",
    CUSTOMER: "1010",
    SELLER: "0303",
    ASSISTANT: "2703"
}

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
        element: <Auth roleCode={rolesCodes?.ADMIN} />,
        children: [{
            path: "/admin",
            element: <PageEntrance name={roles.ADMIN} />
        }]
    },
    {
        element: <Auth roleCode={rolesCodes?.ADMIN} />,
        children: [{
            path: "/customer",
            element: <PageEntrance name={roles.CUSTOMER} />
        }]
    },
    {
        element: <Auth roleCode={rolesCodes?.SELLER} />,
        children: [{
            path: "/seller",
            element: <PageEntrance name={roles.SELLER} />
        }]
    },
    {
        element: <Auth roleCode={rolesCodes?.ASSISTANT} />,
        children: [{
            path: "/assistant",
            element: <PageEntrance name={roles.ASSISTANT} />
        }]
    },
    {
        path: "*",
        element: <Error />
    }
])