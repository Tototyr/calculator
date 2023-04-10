import React from 'react';
import cn from 'classnames';

import './Layout.css';
import { useTheme } from '../../providers/ThemeProvide';

export const Layout = ({ children }) => {
    const { isLight, toggleTheme } = useTheme();

    return (
        <div
            className={cn('layout', {
                light: isLight,
                dark: !isLight,
            })}
        >
            <button className="change-button" onClick={toggleTheme}>
                Toggle Theme
            </button>
            {children}
        </div>
    );
};
