import { useState } from "react";
import { Link } from "react-router-dom";
import clientAxios from "../../config/clientAxios.js";
import useAuth from "../../hooks/useAuth.jsx";
export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { setAuth } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if ([email, password].includes("")) {
            alert("Todos los campos son obligatorios");
        }

        try {
            const { data } = await clientAxios.post("/api/auth/login", {
                email,
                password,
            });
            setEmail("");
            setPassword("");
            setAuth(data);
            alert(data.name);
        } catch (error) {
            alert(error.response.data.msg);
        }
    };

    return (
        <>
            <h1 className="text-sky-600 font-black text-6xl max-sm:text-4xl text-center capitalize">
                Iniciar Sesión{" "}
                <span className="text-pink-700"> Haciendola</span>
            </h1>
            <form
                onSubmit={handleSubmit}
                className="my-10 bg-white shadow rounded-lg px-10 py-8"
            >
                <div className="my-5">
                    <label
                        htmlFor="email"
                        className="uppercase text-gray-600 block text-xl font-bold"
                    >
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        placeholder="Email"
                        className="w-full mt-3 p-3 border rounded-lg bg-gray-50"
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                </div>
                <div className="my-5">
                    <label
                        htmlFor="password"
                        className="uppercase text-gray-600 block text-xl font-bold"
                    >
                        Contraseña
                    </label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        placeholder="Contraseña"
                        className="w-full mt-3 p-3 border rounded-lg bg-gray-50"
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                </div>
                <input
                    type="submit"
                    value="Iniciar Sesión"
                    className="bg-sky-700 w-full py-3 text-white font-bold rounded uppercase mb-5 hover:cursor-pointer hover:bg-sky-900 transition-colors"
                />
            </form>
            <nav className="lg:flex lg:justify-center">
                <Link
                    to="/forget-password"
                    className="block text-center my-5 text-slate-500 hover:text-sky-700 uppercase text-sm"
                >
                    Olvide mi Contraseña
                </Link>
            </nav>
        </>
    );
}
