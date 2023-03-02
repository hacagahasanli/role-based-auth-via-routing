import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authorizedUsers } from "../../constants";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    let [authUser, setAuthUser] = useState({})

    const setUserValues = (userData) => setAuthUser(userData)


    return (
        <AuthContext.Provider value={{ authUser, setUserValues }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;