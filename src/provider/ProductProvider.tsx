import { createContext, useContext, useState } from "react";
import { getBrandById } from "../services/brand";
import { getCategoryById } from "../services/category";
import { fetchAllProducts } from "../services/product";
import { Product } from "../types/product";

type ProductState = {
    products: Product[]
    fetchProducts: () => void
}

const ProductContext = createContext<ProductState | undefined>(undefined);


export const ProductProvider = ({ children }: { children: React.ReactNode }) => {
    const [products, setProducts] = useState<Product[]>([]);

    const getAllProducts = async () => {
        const productResponses = await fetchAllProducts();

        const products: Product[] = await Promise.all(
            productResponses.map(async (productResponse) => {
                return {
                    ...productResponse,
                    brand: await getBrandById(productResponse.brand),
                    category: await getCategoryById(productResponse.category),
                };
            })
        );

        setProducts(products);
    };

    return (
        <ProductContext.Provider value={{ products, fetchProducts: getAllProducts }}>
            {children}
        </ProductContext.Provider>
    )
}


export const useProductContext = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error('useProductContext must be used within a ProductProvider');
    }
    return context;
}