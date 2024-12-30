'use client'

import React, { useState, useEffect } from "react"
import { Button } from '../../../../../@/components/ui/button'
import { Switch } from '../../../../../@/components/ui/switch'
import { RefreshCw } from 'lucide-react'
import { TableAdmin } from "./table-admin"
import styles from "./tables-list-admin.module.css"

interface Table {
    id: string
    number: number
    status: 'free' | 'occupied' | 'reserved'
}

interface TablesListAdminProps {
    tables: Table[]
    onReload: () => void
}

export function TablesListAdmin({ tables, onReload }: TablesListAdminProps) {
    const [reload, setReload] = useState(false)
    const [autoReload, setAutoReload] = useState(false)

    const handleReload = () => {
        setReload((prev) => !prev)
        onReload()
    }

    useEffect(() => {
        let timer: NodeJS.Timeout
        if (autoReload) {
            const autoReloadAction = () => {
                handleReload()
                timer = setTimeout(autoReloadAction, 5000)
            }
            autoReloadAction()
        }
        return () => clearTimeout(timer)
    }, [autoReload])

    const handleAutoReloadToggle = (checked: boolean) => {
        if (checked) {
            setAutoReload(true)
        } else {
            setAutoReload(false)
            window.location.reload()
        }
    }

    return (
        <div className={styles.tablesListAdmin}>
            <div className={styles.controls}>
                <Button
                    variant="outline"
                    size="icon"
                    onClick={handleReload}
                    className={styles.reloadButton}
                >
                    <RefreshCw className="h-4 w-4" />
                </Button>

                <div className={styles.autoReloadToggle}>
                    <span>Recarga automática</span>
                    <Switch
                        checked={autoReload}
                        onCheckedChange={handleAutoReloadToggle}
                    />
                </div>
            </div>

            <div className={styles.tableGrid}>
                {tables.map((table) => (
                    <TableAdmin key={table.id} table={table} reload={reload} />
                ))}
            </div>
        </div>
    )
}

