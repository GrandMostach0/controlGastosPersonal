import { Outlet } from "react-router-dom"
import Header from "./Header"

export default function HomeLayout(){
    return (
        <div>
            <Header />

            <main className="border p-4">
                <Outlet />
            </main>
        </div>
    )
}