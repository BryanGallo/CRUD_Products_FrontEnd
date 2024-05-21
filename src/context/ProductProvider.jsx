import { useState, createContext } from "react";

const ProductContext = createContext();

export default function ProductProvider({ children }) {
    return (
        <ProductContext.Provider value={{}}>{children}</ProductContext.Provider>
    );
}
export { ProductProvider };
