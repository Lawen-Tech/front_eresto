// import Link from 'next/link'

import { Link } from 'react-router';
import { ClipboardList, UtensilsCrossed, History, Grid2X2, Package, Users } from 'lucide-react'
import { SiTablecheck } from "react-icons/si";


const navItems = [
    { href: 'orders', label: 'Pedidos', icon: ClipboardList },
    { href: 'tables', label: 'Mesas', icon: SiTablecheck },
    { href: 'payment-history', label: 'Histórial de pagos', icon: History },
    { href: 'categories', label: 'Categorías', icon: Grid2X2 },
    { href: 'products', label: 'Productos', icon: Package },
    { href: 'users', label: 'Usuarios', icon: Users },
]

export function Sidebar() {
    return (
        <aside className="w-64 bg-white border-r h-screen">
            <div className="p-4 border-b">
                <Link to='/admin'>
                    <h1 className="text-xl font-semibold text-gray-800">iCard Admin</h1>
                </Link>
                
            </div>
            <nav className="p-4">
                <ul className="space-y-2">
                    {navItems.map((item) => {
                        const Icon = item.icon
                        return (
                            <li key={item.href}>
                                <Link
                                    to={item.href}
                                    className="flex items-center gap-3 px-4 py-2 text-gray-700 rounded-md hover:bg-gray-100 transition-colors"
                                >
                                    <Icon className="w-5 h-5" />
                                    <span>{item.label}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </aside>
    )
}

