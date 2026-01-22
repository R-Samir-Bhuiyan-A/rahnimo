"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { usePathname } from 'next/navigation';
import { useTheme } from '../../wrapper/ThemeProvider';
import { Sun, Moon } from 'lucide-react';


const rightMenuItems = [
    { urlName: "About", url: "/about" },
    { urlName: "Work", url: "/work" },
    { urlName: "Team", url: "/team" },
    { urlName: "Contact", url: "/contact" }
];


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen)
    const pathname = usePathname()
    const { theme, toggleTheme, mounted } = useTheme();

    // Prevent hydration mismatch for icon
    // Prevent hydration mismatch for icon
    // if (!mounted) return null; // Removed to prevent FOUC
    // Or return a skeleton navbar? No, returning null for the whole navbar is bad for SEO/LCP.
    // Better: Render the navbar but keep the toggle icon static or hidden until mounted.
    // Actually, since we're using "use client", we can just wait for mount to show the specific icon or use a generic one.
    // But returning null for the WHOLE component is bad.
    // Let's just return the navbar and handle the icon safely.

    return (
        <>
            <nav className="w-full sticky top-0 bg-secondary/80 backdrop-blur-md border-b border-border z-50 transition-colors duration-300">
                <div className="max-w-full mx-auto flex items-stretch justify-between h-15 pr-10">

                    {/* Left side: Logo Box / Menu Toggle */}
                    <Link href="/">
                        <div
                            className="relative h-15 md:h-40 w-25  md:w-28 ml-0 md:ml-5 group"
                        >
                            {/* 1. Original Logo  */}
                            <motion.div
                                animate="visible"
                                transition={{ duration: 0.3 }}
                                className="absolute inset-0 bg-[#002B7F] flex items-center justify-center z-10"
                                style={{
                                    clipPath: "polygon(0 0,100% 0,100% 85%,85% 100%,0 100%)"
                                }}
                            >
                                <Image
                                    src="/logo2.svg"
                                    width={80}
                                    height={80}
                                    alt='Logo'
                                    className="mt-0 md:mt-6 h-10 md:h-20 object-contain invert brightness-0"
                                />
                            </motion.div>
                            {/* 🔥 Vertical Text */}
                            <div className="absolute left-2 top-60 h-auto flex items-center">
                                <p className="rotate-180 [writing-mode:vertical-rl] 
                                    text-xs tracking-[0.4em] font-semibold text-gray-400">
                                    THE ARCHITECTURE OF IMAGINATION
                                </p>
                            </div>
                        </div>
                    </Link>

                    <div className="hidden lg:flex items-center gap-6">
                        <ul className="flex gap-10 text-[12px] uppercase tracking-[0.2em] font-extrabold text-muted-foreground">
                            {
                                rightMenuItems.map((item, i) => {
                                    const isActive = pathname === item.url

                                    return (
                                        <Link
                                            key={i}
                                            href={item.url}
                                            className={`relative font-bold hover:opacity-70 pb-1
                                            ${isActive ? "text-foreground" : ""}
                                            `}
                                        >
                                            {item.urlName}

                                            {/* underline */}
                                            <span
                                                className={`absolute left-0 -bottom-1 h-1 bg-blue-700 transition-all duration-300
                                                ${isActive ? "w-full" : "w-0"}
                                                `}
                                            ></span>
                                        </Link>
                                    )

                                })
                            }

                        </ul>
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-muted transition-colors cursor-pointer"
                            aria-label="Toggle Dark Mode"
                        >
                            {theme === 'dark' ? <Sun size={20} className="text-foreground" /> : <Moon size={20} className="text-foreground" />}
                        </button>
                    </div>
                    {/* Right side: Static Menu Links */}
                    <div className='flex items-center md:hidden'>
                        <button onClick={toggleTheme} className="mr-4 p-2 rounded-full hover:bg-muted transition-colors cursor-pointer">
                            {theme === 'dark' ? <Sun size={20} className="text-foreground" /> : <Moon size={20} className="text-foreground" />}
                        </button>
                        <button onClick={toggleMenu} className="cursor-pointer">
                            {
                                isOpen
                                    ? (<CloseIcon className="text-foreground" />)
                                    : (<MenuIcon className="text-foreground" />)
                            }
                        </button>
                    </div>
                </div>
                {/* Mobile Menu */}
                {
                    isOpen && (
                        <div className='md:hidden bg-background px-4 pt-2 pb-4 space-y-2 shadow-md border-b border-border'>
                            <ul className="flex flex-col items-end gap-10 text-[12px] uppercase tracking-[0.2em] font-extrabold text-muted-foreground">
                                {
                                    rightMenuItems.map((item, i) => {
                                        const isActive = pathname === item.url

                                        return (
                                            <Link
                                                key={i}
                                                href={item.url}
                                                className={`relative font-bold hover:opacity-70 pb-1
                                                ${isActive ? "text-foreground" : ""}`}
                                            >
                                                {item.urlName}

                                                {/* underline */}
                                                <span
                                                    className={`absolute left-0 -bottom-1 h-1 bg-blue-700 transition-all duration-300
                                                ${isActive ? "w-full" : "w-0"}
                                                `}
                                                ></span>
                                            </Link>
                                        )
                                    })
                                }

                            </ul>
                        </div>
                    )}
            </nav>
        </>
    );
};

export default Navbar;