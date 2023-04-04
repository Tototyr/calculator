import React, { useContext, useState } from 'react';
import './Calculator.css';

import { useTheme } from '../hooks/useTheme';
import { useCalculator } from '../hooks/useCalculator';

export const Calculator = () => {
    const { isLight, setisLight } = useTheme();

    const toggleTheme = () => {
        setisLight(!isLight);
    };
    const {
        result,
        history,
        handleNumberClick,
        handlePlusMinusClick,
        handleOperationClick,
        handleClearClick,
        handlePrecentClick,
        getResult,
        handleEqualClick,
        handleBackspaceClick,
    } = useCalculator();

    return (
        <div className="container mx-auto px-3 py-4 grid grid-cols-4 gap-1">
            <button
                className="switch col-span-4 text-1xl font-bold text-right"
                onClick={toggleTheme}
            >
                Change theme
            </button>
            <div className="history col-span-4 mb-2 text-4xl font-bold text-right">
                {history.map((calculation, index) => (
                    <div className="history" key={index}>
                        {calculation.previousValue} {calculation.operation}{' '}
                        {calculation.currentValue} = {getResult(calculation)}
                    </div>
                ))}
            </div>
            <div className="result col-span-4 mb-4 text-4xl font-bold text-right">{result}</div>
            <button className="button button-gray text-2xl" onClick={() => handleClearClick()}>
                C
            </button>
            <button className="button button-gray text-2xl" onClick={() => handlePlusMinusClick()}>
                +/-
            </button>
            <button className="button button-gray text-2xl" onClick={() => handlePrecentClick()}>
                %
            </button>
            <button
                className="button button-blue text-2xl"
                onClick={() => handleOperationClick('/')}
            >
                /
            </button>
            <button className="button text-2xl" onClick={() => handleNumberClick(7)}>
                7
            </button>
            <button className="button text-2xl" onClick={() => handleNumberClick(8)}>
                8
            </button>
            <button className="button text-2xl" onClick={() => handleNumberClick(9)}>
                9
            </button>
            <button
                className="button button-blue text-2xl"
                onClick={() => handleOperationClick('*')}
            >
                x
            </button>
            <button className="button text-2xl" onClick={() => handleNumberClick(4)}>
                4
            </button>
            <button className="button text-2xl" onClick={() => handleNumberClick(5)}>
                5
            </button>
            <button className="button text-2xl" onClick={() => handleNumberClick(6)}>
                6
            </button>
            <button
                className="button button-blue text-2xl"
                onClick={() => handleOperationClick('-')}
            >
                -
            </button>
            <button className="button text-2xl" onClick={() => handleNumberClick(1)}>
                1
            </button>
            <button className="button text-2xl" onClick={() => handleNumberClick(2)}>
                2
            </button>
            <button className="button text-2xl" onClick={() => handleNumberClick(3)}>
                3
            </button>
            <button
                className="button button-blue text-2xl"
                onClick={() => handleOperationClick('+')}
            >
                +
            </button>
            <button className="button text-2xl" onClick={() => handleNumberClick('.')}>
                .
            </button>
            <button className="button text-2xl" onClick={() => handleNumberClick(0)}>
                0
            </button>
            <button className="button text-2xl" onClick={() => handleBackspaceClick()}>
                del
            </button>
            <button className="button button-blue text-2xl" onClick={() => handleEqualClick()}>
                =
            </button>
        </div>
    );
};
