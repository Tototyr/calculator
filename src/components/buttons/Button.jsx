import React from 'react';

function Button({ onClick, value, className, children }) {
    return (
        <button className={className} onClick={() => onClick(value)}>
            {children}
        </button>
    );
}

export default Button;
