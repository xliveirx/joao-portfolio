"use client";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/app/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";


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
        name: "experience",
        path: "#experience"
    },
    {
        name: "contact",
        path: "#contact"
    }
]
const MobileNav = () => {
    const pathname = usePathname();

    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent>
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">João<span className="text-accent">.</span></h1>
                    </Link>
                </div>
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => {
                        return <Link key={index} href={link.path} className={`${link.path == pathname && "text-accent border-b-2 border-accent"}
                                text-xl capitalize hover:text-accent transition-all
                            }`}>
                            {link.name}
                        </Link>
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav;