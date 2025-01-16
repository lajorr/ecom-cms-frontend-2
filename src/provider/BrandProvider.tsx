import { createContext, useContext, useState } from "react";
import { fetchAllBrands } from "../services/brand";
import { Brand } from "../types/brand";

type BrandState = {
    allBrands: Brand[],
    fetchBrands: () => void
}


const brandContext = createContext<BrandState | undefined>(undefined);


export const BrandProvider = ({ children }: { children: React.ReactNode }) => {
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

export const useBrandContext = () => {
    const context = useContext(brandContext);
    if (!context) {
        throw new Error('useBrandContext must be used within a BrandProvider');
    }
    return context;
}