import { useState, useEffect, createContext } from "react";
import clientAxios from "../config/clientAxios";

const AuthContext = createContext();
function AuthProvider({ children }) {
    const [auth, setAuth] = useState({});
    const [validate, setValidate] = useState(true);
    useEffect(() => {
        const authenticateUser = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    setValidate(false);
                    return;
                }
                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                };

                const { data } = await clientAxios("/api/auth/profile", config);
                setAuth(data.user);
            } catch (error) {
                setAuth({});
                console.log(error.response.data.msg);
            } finally {
                setValidate(false);
            }
        };
        authenticateUser();
    }, []);
    return (
        <AuthContext.Provider
            value={{
                auth,
                setAuth,
                validate,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
export { AuthProvider };
export default AuthContext;
