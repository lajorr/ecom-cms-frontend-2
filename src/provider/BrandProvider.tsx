import { createContext, useState } from "react";
import { fetchAllBrands } from "../services/brand";
import { Brand } from "../types/brand";

type BrandState = {
    allBrands: Brand[],
    fetchBrands: () => void
}


const brandContext = createContext<BrandState | undefined>(undefined);


export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [allBrands, setAllBrands] = useState<Brand[]>([]);
    const getAllBrands = async () => {
        const allBrands = await fetchAllBrands();
        setAllBrands(allBrands);
    }
    return (
        <brandContext.Provider value={{ allBrands, fetchBrands: getAllBrands }}>
            {children}
        </brandContext.Provider>
    )
}