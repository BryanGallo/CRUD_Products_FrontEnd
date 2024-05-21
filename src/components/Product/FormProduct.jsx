import React from "react";

export default function FormProduct() {
    return (
        <div className="block w-full">
            <form className="my-2 bg-white shadow rounded-lg px-3 py-3">
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
                        value=""
                        onChange={(e) => {}}
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
                        value=""
                        onChange={(e) => {}}
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
                        value=""
                        onChange={(e) => {}}
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
                        value=""
                        onChange={(e) => {}}
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
                        value=""
                        onChange={(e) => {}}
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
                        value=""
                        onChange={(e) => {}}
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
                        value=""
                        onChange={(e) => {}}
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
                        value=""
                        onChange={(e) => {}}
                    />
                </div>
                <div className="my-1">
                    <label
                        htmlFor="compare_price"
                        className="uppercase bg text-gray-600 block text-sm font-bold"
                    >
                        barcode
                    </label>
                    <input
                        id="compare_price"
                        type="text"
                        placeholder="Ej. 7891153003689"
                        className="w-full mt-1 p-2 text-base border rounded-lg bg-gray-50 "
                        value=""
                        onChange={(e) => {}}
                    />
                </div>
                <input
                    type="submit"
                    className="bg-sky-700 w-full py-3 text-white font-bold rounded uppercase mt-5 hover:cursor-pointer hover:bg-sky-900 transition-colors"
                />
            </form>
        </div>
    );
}
