import { useState, useCallback } from "react"

interface User {
    id: string
    username: string
    email: string
    first_name: string
    last_name: string
    is_active: boolean
    is_staff: boolean
}

export function useUser() {
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState<User[]>([])

    const getUsers = useCallback(async () => {
        setLoading(true)
        // Here you would typically fetch users from an API
        // For now, we'll use mock data
        const mockUsers: User[] = [
            { id: "1", username: "john_doe", email: "john@example.com", first_name: "John", last_name: "Doe", is_active: true, is_staff: false },
            { id: "2", username: "jane_smith", email: "jane@example.com", first_name: "Jane", last_name: "Smith", is_active: true, is_staff: true },
            { id: "3", username: "bob_johnson", email: "bob@example.com", first_name: "Bob", last_name: "Johnson", is_active: false, is_staff: false },
        ]
        console.log(mockUsers.length)
        setUsers(mockUsers)
        setLoading(false)
    }, [])

    const updateUser = useCallback((user: User) => {
        // Here you would typically call an API to update the user
        console.log("Updating user:", user)
    }, [])

    const deleteUser = useCallback((user: User) => {
        // Here you would typically call an API to delete the user
        console.log("Deleting user:", user)
        setUsers(prevUsers => prevUsers.filter(u => u.id !== user.id))
    }, [])

    return { loading, users, getUsers, updateUser, deleteUser }
}

