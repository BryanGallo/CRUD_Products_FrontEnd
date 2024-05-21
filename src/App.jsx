import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import AuthLayout from "./layouts/AuthLayout";
import RouteProtect from "./layouts/RouteProtect";
import { ProductProvider } from "./context/ProductProvider";
import Login from "./views/auth/Login";
import ForgetPassword from "./views/auth/ForgetPassword";
import NewPassword from "./views/auth/NewPassword";
import Products from "./views/product/Products";
function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <ProductProvider>
                    <Routes>
                        <Route path="/" element={<AuthLayout />}>
                            <Route index element={<Login />} />
                            <Route
                                path="forget-password"
                                element={<ForgetPassword />}
                            />
                            <Route
                                path="new-password"
                                element={<NewPassword />}
                            />
                        </Route>
                        <Route path="/products" element={<RouteProtect />}>
                            <Route index element={<Products />} />
                        </Route>
                    </Routes>
                </ProductProvider>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
