"use client"
// import { Switch } from "@/components/ui/switch"
// import { Label } from "@/components/ui/label"
import { useState, useEffect } from "react"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

interface AutoReloadProps {
    onToggle: (enabled: boolean) => void
    interval?: number // in milliseconds
}

export function AutoReload({ onToggle, interval = 30000 }: AutoReloadProps) {
    const [enabled, setEnabled] = useState(false)

    useEffect(() => {
        if (!enabled) return

        const timer = setInterval(() => {
            onToggle(true)
        }, interval)

        return () => clearInterval(timer)
    }, [enabled, interval, onToggle])

    return (
        <div className="flex items-center space-x-2">
            <Switch
                id="auto-reload"
                checked={enabled}
                onCheckedChange={(checked) => {
                    setEnabled(checked)
                    onToggle(checked)
                }}
            />
            <Label htmlFor="auto-reload">Reload automático</Label>
        </div>
    )
}

