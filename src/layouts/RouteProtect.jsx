import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Spinner from "../components/Spinner";
export default function RouteProtect() {
    const { auth, validate } = useAuth();

    if (validate)
        return (
            <div className="flex md:min-h-screen items-center w-full justify-center">
                <Spinner />
            </div>
        );
    return (
        <>
            {auth.id ? (
                <div className="bg-gray-100">
                    <div className=" md:min-h-screen">
                        <main className="md:p-3 min-lg:flex-1 ">
                            <Outlet />
                        </main>
                    </div>
                </div>
            ) : (
                <Navigate to="/" />
            )}
        </>
    );
}
