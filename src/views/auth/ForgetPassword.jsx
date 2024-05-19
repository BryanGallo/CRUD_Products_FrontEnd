import { Link } from "react-router-dom";
export default function ForgetPassword() {
    return (
        <>
            <h1 className="text-sky-600 font-black text-6xl max-sm:text-4xl text-center capitalize">
                Recupera tu acceso a{" "}
                <span className="text-pink-700">Haciendola</span>
            </h1>

            <form className="my-10 bg-white shadow rounded-lg px-10 py-8">
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
                        value=""
                        placeholder="Email de Registro"
                        className="w-full mt-3 p-3 border rounded-lg bg-gray-50"
                    />
                </div>
                <input
                    type="submit"
                    value="Enviar Instrucciones"
                    className="bg-sky-700 w-full py-3 text-white font-bold rounded uppercase mb-5 hover:cursor-pointer hover:bg-sky-900 transition-colors"
                />
            </form>
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
