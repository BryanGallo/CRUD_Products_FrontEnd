import { useState, useEffect } from "react";
import clientAxios from "../../config/clientAxios";
import Product from "./Product";
export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    return;
                }
                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                };
                const { data } = await clientAxios("/api/product", config);
                console.log(data);
                setProducts(data);
            } catch (error) {
                console.log(error.response);
            }
        };
        getProducts();
    }, []);

    return (
        <div className="bg-gray-100">
            <div className=" md:min-h-screen">
                <main className="md:p-10 min-lg:flex-1 ">
                    <div className="p-4">
                        <h1 className=" font-black text-4xl py-1 text-center">
                            Lista de Productos
                        </h1>
                    </div>
                    <div className="w-90 mx-auto mt-0 overflow-scroll">
                        <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
                            <thead className="bg-gray-200 text-lg sticky top-0 z-10 ">
                                <tr>
                                    <th className="py-3 px-4 font-semibold text-gray-700">
                                        Handle
                                    </th>
                                    <th className="py-3 px-4 font-semibold text-gray-700">
                                        Title
                                    </th>
                                    <th className="py-3 px-4 font-semibold text-gray-700">
                                        Description
                                    </th>
                                    <th className="py-3 px-4 font-semibold text-gray-700">
                                        Departamento
                                    </th>
                                    <th className="py-3 px-4 font-semibold text-gray-700">
                                        SKU
                                    </th>
                                    <th className="py-3 px-4 font-semibold text-gray-700">
                                        Grams
                                    </th>
                                    <th className="py-3 px-4 font-semibold text-gray-700">
                                        Stock
                                    </th>
                                    <th className="py-3 px-4 font-semibold text-gray-700">
                                        Price
                                    </th>
                                    <th className="py-3 px-4 font-semibold text-gray-700">
                                        Compare Price
                                    </th>
                                    <th className="py-3 px-4 font-semibold text-blue-500">
                                        Editar
                                    </th>
                                    <th className="py-3 px-4 font-semibold text-red-600">
                                        Eliminar
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {products && products.length === 0 ? (
                                    <tr>
                                        <th className="text-center text-gray-600 uppercase font-bold">
                                            No existen Productos
                                        </th>
                                    </tr>
                                ) : (
                                    products.map((product) => (
                                        <Product key={product.id} product={product} />
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </div>
    );
}
