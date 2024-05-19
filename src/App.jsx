import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./views/auth/Login";
import ForgetPassword from "./views/auth/ForgetPassword";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Login />} />
                    <Route
                        path="forget-password"
                        element={<ForgetPassword />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
