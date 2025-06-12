import Link from "next/link";
import React from "react"
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

const Header = () => {
    return (
        <header id="home" className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <h1 className="text-2xl font-semibold">
                        João<span className="text-accent">.</span>
                    </h1>
                </Link>
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href="#contact">
                        <Button className="hover:cursor-pointer hover:scale-[1.05]">Hire me</Button>
                    </Link>
                </div>
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    )
}

export default Header;