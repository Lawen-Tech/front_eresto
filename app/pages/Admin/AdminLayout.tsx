
// "use client"

import { Sidebar } from './components/layout/sidebard';
import { AutoReload } from "./components/ui/auto-reload";
import { Header } from "./components/layout/header";
import { Outlet } from "react-router";



const AdminLayout: React.FC = () => {

    // const router = useRouter()


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

                    <Outlet />

                </main>
            </div>
        </div>
    )
}
export default AdminLayout