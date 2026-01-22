"use client";

import React from "react";
import Button from "@mui/material/Button";
import { AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

const ErrorState = ({ message = "Something went wrong.", onRetry }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-20 px-4 text-center border border-dashed border-border rounded-2xl bg-muted/20"
        >
            <div className="bg-destructive/10 p-4 rounded-full mb-4">
                <AlertCircle size={40} className="text-destructive" />
            </div>

            <h3 className="text-xl font-bold text-foreground mb-2">
                Unable to Load Content
            </h3>

            <p className="text-muted-foreground max-w-md mb-8">
                {message || "We couldn't fetch the data at this time. Please check your connection or try again."}
            </p>

            {onRetry && (
                <Button
                    onClick={onRetry}
                    variant="contained"
                    sx={{
                        backgroundColor: "var(--color-primary)",
                        color: "var(--color-primary-foreground)"
                    }}
                >
                    Try Again
                </Button>
            )}
        </motion.div>
    );
};

export default ErrorState;
