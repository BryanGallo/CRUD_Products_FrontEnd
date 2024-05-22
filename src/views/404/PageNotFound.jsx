import React from "react";
import { Link } from "react-router-dom";
const PageNotFound = () => {
    return (
        <>
            <h2 className="text-emerald-600 font-black text-6xl max-sm:text-4xl  text-center capitalize">
                <span className="text-pink-700 text-center">
                    {" "}
                    Página No Encontrada
                </span>
            </h2>
            <h2 className="text-sky-600 my-5 text-lg max-sm:text-sm text-center capitalize">
                Tal vez quieras volver a <Link to="/products" className="font-black">Productos</Link>
            </h2>
        </>
    );
};

export default PageNotFound;
