"use client";

import { motion } from "framer-motion";

export const Reveal = ({ children, className = "", width = "fit-content", delay = 0 }) => {
    return (
        <div style={{ position: "relative", width, overflow: "hidden" }} className={className}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </div>
    );
};
