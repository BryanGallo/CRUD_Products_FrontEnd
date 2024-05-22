import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import AuthLayout from "./layouts/AuthLayout";
import RouteProtect from "./layouts/RouteProtect";
import { ProductProvider } from "./context/ProductProvider";
import Login from "./views/auth/Login";
import ForgetPassword from "./views/auth/ForgetPassword";
import NewPassword from "./views/auth/NewPassword";
import Products from "./views/product/Products";
import PageNotFound from "./views/404/PageNotFound";
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
                                path="forget-password/:token"
                                element={<NewPassword />}
                            />
                        </Route>
                        <Route path="/products" element={<RouteProtect />}>
                            <Route index element={<Products />} />
                        </Route>
                        <Route element={<AuthLayout />}>
                            <Route path="*" element={<PageNotFound />} />
                        </Route>
                    </Routes>
                </ProductProvider>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
