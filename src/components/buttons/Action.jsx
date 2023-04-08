import React from 'react';
import './Action.css';

export const Action = ({ onClick, value, className, children }) => {
    const handleClick = () => {
        onClick(value);
    };

    return (
        <button className={className} onClick={handleClick}>
            {children}
        </button>
    );
};
