import { useState } from "react";
import useProduct from "../../hooks/useProduct";
export default function FormProduct() {
    const [id, setId] = useState("");
    const [handle, setHandle] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [sku, setSku] = useState("");
    const [grams, setGrams] = useState("");
    const [stock, setStock] = useState(0);
    const [price, setPrice] = useState("");
    const [compare, setCompare] = useState("");
    const [barcode, setBarcode] = useState("");

    const { submitProduct } = useProduct();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (
            [
                handle,
                title,
                description,
                sku,
                grams,
                stock,
                price,
                compare,
                barcode,
            ].includes("")
        ) {
            return alert("Todos los campos son obligatorios");
        }

        // Expresión regular para validar numero y decimales
        const regexD = /^[0-9]+(?:\.[0-9]+)?$/;
        if (!regexD.test(grams)) {
            return alert("En Grams solo deben ir numeros");
        }

        let gramsFloat = parseFloat(grams);
        if (gramsFloat <= 0) {
            return alert("Grams debe ser mayor que 0");
        }

        const regex = /^[0-9\b]+$/;
        if (!regex.test(stock)) {
            return alert("Stock solo puede contener números");
        }
        let stockInt = parseInt(stock);
        if (stockInt <= 0) {
            return alert("Stock debe ser mayor que 0");
        }

        if (!regexD.test(price)) {
            return alert(
                "En price solo deben ir numeros enteros o con decimales separados por punto"
            );
        }

        let priceFloat = parseFloat(price);
        if (priceFloat <= 0) {
            return alert("Price debe ser mayor que 0");
        }

        if (!regexD.test(compare)) {
            return alert(
                "En compare solo deben ir numeros enteros o con decimales separados por punto"
            );
        }

        let compareFloat = parseFloat(compare);
        if (compareFloat <= 0) {
            return alert("Price debe ser mayor que 0");
        }

        if (barcode.length < 8 || barcode.length > 50) {
            return alert(
                "El código de barras debe tener entre 8 y 50 caracteres"
            );
        }

        try {
            const result = await submitProduct({
                id,
                handle,
                title,
                description,
                sku,
                grams,
                stock,
                price,
                compare_price: compare,
                barcode,
            });
            if (result === "ok") {
                setId("");
                setHandle("");
                setTitle("");
                setDescription("");
                setSku("");
                setGrams("");
                setStock(0);
                setPrice("");
                setCompare("");
                setBarcode("");
            } else {
                return;
            }
        } catch (error) {
            console.log(error);
            return alert("Ocurrio un error al crear el producto");
        }
    };

    return (
        <div className="block w-full">
            <form
                onSubmit={handleSubmit}
                className="my-2 bg-white shadow rounded-lg px-3 py-3"
            >
                <div className="my-1">
                    <label
                        htmlFor="handle"
                        className="uppercase bg text-gray-600 block text-sm font-bold"
                    >
                        Handle
                    </label>
                    <input
                        id="handle"
                        type="text"
                        placeholder="Ej. cola-glitter-23-grs"
                        className="w-full text-base mt-1 p-2 border rounded-lg bg-gray-50 "
                        value={handle}
                        onChange={(e) => {
                            setHandle(e.target.value);
                        }}
                    />
                </div>
                <div className="my-1">
                    <label
                        htmlFor="title"
                        className="uppercase bg text-gray-600 block text-sm font-bold"
                    >
                        Title
                    </label>
                    <input
                        id="title"
                        type="text"
                        placeholder="Ej. COLA GLITTER 23 GRS"
                        className="w-full mt-1 p-2 text-base border rounded-lg bg-gray-50 "
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                    />
                </div>
                <div className="my-1">
                    <label
                        htmlFor="description"
                        className="block font-bold text-gray-700 text-sm uppercase"
                    >
                        Description
                    </label>
                    <textarea
                        id="description"
                        className="p-2 border-2 w-full mt-1 placeholder-gray-400 rounded-md text-base"
                        placeholder="Características"
                        value={description}
                        onChange={(e) => {
                            setDescription(e.target.value);
                        }}
                    ></textarea>
                </div>
                <div className="my-1">
                    <label
                        htmlFor="sku"
                        className="uppercase bg text-gray-600 block text-sm font-bold"
                    >
                        SKU
                    </label>
                    <input
                        id="sku"
                        type="text"
                        placeholder="Ej. 60870131001"
                        className="w-full mt-1 p-2 text-base border rounded-lg bg-gray-50 "
                        value={sku}
                        onChange={(e) => {
                            setSku(e.target.value);
                        }}
                    />
                </div>
                <div className="my-1">
                    <label
                        htmlFor="grams"
                        className="uppercase bg text-gray-600 block text-sm font-bold"
                    >
                        grams
                    </label>
                    <input
                        id="grams"
                        type="text"
                        placeholder="Ej. 100.0"
                        className="w-full mt-1 p-2 text-base border rounded-lg bg-gray-50 "
                        value={grams}
                        onChange={(e) => {
                            setGrams(e.target.value);
                        }}
                    />
                </div>
                <div className="my-1">
                    <label
                        htmlFor="stock"
                        className="uppercase bg text-gray-600 block text-sm font-bold"
                    >
                        stock
                    </label>
                    <input
                        id="stock"
                        type="number"
                        placeholder="Ej. 1013"
                        className="w-full mt-1 p-2 text-base border rounded-lg bg-gray-50 "
                        value={stock}
                        onChange={(e) => {
                            setStock(e.target.value);
                        }}
                    />
                </div>
                <div className="my-1">
                    <label
                        htmlFor="price"
                        className="uppercase bg text-gray-600 block text-sm font-bold"
                    >
                        price
                    </label>
                    <input
                        id="price"
                        type="text"
                        placeholder="Ej. 1161"
                        className="w-full mt-1 p-2 text-base border rounded-lg bg-gray-50 "
                        value={price}
                        onChange={(e) => {
                            setPrice(e.target.value);
                        }}
                    />
                </div>
                <div className="my-1">
                    <label
                        htmlFor="compare_price"
                        className="uppercase bg text-gray-600 block text-sm font-bold"
                    >
                        compare_price
                    </label>
                    <input
                        id="compare_price"
                        type="text"
                        placeholder="Ej. 1290"
                        className="w-full mt-1 p-2 text-base border rounded-lg bg-gray-50 "
                        value={compare}
                        onChange={(e) => {
                            setCompare(e.target.value);
                        }}
                    />
                </div>
                <div className="my-1">
                    <label
                        htmlFor="barcode"
                        className="uppercase bg text-gray-600 block text-sm font-bold"
                    >
                        barcode
                    </label>
                    <input
                        id="barcode"
                        type="text"
                        placeholder="Ej. 7891153003689"
                        className="w-full mt-1 p-2 text-base border rounded-lg bg-gray-50 "
                        value={barcode}
                        onChange={(e) => {
                            setBarcode(e.target.value);
                        }}
                    />
                </div>
                <input
                    type="submit"
                    value="Crear Producto"
                    className="bg-sky-700 w-full py-3 text-white font-bold rounded uppercase mt-5 hover:cursor-pointer hover:bg-sky-900 transition-colors"
                />
            </form>
        </div>
    );
}
