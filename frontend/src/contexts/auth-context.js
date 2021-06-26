import { createContext, useContext, useState } from "react";


const AuthContext = createContext()

function AuthProvider(props) {
    const [isLogged, setIsLogged] = useState(false)

    return (
        <AuthContext.Provider value={{ isLogged, setIsLogged }} {...props} />
    )
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }