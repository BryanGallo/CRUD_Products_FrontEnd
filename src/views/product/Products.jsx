import Product from "../../components/Product/Product";
import useProduct from "../../hooks/useProduct";
import ModalFormProduct from "../../components/Product/ModalFormProduct";
export default function Products() {
    const { products, handleModalProduct } = useProduct();
    return (
        <>
            <div className="p-4 bg-white rounded-lg">
                <h1 className=" font-black text-4xl py-1 text-center">
                    Lista de Productos
                </h1>
                <p className="text-center font-semibold">
                    Existe {products.length} productos
                </p>
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
            <div className="max-w-screen-sm h-screen mx-auto mt-0 overflow-scroll p-4">
                {products && products.length === 0 ? (
                    <p className="text-center">
                        <span className="text-center text-gray-600 uppercase font-bold">
                            No existen Productos
                        </span>
                    </p>
                ) : (
                    products.map((product) => (
                        <Product key={product.id} product={product} />
                    ))
                )}
            </div>
        </>
    );
}
