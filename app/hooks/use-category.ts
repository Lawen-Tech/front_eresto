import { useState, useCallback } from "react"

interface Category {
    id: string
    title: string
}

export function useCategory() {
    const [loading, setLoading] = useState(false)
    const [categories, setCategories] = useState<Category[]>([])

    const getCategories = useCallback(async () => {
        setLoading(true)
        // Here you would typically fetch categories from an API
        // For now, we'll use mock data
        const mockCategories: Category[] = [
            { id: "1", title: "Bebidas" },
            { id: "2", title: "Platos principales" },
            { id: "3", title: "Postres" },
        ]
        setCategories(mockCategories)
        setLoading(false)
    }, [])

    const deleteCategory = useCallback(async (id: string) => {
        // Here you would typically call an API to delete the category
        console.log("Deleting category with id:", id)
        setCategories(prevCategories => prevCategories.filter(category => category.id !== id))
    }, [])

    return { loading, categories, getCategories, deleteCategory }
}

