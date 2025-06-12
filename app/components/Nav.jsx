"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const links = [
    {
        name: "home",
        path: "/"
    },
    {
        name: "technologies",
        path: "#technologies"
    },
    {
        name: "certificates",
        path: "#certificates"
    },
    {
        name: "Experience",
        path: "#experience"
    },
    {
        name: "contact",
        path: "#contact"
    }
]
const Nav = () => {
    const pathname = usePathname();
    const [ activeLink, setActiveLink ] = useState(pathname);

    return (
        <nav className="flex gap-8">
            {links.map((link, index) => {
                return <Link key={index} href={link.path} onClick={() => setActiveLink(link.path)} className={`${link.path === activeLink &&
                    "text-accent border-b-2 border-accent"
                } capitalize font-medium hover:text-accent hover:scale-[1.05] transition-all`}>
                    {link.name}
                </Link>
            })}
        </nav>
    )
}

export default Nav;