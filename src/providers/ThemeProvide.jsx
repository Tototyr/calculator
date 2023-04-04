import { createContext, useState } from 'react';

export const ThemeContext = createContext({ isLight: false });

export const ThemeProvider = ({ children }) => {
    const [isLight, setisLight] = useState(false);

    const value = { isLight, setisLight };

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
