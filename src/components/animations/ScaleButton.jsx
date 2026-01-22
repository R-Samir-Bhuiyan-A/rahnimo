"use client";

import { motion } from "framer-motion";

export const ScaleButton = ({ children, className = "", onClick, ...props }) => {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            onClick={onClick}
            className={className}
            {...props}
        >
            {children}
        </motion.button>
    );
};
