"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("system");
    const [mounted, setMounted] = useState(false);

    // Initial hydration fix & load from storage
    useEffect(() => {
        setMounted(true);
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    // Apply theme to document
    useEffect(() => {
        if (!mounted) return;

        const root = document.documentElement;
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

        const applyTheme = () => {
            let effectiveTheme = theme;
            if (theme === "system") {
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

        if (theme === "system") {
            mediaQuery.addEventListener("change", applyTheme);
        }

        // Persist to localStorage
        if (theme !== "system") {
            localStorage.setItem("theme", theme);
        } else {
            localStorage.removeItem("theme");
        }

        return () => {
            if (theme === "system") {
                mediaQuery.removeEventListener("change", applyTheme);
            }
        };
    }, [theme, mounted]);

    const toggleTheme = () => {
        setTheme((prev) => {
            // cycle: light -> dark -> system -> light ... or just light <-> dark?
            // User asked for "turn on off", implying a toggle. 
            // Usually, simple toggle is better: if system/light -> dark, if dark -> light.

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

    // prevent hydration mismatch by not rendering theme-dependent children until mounted
    // OR render them but accept they might flickr. 
    // Better UX: render standard, let client patch it up. 
    // But since we are using 'dark' class on HTML tag, we need to be careful.

    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, mounted }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);
