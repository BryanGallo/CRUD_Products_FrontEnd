import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useProduct from "../hooks/useProduct";

function Header() {
    const [navbar, setNavbar] = useState(false);

    const { signOffAuth } = useAuth();
    const { signOffProducts } = useProduct();

    const handlesignOff = () => {
        if (confirm("Deseas cerrar Sesión?")) {
            signOffAuth();
            signOffProducts();
            localStorage.removeItem("token");
            return;
        } else {
            return;
        }
    };

    return (
        <header className="sticky top-0 max-sm:static z-50">
            <nav className="w-full bg-sky-600 shadow ">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <Link
                                to="/products"
                                className="flex w-full justify-start items-center pl-2 "
                            >
                                <h2 className="text-white font-black text-4xl">
                                    Productos
                                </h2>
                            </Link>
                            {/* Boton Menu Hamburguesa */}
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                            {/* Boton Menu Hamburguesa */}
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                                navbar ? "block" : "hidden"
                            }`}
                        >
                            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                                <button
                                    className="h-fullbg-sky-700 hover:bg-blue-300 transition-all text-white hover:text-pink-700 px-5  h-full rounded-lg"
                                    onClick={handlesignOff}
                                >
                                    Cerrar sesión
                                </button>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
