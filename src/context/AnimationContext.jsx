"use client";
import React, { createContext, useContext, useState } from 'react';

const AnimationContext = createContext({
    animationsEnabled: true,
    toggleAnimations: () => { },
});

export const AnimationProvider = ({ children }) => {
    const [animationsEnabled, setAnimationsEnabled] = useState(true);

    const toggleAnimations = () => {
        setAnimationsEnabled((prev) => !prev);
    };

    return (
        <AnimationContext.Provider value={{ animationsEnabled, toggleAnimations }}>
            {children}
        </AnimationContext.Provider>
    );
};

export const useAnimation = () => useContext(AnimationContext);
