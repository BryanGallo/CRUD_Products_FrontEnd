import { useState, useEffect, createContext } from "react";
import clientAxios from "../config/clientAxios";

const ProductContext = createContext();

function ProductProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [modal, setModal] = useState(false);
    
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

    const handleModalProduct = () => {
        setModal(!modal);
    };

    return (
        <ProductContext.Provider value={{ products, modal, handleModalProduct }}>
            {children}
        </ProductContext.Provider>
    );
}
export { ProductProvider };
export default ProductContext;
