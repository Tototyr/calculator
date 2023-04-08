import React from 'react';
import './Calculator.css';

import { useCalculator } from '../hooks/useCalculator';
import { Action } from '../buttons/Action';

export const Calculator = () => {
    const {
        result,
        history,
        handleNumberClick,
        handlePlusMinusClick,
        handleOperationClick,
        handleClearClick,
        handlePrecentClick,
        handleEqualClick,
        handleBackspaceClick,
        getResult,
    } = useCalculator();

    return (
        <div className="container mx-auto px-3 py-4 grid grid-cols-4 gap-1">
            <div className="history col-span-4 mb-2 text-4xl font-bold text-right">
                {history.map((calculation, index) => (
                    <div className="history" key={index}>
                        {calculation.previousValue} {calculation.operation}{' '}
                        {calculation.currentValue} = {getResult(calculation)}
                    </div>
                ))}
            </div>
            <div className="result col-span-4 mb-4 text-4xl font-bold text-right">{result}</div>
            <Action className="button button-gray text-2xl" onClick={handleClearClick}>
                C
            </Action>
            <Action className="button button-gray text-2xl" onClick={handlePlusMinusClick}>
                +/-
            </Action>
            <Action className="button button-gray text-2xl" onClick={handlePrecentClick}>
                %
            </Action>
            <Action
                className="button button-blue text-2xl"
                onClick={handleOperationClick}
                value={'/'}
            >
                /
            </Action>
            <Action className="button text-2xl" onClick={handleNumberClick} value={7}>
                7
            </Action>
            <Action className="button text-2xl" onClick={handleNumberClick} value={8}>
                8
            </Action>
            <Action className="button text-2xl" onClick={handleNumberClick} value={9}>
                9
            </Action>
            <Action
                className="button button-blue text-2xl"
                onClick={handleOperationClick}
                value={'*'}
            >
                *
            </Action>
            <Action className="button text-2xl" onClick={handleNumberClick} value={4}>
                4
            </Action>
            <Action className="button text-2xl" onClick={handleNumberClick} value={5}>
                5
            </Action>
            <Action className="button text-2xl" onClick={handleNumberClick} value={6}>
                6
            </Action>
            <Action
                className="button button-blue text-2xl"
                onClick={handleOperationClick}
                value={'-'}
            >
                -
            </Action>
            <Action className="button text-2xl" onClick={handleNumberClick} value={1}>
                1
            </Action>
            <Action className="button text-2xl" onClick={handleNumberClick} value={2}>
                2
            </Action>
            <Action className="button text-2xl" onClick={handleNumberClick} value={3}>
                3
            </Action>
            <Action
                className="button button-blue text-2xl"
                onClick={handleOperationClick}
                value={'+'}
            >
                +
            </Action>
            <Action className="button text-2xl" onClick={handleNumberClick} value={'.'}>
                .
            </Action>
            <Action className="button text-2xl" onClick={handleNumberClick} value={0}>
                0
            </Action>
            <Action className="button text-2xl" onClick={handleBackspaceClick}>
                del
            </Action>
            <Action className="button button-blue text-2xl" onClick={handleEqualClick}>
                =
            </Action>
        </div>
    );
};
