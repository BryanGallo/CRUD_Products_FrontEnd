import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import clientAxios from "../../config/clientAxios";
import Spinner from "../../components/Spinner";
export default function NewPassword() {
    const [vtoken, setVtoken] = useState(false);
    const [message, setMessage] = useState("");
    const [password, setPassword] = useState("");
    const [repetPassword, setRepetPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const { token } = useParams();

    useEffect(() => {
        const validateToken = async () => {
            try {
                await clientAxios(`/api/auth/forget-password/${token}`);
                setVtoken(true);
            } catch (error) {
                setMessage(error.response.data.msg);
            }
        };
        validateToken();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if ([password, repetPassword].includes("")) {
            return alert("Todos los campos son obligatorios");
        }

        if (password !== repetPassword) {
            return alert("Las contraseñas deben ser iguales");
        }
        try {
            setLoading(true);
            const { data } = await clientAxios.post(
                `/api/auth/forget-password/${token}`,
                {
                    password,
                }
            );
            console.log(data);
            setPassword("");
            setRepetPassword("");
            setTimeout(() => {
                setLoading(false);
                alert(data.msg);
            }, 1000);
        } catch (error) {
            console.log(error);
            setTimeout(() => {
                setLoading(false);
                alert(error.response.data.msg);
            }, 500);
        }
    };
    return (
        <>
            <h1 className="text-sky-600 font-black text-6xl text-center capitalize">
                Restablece tu Contraseña <br></br>
                <span className="text-pink-700">Haciendola</span>
            </h1>
            <p className="text-center font-semibold mt-5 text-2xl">{message}</p>
            {vtoken && (
                <form
                    onSubmit={handleSubmit}
                    className="my-10 bg-white shadow rounded-lg px-10 py-8"
                >
                    <div className="my-5">
                        <label
                            htmlFor="password"
                            className="uppercase text-gray-600 block text-xl font-bold"
                        >
                            Nueva Contraseña
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            placeholder="Escribe tu nueva contaseña"
                            className="w-full mt-3 p-3 border rounded-lg bg-gray-50"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                    </div>
                    <div className="my-5">
                        <label
                            htmlFor="password2"
                            className="uppercase text-gray-600 block text-xl font-bold"
                        >
                            Repetir Nueva Contraseña
                        </label>
                        <input
                            id="password2"
                            type="password"
                            value={repetPassword}
                            placeholder="Repite tu nueva contaseña"
                            className="w-full mt-3 p-3 border rounded-lg bg-gray-50"
                            onChange={(e) => {
                                setRepetPassword(e.target.value);
                            }}
                        />
                    </div>
                    <input
                        type="submit"
                        value="Guardar nueva contraseña"
                        className="bg-sky-700 w-full py-3 text-white font-bold rounded uppercase mb-5 hover:cursor-pointer hover:bg-sky-900 transition-colors"
                    />
                    {loading && <Spinner />}
                </form>
            )}
            <Link
                className="block bg-white p-5 font-semibold text-center my-5 text-slate-500 uppercase"
                to="/"
            >
                Inicia Sesión
            </Link>
        </>
    );
}
