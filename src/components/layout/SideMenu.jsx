"use client";

import { motion, AnimatePresence } from "framer-motion";

function SideMenu({ open, onClose }) {
    return (
        <AnimatePresence>
            {open && (
                <>
                    {/* BACKDROP */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/40 z-40"
                    />

                    {/* MENU PANEL */}
                    <motion.aside
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="fixed top-0 left-0 h-full w-[320px] bg-white z-50 p-8"
                    >
                        <nav className="space-y-6 text-lg font-medium">
                            <ul className="flex gap-10 text-[12px] uppercase tracking-[0.2em] font-medium text-[#333]">
                                <li className="hover:opacity-70">Landscape</li>
                                <li className="hover:opacity-70">Engineering</li>
                                <li className="hover:opacity-70">Architecture</li>
                                <li className="hover:opacity-70">Planning</li>
                                <li className="hover:opacity-70">Products</li>
                            </ul>
                        </nav>
                    </motion.aside>
                </>
            )}
        </AnimatePresence>
    );
}

export default SideMenu