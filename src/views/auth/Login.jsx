export default function Login() {
    return (
        <>
            <h1 className="text-sky-600 font-black text-6xl max-sm:text-4xl text-center capitalize">
                Iniciar Sesión{" "}
                <span className="text-pink-700">
                    {" "}
                    Haciendola
                </span>
            </h1>
            <form
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
                        value=""
                        placeholder="Email"
                        className="w-full mt-3 p-3 border rounded-lg bg-gray-50"
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
                        value=""
                        placeholder="Contraseña"
                        className="w-full mt-3 p-3 border rounded-lg bg-gray-50"
                    />
                </div>
                <input
                    type="submit"
                    value="Iniciar Sesión"
                    className="bg-sky-700 w-full py-3 text-white font-bold rounded uppercase mb-5 hover:cursor-pointer hover:bg-sky-900 transition-colors"
                />
            </form>
            <nav className="lg:flex lg:justify-center">
                <a
                    to="/olvide-password"
                    className="block text-center my-5 text-slate-500 hover:text-sky-700 uppercase text-sm"
                >
                    Olvide mi Contraseña
                </a>
            </nav>
        </>
    );
}
