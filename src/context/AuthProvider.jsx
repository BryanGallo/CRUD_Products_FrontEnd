import { createContext } from "react";

const AuthContext = createContext();
function AuthProvider({ children }) {
    const hola = "hola";
    return (
        <AuthContext.Provider
            value={{
                hola,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
export { AuthProvider };
export default AuthContext;
