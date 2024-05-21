import Product from "../../components/Product/Product";
import useProduct from "../../hooks/useProduct";
import ModalFormProduct from "../../components/Product/ModalFormProduct";
export default function Products() {
    const { products, handleModalProduct, deleteProduct } = useProduct();
    return (
        <div className="bg-gray-100">
            <div className=" md:min-h-screen">
                <main className="md:p-10 min-lg:flex-1 ">
                    <div className="p-4 bg-white rounded-lg">
                        <h1 className=" font-black text-4xl py-1 text-center">
                            Lista de Productos
                        </h1>
                        <p className="text-center font-semibold">Existe {products.length} productos</p>
                    </div>
                    <ModalFormProduct />
                    <div className="p-3">
                        <div className="flex gap-3 justify-center items-center p-1 mt-0 ">
                            <button
                                className="flex text-blue-500 hover:text-blue-700 bg-white rounded-md p-5"
                                onClick={handleModalProduct}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 4.5v15m7.5-7.5h-15"
                                    />
                                </svg>

                                <span className="uppercase font-bold">
                                    {" "}
                                    Nuevo Producto
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="w-90 h-screen mx-auto mt-0 overflow-scroll">
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
                                    <th className="py-3 px-4 font-semibold text-gray-700">
                                        Barcode
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
                                        <Product
                                            key={product.id}
                                            product={product}
                                        />
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
