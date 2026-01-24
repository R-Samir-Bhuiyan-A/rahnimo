"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { usePathname } from 'next/navigation';
import { useTheme } from '../../wrapper/ThemeProvider';
import { useAnimation } from '../../context/AnimationContext';


const rightMenuItems = [
    { urlName: "About", url: "/about" },
    { urlName: "Work", url: "/work" },
    { urlName: "Team", url: "/team" },
    { urlName: "Contact", url: "/contact" },
    { urlName: "FAQ", url: "/faq" }
];


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen)
    const pathname = usePathname()
    const { theme, toggleTheme, mounted } = useTheme();
    const { animationsEnabled } = useAnimation();

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
                                    alt='Rahnimo Logo'
                                    className="mt-0 md:mt-6 h-10 md:h-20 object-contain invert brightness-0"
                                />
                            </motion.div>
                            {/* 🔥 Vertical Text */}
                            <div className="absolute left-2 top-68 h-auto flex items-center">
                                <motion.p
                                    initial={animationsEnabled ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="rotate-180 [writing-mode:vertical-rl]
                                    text-[18px] tracking-[0.4em] font-semibold text-foreground">
                                    THE ARCHITECTURE OF IMAGINATION
                                </motion.p>
                            </div>
                        </div>
                    </Link>

                    <div className="hidden lg:flex items-center gap-6">
                        <ul className="flex gap-10 text-[12px] uppercase tracking-[0.2em] font-extrabold text-foreground">
                            {
                                rightMenuItems.map((item, i) => {
                                    const isActive = pathname === item.url

                                    return (
                                        <li key={i}>
                                            <Link
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
                                        </li>
                                    )

                                })
                            }

                        </ul>
                    </div>
                    {/* Right side: Static Menu Links - Mobile Only */}
                    <div className='flex items-center md:hidden'>
                        <button
                            onClick={toggleMenu}
                            className="cursor-pointer"
                            aria-label={isOpen ? "Close menu" : "Open menu"}
                        >
                            {
                                isOpen
                                    ? (<CloseIcon className="text-foreground" />)
                                    : (<MenuIcon className="text-foreground" />)
                            }
                        </button>
                    </div>
                </div >
                {/* Mobile Menu */}
                {
                    isOpen && (
                        <div className='md:hidden bg-background px-4 pt-2 pb-4 space-y-2 shadow-md border-b border-border'>
                            <ul className="flex flex-col items-end gap-10 text-[12px] uppercase tracking-[0.2em] font-extrabold text-foreground">
                                {
                                    rightMenuItems.map((item, i) => {
                                        const isActive = pathname === item.url

                                        return (
                                            <li key={i}>
                                                <Link
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
                                            </li>
                                        )
                                    })
                                }

                            </ul>
                        </div>
                    )
                }
            </nav >
        </>
    );
};

export default Navbar;