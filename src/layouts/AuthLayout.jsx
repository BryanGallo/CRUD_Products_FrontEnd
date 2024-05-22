import { Outlet } from "react-router-dom";
function AuthLayout() {
    return (
        <>
            <main className="mx-auto container mt-5 p-5 md:flex md:justify-center ">
                <div className="md:w-2/3 lg:w-2/5">
                    <Outlet />
                </div>
            </main>
        </>
    );
}

export default AuthLayout;
