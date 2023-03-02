import { createContext, useState } from "react";

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