import { createContext, useContext, useState } from "react";
import { fetchAllCategories } from "../services/category";
import { Category } from "../types/category";


type CategoryState = {
    categories: Category[]
    fetchCategories: () => void
}


const CategoryContext = createContext<CategoryState | undefined>(undefined);


export const CategoryProvider = ({ children }: { children: React.ReactNode }) => {
    const [categories, setCategories] = useState<Category[]>([]);

    const getAllCategories = async () => {
        const categories = await fetchAllCategories();
        setCategories(categories);
    }

    return (
        <CategoryContext.Provider value={{ categories, fetchCategories: getAllCategories }}>
            {children}
        </CategoryContext.Provider >
    )
}

export const useCategoryContext = () => {
    const context = useContext(CategoryContext);
    if (!context) {
        throw new Error('useCategoryContext must be used within a CategoryProvider');
    }
    return context;
}