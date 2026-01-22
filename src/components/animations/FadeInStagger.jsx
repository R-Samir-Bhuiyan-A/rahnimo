"use client";

import { motion } from "framer-motion";

export const FadeInStagger = ({ children, className = "", staggerDelay = 0.1 }) => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: staggerDelay
            }
        }
    };

    return (
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const FadeInItem = ({ children, className = "" }) => {
    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <motion.div variants={item} className={className}>
            {children}
        </motion.div>
    );
};
