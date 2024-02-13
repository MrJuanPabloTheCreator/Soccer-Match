"use client"

import { Settings2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const DiscoverNavbar = () => {
    const [activePage, setActivePage] = useState('');
    const pathname = usePathname();

    useEffect(() => {
        setActivePage(pathname)
    }, [pathname])
    
    const isLinkActive = (href: string) => activePage === href;

    return (
        <div className="flex justify-center pb-5 border-b-2">
            <div className="flex bg-slate-100 font-bold text-md rounded-full overflow-hidden shadow-md">
                <Link href={"/discover"} passHref>
                    <p className={`flex justify-center py-3 items-center px-7 ${isLinkActive("/discover") ? "bg-pink-700 text-white" : ""}`}>
                        Open Matches
                    </p>
                </Link>
                <Link href={"/discover/rivals"} passHref>
                    <p className={`flex justify-center py-3 items-center border-x-2 px-7 ${isLinkActive("/discover/rivals") ? "bg-pink-700 text-white" : ""}`}>
                        Rivals
                    </p>
                </Link>
                <Link href={"/discover/people"} passHref>
                    <p className={`flex justify-center py-3 items-center px-7 ${isLinkActive("/discover/people") ? "bg-pink-700 text-white" : ""}`}>
                        People
                    </p>
                </Link>
            </div>
            <div className="flex items-center ml-5 bg-slate-100 rounded-full p-2 shadow-md">
                <button>
                    <Settings2 size={28}/>
                </button>
            </div>
        </div>
    );
};

export default DiscoverNavbar;
