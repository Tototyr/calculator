import { useState } from 'react';

export const useCalculator = () => {
    const [result, setResult] = useState('0');
    const [operation, setOperation] = useState(null);
    const [previousValue, setPreviousValue] = useState(null);
    const [history, setHistory] = useState([]);

    const handleNumberClick = (number) => {
        if (result === '0') {
            setResult(number);
        } else if (number === '.' && result.indexOf('.') === -1) {
            setResult(`${result}${number}`);
        } else if (number !== '.') {
            setResult(`${result}${number}`);
        }
    };

    const handlePlusMinusClick = () => {
        setResult((parseFloat(result) * -1).toString());
    };

    const handleOperationClick = (operation) => {
        setPreviousValue(parseInt(result));
        setResult('0');
        setOperation(operation);
    };

    const handleClearClick = () => {
        setResult('0');
        setOperation(null);
        setPreviousValue(null);
        setHistory([]);
    };

    const handlePrecentClick = () => {
        setResult(result / 100);
    };

    const getResult = (calculation) => {
        const { previousValue, operation, currentValue } = calculation;

        if (operation === '+') {
            return Math.round(previousValue + currentValue);
        } else if (operation === '-') {
            return Math.round(previousValue - currentValue);
        } else if (operation === '*') {
            return Math.round(previousValue * currentValue);
        } else if (operation === '/') {
            return Math.round(previousValue / currentValue);
        }
    };

    const handleEqualClick = () => {
        const currentValue = parseInt(result);

        let calculation = {
            previousValue: previousValue,
            operation: operation,
            currentValue: currentValue,
        };

        if (operation === '+') {
            setResult(Math.round(previousValue + currentValue));
        } else if (operation === '-') {
            setResult(Math.round(previousValue - currentValue));
        } else if (operation === '*') {
            setResult(Math.round(previousValue * currentValue));
        } else if (operation === '/') {
            setResult(Math.round(previousValue / currentValue));
        }

        setOperation(null);
        setPreviousValue(null);

        setHistory([calculation]);
    };

    const handleBackspaceClick = () => {
        if (result.length > 1) {
            setResult(result.slice(0, -1));
        } else {
            setResult('0');
        }
    };

    return {
        result,
        operation,
        previousValue,
        history,
        handleNumberClick,
        handlePlusMinusClick,
        handleOperationClick,
        handleClearClick,
        handlePrecentClick,
        getResult,
        handleEqualClick,
        handleBackspaceClick,
    };
};
