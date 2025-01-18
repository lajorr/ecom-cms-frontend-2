import { createContext, useContext, useState } from "react";
import { addCategory, deleteCategoryById, fetchAllCategories } from "../services/category";
import { Category } from "../types/category";


type CategoryState = {
    categories: Category[]
    fetchCategories: () => void
    addCategory: (cat: Omit<Category, '_id'>) => Promise<string>
    deleteCategory: (id: string) => void
}


const CategoryContext = createContext<CategoryState | undefined>(undefined);


export const CategoryProvider = ({ children }: { children: React.ReactNode }) => {
    const [categories, setCategories] = useState<Category[]>([]);

    const getAllCategories = async () => {
        const categories = await fetchAllCategories();
        setCategories(categories);
    }
    const addNewCategory = async (cat: Omit<Category, '_id'>) => {
        const result = await addCategory(cat);
        await getAllCategories()
        return result.msg;
    }
    const deleteCategory = async (id: string) => {
        const result = await deleteCategoryById(id);
        await getAllCategories()
        return result.msg;
    }

    return (
        <CategoryContext.Provider value={{
            categories,
            fetchCategories: getAllCategories,
            addCategory: addNewCategory,
            deleteCategory

        }}>
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