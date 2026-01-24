"use client";

import { motion } from "framer-motion";
import { useAnimation } from "../../context/AnimationContext";

export const Reveal = ({ children, className = "", width = "fit-content", delay = 0 }) => {
    const { animationsEnabled } = useAnimation();

    return (
        <div style={{ position: "relative", width, overflow: "hidden" }} className={className}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial={animationsEnabled ? "hidden" : "visible"}
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </div>
    );
};
