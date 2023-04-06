import React from 'react';
import cn from 'classnames';
import { useTheme } from '../hooks/useTheme';

export const Layout = ({ children }) => {
    const { isLight, toggleTheme } = useTheme();

    return (
        <div
            className={cn('layout', {
                light: isLight,
                dark: !isLight,
            })}
        >
            <button onClick={toggleTheme}>Toggle Theme</button>
            {children}
        </div>
    );
};
