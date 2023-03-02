import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    let [count, setCount] = useState(0)

    return (
        <AuthContext.Provider value={{ count, setCount }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;