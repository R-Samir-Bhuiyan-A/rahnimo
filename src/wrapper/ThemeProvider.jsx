"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

// Option A: temporary force light-only mode
const FORCE_LIGHT = true; // set to false to restore normal behavior

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("system");
    const [mounted, setMounted] = useState(false);

    // Initial hydration fix & load from storage
    useEffect(() => {
        setMounted(true);
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) setTheme(savedTheme);
    }, []);

    // Apply theme to document
    useEffect(() => {
        if (!mounted) return;

        const root = document.documentElement;
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

        const applyTheme = () => {
            let effectiveTheme = theme;

            if (FORCE_LIGHT) {
                effectiveTheme = "light";
            } else if (theme === "system") {
                effectiveTheme = mediaQuery.matches ? "dark" : "light";
            }

            if (effectiveTheme === "dark") {
                root.classList.add("dark");
                root.style.colorScheme = "dark";
            } else {
                root.classList.remove("dark");
                root.style.colorScheme = "light";
            }
        };

        applyTheme();

        // Only listen to system changes when system mode is active AND not forced light
        if (!FORCE_LIGHT && theme === "system") {
            mediaQuery.addEventListener("change", applyTheme);
        }

        // Persist to localStorage (keep your original logic)
        // Note: when FORCE_LIGHT=true, user changes don't visually apply, but we still store them
        // so when you flip FORCE_LIGHT=false later, their preference is there.
        if (theme !== "system") {
            localStorage.setItem("theme", theme);
        } else {
            localStorage.removeItem("theme");
        }

        return () => {
            if (!FORCE_LIGHT && theme === "system") {
                mediaQuery.removeEventListener("change", applyTheme);
            }
        };
    }, [theme, mounted]);

    const toggleTheme = () => {
        setTheme((prev) => {
            let newTheme;
            if (prev === "system") {
                const isSystemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                newTheme = isSystemDark ? "light" : "dark";
            } else {
                newTheme = prev === "dark" ? "light" : "dark";
            }
            return newTheme;
        });
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, mounted, FORCE_LIGHT }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);
