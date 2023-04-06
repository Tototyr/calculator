import { createContext, useState } from 'react';

export const ThemeContext = createContext({
    isLight: true,
    toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
    const [isLight, setIsLight] = useState(true);

    const toggleTheme = () => setIsLight(!isLight);

    const value = { isLight, toggleTheme };

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
