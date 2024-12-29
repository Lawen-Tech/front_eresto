// "use client"

import { useState } from "react"
import { Sidebar } from './components/layout/sidebard';
import { RestaurantTable } from "./components/restaurant/table";
import { AutoReload } from "./components/ui/auto-reload";
import { Header } from "./components/layout/header";

// This would come from your backend
const initialTables = [
    { id: 1, status: 'free' as const },
    { id: 2, status: 'occupied' as const },
    { id: 3, status: 'reserved' as const },
    { id: 4, status: 'reserved' as const },
    { id: 5, status: 'free' as const },
    { id: 6, status: 'attention' as const, notifications: 2 },
]

export default function RestaurantDashboard() {
    const [tables, setTables] = useState(initialTables)
    // const router = useRouter()

    const handleReload = async () => {
        // In a real app, you would fetch the latest table status from your API
        console.log('Reloading table status...')
    }

    const handleLogout = () => {
        // Here you would handle the logout logic
        console.log('Logging out...')
        // router.push('/login')
    }

    return (
        <div className="flex h-screen bg-gray-50">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Header
                    userName="Agustín Navarro Galdon"
                    userImage="/placeholder.svg?height=32&width=32"
                    onLogout={handleLogout}
                />
                <main className="flex-1 p-8 overflow-auto">
                    <div className="mb-8 flex items-center justify-between">
                        <h1 className="text-2xl font-bold text-gray-900">Restaurante</h1>
                        <AutoReload onToggle={handleReload} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {tables.map((table) => (
                            <RestaurantTable
                                key={table.id}
                                number={table.id}
                                status={table.status}
                                notifications={table.notifications}
                                onClick={() => {
                                    console.log(`Table ${table.id} clicked`)
                                    // Here you would typically open a modal or navigate to table details
                                }}
                            />
                        ))}
                    </div>
                </main>
            </div>
        </div>
    )
}

