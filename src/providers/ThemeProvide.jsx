import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext({
    isLight: true,
    toggleTheme: () => {},
});

export const useTheme = () => {
    const value = useContext(ThemeContext);
    return value;
};

export const ThemeProvider = ({ children }) => {
    const [isLight, setIsLight] = useState(true);

    const toggleTheme = () => setIsLight(!isLight);

    const value = { isLight, toggleTheme };

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
