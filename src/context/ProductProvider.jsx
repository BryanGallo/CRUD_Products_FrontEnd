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

    const submitProduct = async (product) => {
        console.log(product);
        if (product.id) {
            await editProduct(product);
        } else {
            const submit = await newProduct(product);
            return submit;
        }
    };

    const newProduct = async (product) => {
        let result = "";
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
            const { data } = await clientAxios.post(
                "api/product/create-product",
                product,
                config
            );
            console.log(data);
            alert(data.msg);
            result = "ok";
            setTimeout(() => {
                setModal(false);
            }, 1000);
        } catch (error) {
            return alert(`${error.response.data.msg}`);
        }
        return result;
    };

    const editProduct = async (product) => {
        console.log("llegue a editar");
    };

    return (
        <ProductContext.Provider
            value={{ products, modal, handleModalProduct, submitProduct }}
        >
            {children}
        </ProductContext.Provider>
    );
}
export { ProductProvider };
export default ProductContext;
