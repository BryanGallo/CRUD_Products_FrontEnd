import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./views/auth/Login";
import ForgetPassword from "./views/auth/ForgetPassword";
import NewPassword from "./views/auth/NewPassword";
function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<AuthLayout />}>
                        <Route index element={<Login />} />
                        <Route
                            path="forget-password"
                            element={<ForgetPassword />}
                        />
                        <Route path="new-password" element={<NewPassword />} />
                    </Route>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
