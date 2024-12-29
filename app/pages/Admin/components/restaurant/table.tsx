// import { cn } from "@/lib/utils"

import { cn } from "~/lib/utils"

type TableStatus = 'free' | 'occupied' | 'reserved' | 'attention'

interface TableProps {
    number: number
    status: TableStatus
    notifications?: number
    onClick?: () => void
}

const statusStyles = {
    free: "bg-green-100 border-green-500 text-green-700",
    occupied: "bg-amber-100 border-amber-500 text-amber-700",
    reserved: "bg-gray-100 border-gray-500 text-gray-700",
    attention: "bg-blue-100 border-blue-500 text-blue-700"
}

export function RestaurantTable({ number, status, notifications, onClick }: TableProps) {
    return (
        <button
            onClick={onClick}
            className={cn(
                "relative w-40 h-40 p-4 rounded-lg border-2 transition-all hover:scale-105",
                statusStyles[status]
            )}
        >
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-20 border-2 border-current rounded" />
            </div>
            <div className="relative z-10 flex flex-col items-center justify-between h-full">
                <span className="text-lg font-medium">Mesa {number}</span>
                {notifications && (
                    <span className="absolute -top-2 -right-2 w-6 h-6 flex items-center justify-center bg-red-500 text-white text-sm font-bold rounded-full">
                        {notifications}
                    </span>
                )}
            </div>
        </button>
    )
}

