import { useState, useEffect, createContext } from "react";

const AuthContext = createContext();
function AuthProvider({ children }) {
    //*Para alamacenar la respuesta de autenticar usuarioController
    const [auth, setAuth] = useState({});
    useEffect(() => {
        const authenticateUser = async () => {
            const token = localStorage.getItem("token");
            if (!token) {
                return;
            }
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            };

            try {
                const { data } = await clienteAxios("/api/auth/profile", config);
                setAuth(data.user);
            } catch (error) {
                setAuth({});
                console.log(error.response.data.msg);
            }
        };
        authenticateUser();
    }, []);
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
