import { useState } from 'react';

export const useCalculator = () => {
    const [result, setResult] = useState('0');
    const [operation, setOperation] = useState(null);
    const [previousValue, setPreviousValue] = useState(null);
    const [history, setHistory] = useState([]);

    const handleNumberClick = (number) => {
        if (result === 0 && number !== '.') {
            setResult(parseFloat(number));
        } else if (number === '.' && result.toString().indexOf('.') === -1) {
            setResult(`${result}${number}`);
        } else if (number !== '.' && result !== 0) {
            setResult(parseFloat(`${result}${number}`));
        } else if (number !== '.' && result === 0) {
            setResult(parseFloat(number));
        }
    };

    const handlePlusMinusClick = () => {
        setResult(parseInt(result) * -1);
    };

    const handleOperationClick = (operation) => {
        setPreviousValue(result);
        setResult(0);
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
            return (previousValue + currentValue).toFixed(3);
        } else if (operation === '-') {
            return (previousValue - currentValue).toFixed(3);
        } else if (operation === '*') {
            return (previousValue * currentValue).toFixed(3);
        } else if (operation === '/') {
            if (currentValue === 0) {
                return '0';
            } else {
                return (previousValue / currentValue).toFixed(3);
            }
        }
    };

    const handleEqualClick = () => {
        const currentValue = parseFloat(result);

        let calculation = {
            previousValue: previousValue,
            operation: operation,
            currentValue: currentValue,
        };

        if (operation === '+') {
            setResult(previousValue + currentValue);
        } else if (operation === '-') {
            setResult(previousValue - currentValue);
        } else if (operation === '*') {
            setResult(previousValue * currentValue);
        } else if (operation === '/') {
            if (currentValue === 0) {
                setResult(0);
            } else {
                setResult(previousValue / currentValue);
            }
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
