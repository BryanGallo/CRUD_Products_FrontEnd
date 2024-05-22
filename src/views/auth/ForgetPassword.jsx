import { useState } from "react";
import { Link } from "react-router-dom";
import clientAxios from "../../config/clientAxios.js";
import Spinner from "../../components/Spinner.jsx";
export default function ForgetPassword() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [link, setLink] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (email === "") {
            return alert("El correo es obligatorio");
        }
        setLoading(true);
        try {
            const { data } = await clientAxios.post(
                "/api/auth/forget-password",
                {
                    email,
                }
            );
            setEmail("");
            console.log(data);
            setLink(data.link);
            setTimeout(() => {
                setLoading(false);
                alert(data.msg);
            }, 500);
        } catch (error) {
            setLoading(false);
            alert(error.response.data.msg);
        }
    };

    return (
        <>
            <h1 className="text-sky-600 font-black text-6xl max-sm:text-4xl text-center capitalize">
                Recupera tu acceso a{" "}
                <span className="text-pink-700">Haciendola</span>
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
                        placeholder="Email de Registro"
                        className="w-full mt-3 p-3 border rounded-lg bg-gray-50"
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                </div>
                <input
                    type="submit"
                    value="Enviar Instrucciones"
                    className="bg-sky-700 w-full py-3 text-white font-bold rounded uppercase mb-5 hover:cursor-pointer hover:bg-sky-900 transition-colors"
                />
                {loading && <Spinner />}
            </form>
            {link.length !== 0 ? (
                <Link
                    to={link}
                    className="block font-bold text-center my-5 text-slate-500 uppercase text-lg hover:text-sky-700 bg-green-400 rounded-md"
                >
                    RECUPERA TU CONTRASEÑA
                </Link>
            ) : (
                ""
            )}
            <nav className="lg:flex lg:justify-center">
                <Link
                    to="/"
                    className="block text-center my-5 text-slate-500 uppercase text-sm hover:text-sky-700"
                >
                    Tienes una cuenta? Inicia Sesión
                </Link>
            </nav>
        </>
    );
}
