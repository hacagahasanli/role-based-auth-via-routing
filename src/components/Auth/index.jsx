import { useContext } from "react"
import { Outlet, Navigate, useLocation } from "react-router-dom"
import { userType } from "../../constants"
import { AuthContext } from "../../context"
import { WarningMg } from "../../pages"

export const Auth = ({ roleCode }) => {
    const { authUser } = useContext(AuthContext)
    const location = useLocation()

    let isValid = authUser.role === roleCode;

    if (isValid) return <Outlet />

    if (!Object.entries(authUser).length)
        return <Navigate to="/login" state={{ from: location }} replace />;

    return <WarningMg role={userType[roleCode]} />
}