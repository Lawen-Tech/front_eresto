import { useState, useCallback } from "react"

interface Table {
    id: string
    number: number
    status: 'free' | 'occupied' | 'reserved'
}

export function useTable() {
    const [loading, setLoading] = useState(false)
    const [tables, setTables] = useState<Table[]>([])

    const getTables = useCallback(async () => {
        setLoading(true)
        // Here you would typically fetch tables from an API
        // For now, we'll use mock data with random status changes
        const mockTables: Table[] = [
            { id: "1", number: 1, status: Math.random() > 0.5 ? 'free' : 'occupied' },
            { id: "2", number: 2, status: Math.random() > 0.5 ? 'occupied' : 'reserved' },
            { id: "3", number: 3, status: Math.random() > 0.5 ? 'reserved' : 'free' },
            { id: "4", number: 4, status: Math.random() > 0.5 ? 'free' : 'occupied' },
        ]
        setTables(mockTables)
        setLoading(false)
    }, [])

    return { loading, tables, getTables }
}

