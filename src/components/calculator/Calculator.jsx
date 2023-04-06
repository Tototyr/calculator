import React from 'react';
import './Calculator.css';

import { useCalculator } from '../hooks/useCalculator';
import Button from '../buttons/Button';

export const Calculator = () => {
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
            <div className="history col-span-4 mb-2 text-4xl font-bold text-right">
                {history.map((calculation, index) => (
                    <div className="history" key={index}>
                        {calculation.previousValue} {calculation.operation}{' '}
                        {calculation.currentValue} = {getResult(calculation)}
                    </div>
                ))}
            </div>
            <div className="result col-span-4 mb-4 text-4xl font-bold text-right">{result}</div>
            <Button className="button button-gray text-2xl" onClick={handleClearClick}>
                C
            </Button>
            <Button className="button button-gray text-2xl" onClick={handlePlusMinusClick}>
                +/-
            </Button>
            <Button className="button button-gray text-2xl" onClick={handlePrecentClick}>
                %
            </Button>
            <Button
                className="button button-blue text-2xl"
                onClick={handleOperationClick}
                value={'/'}
            >
                /
            </Button>
            <Button className="button text-2xl" onClick={handleNumberClick} value={7}>
                7
            </Button>
            <Button className="button text-2xl" onClick={handleNumberClick} value={8}>
                8
            </Button>
            <Button className="button text-2xl" onClick={handleNumberClick} value={9}>
                9
            </Button>
            <Button
                className="button button-blue text-2xl"
                onClick={handleOperationClick}
                value={'*'}
            >
                *
            </Button>
            <Button className="button text-2xl" onClick={handleNumberClick} value={4}>
                4
            </Button>
            <Button className="button text-2xl" onClick={handleNumberClick} value={5}>
                5
            </Button>
            <Button className="button text-2xl" onClick={handleNumberClick} value={6}>
                6
            </Button>
            <Button
                className="button button-blue text-2xl"
                onClick={handleOperationClick}
                value={'-'}
            >
                -
            </Button>
            <Button className="button text-2xl" onClick={handleNumberClick} value={1}>
                1
            </Button>
            <Button className="button text-2xl" onClick={handleNumberClick} value={2}>
                2
            </Button>
            <Button className="button text-2xl" onClick={handleNumberClick} value={3}>
                3
            </Button>
            <Button
                className="button button-blue text-2xl"
                onClick={handleOperationClick}
                value={'+'}
            >
                +
            </Button>
            <Button className="button text-2xl" onClick={handleNumberClick} value={'.'}>
                .
            </Button>
            <Button className="button text-2xl" onClick={handleNumberClick} value={'0'}>
                0
            </Button>
            <Button className="button text-2xl" onClick={handleBackspaceClick}>
                del
            </Button>
            <Button className="button button-blue text-2xl" onClick={handleEqualClick}>
                =
            </Button>
        </div>
    );
};
