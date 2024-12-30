import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import styles from "./table-admin.module.css"

interface Table {
    id: string
    number: number
    status: 'free' | 'occupied' | 'reserved'
}

interface TableAdminProps {
    table: Table
    reload: boolean
}

export function TableAdmin({ table, reload }: TableAdminProps) {
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'free':
                return 'bg-green-500'
            case 'occupied':
                return 'bg-red-500'
            case 'reserved':
                return 'bg-yellow-500'
            default:
                return 'bg-gray-500'
        }
    }

    return (
        <Card className={styles.tableCard}>
            <CardContent className={styles.tableContent}>
                <div className={styles.tableNumber}>Mesa {table.number}</div>
                <Badge className={`${styles.tableStatus} ${getStatusColor(table.status)}`}>
                    {table.status === 'free' ? 'Libre' : table.status === 'occupied' ? 'Ocupada' : 'Reservada'}
                </Badge>
            </CardContent>
        </Card>
    )
}

