import React from 'react';
import './Action.css';

export const Action = ({ onClick, value, className, children }) => {
    const handleClick = () => {
        if (value) {
            onClick(value);
        } else {
            onClick();
        }
    };

    return (
        <button className={className} onClick={handleClick}>
            {children}
        </button>
    );
};
