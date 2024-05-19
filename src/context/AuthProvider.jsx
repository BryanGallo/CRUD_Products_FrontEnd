import { useState, createContext } from "react";

const AuthContext = createContext();
function AuthProvider({ children }) {
    //*Para alamacenar la respuesta de autenticar usuarioController
    const [auth, setAuth] = useState({});
    return (
        <AuthContext.Provider
            value={{
                auth,
                setAuth,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
export { AuthProvider };
export default AuthContext;
