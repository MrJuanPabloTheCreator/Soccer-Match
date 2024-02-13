"use client"

import { Home, LayoutGrid, PlusSquare } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const Navbar = () => {
    const [activePage, setActivePage] = useState('')
    const pathname = usePathname();

    useEffect(() => {
        const fixedPath = pathname.split('/')
        setActivePage(`/${fixedPath[1]}`)
    }, [pathname])
    
    const isLinkActive = (href: string) => activePage === href;

    return (
        <div className="flex justify-center bg-slate-100 px-5 shadow-lg mb-5">
            <div className="flex font-bold text-md">
                <Link href={"/"} className={`flex justify-center py-4 border-l-2 items-center px-7 ${isLinkActive("/") ? "bg-pink-700 text-white" : ""}`}>
                    <Home size={32}/>
                </Link>
                <Link href={"/create"} className={`flex justify-center py-4 items-center border-x-2 px-7 ${isLinkActive("/create") ? "bg-pink-700 text-white" : ""}`}>
                    <PlusSquare size={28}/>
                </Link>
                <Link href={"/discover"} className={`flex justify-center py-4 items-center border-r-2 px-7 ${isLinkActive("/discover") ? "bg-pink-700 text-white" : ""}`}>
                    <LayoutGrid size={32} />
                </Link>
            </div>
        </div>
    )
}

export default Navbar