import React, { useState, useEffect } from 'react';
import './Calculator.css'; 

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState('');

  // Set default popup visibility on app startup
  useEffect(() => {
    setOperation('No Operation Selected'); 
  }, []);

  const handleCalculation = () => {
    if (!num1 || !num2 || !operation || operation === 'No Operation Selected') return;

    const a = parseFloat(num1);
    const b = parseFloat(num2);
    let calcResult;

    switch (operation) {
      case 'add':
        calcResult = a + b;
        break;
      case 'subtract':
        calcResult = a - b;
        break;
      case 'multiply':
        calcResult = a * b;
        break;
      case 'divide':
        calcResult = b !== 0 ? a / b : 'Error: Division by zero';
        break;
      default:
        calcResult = 'Invalid Operation';
    }

    setResult(calcResult.toString());
  };

  const getOperationText = () => {
    switch (operation) {
      case 'add':
        return 'Addition';
      case 'subtract':
        return 'Subtraction';
      case 'multiply':
        return 'Multiplication';
      case 'divide':
        return 'Division';
      default:
        return operation; // Default to "No Operation Selected"
    }
  };

  return (
    <div className="calculator-container">
      {/* Header Section */}
      <div>
        {/* Display selected operation popup */}
        <div className="operation-popup">
          <p>Selected Operation:</p>
          <p>{getOperationText()}</p>
        </div>
      </div>

      {/* Input Section */}
      <div className="input-section">
        <input
          type="number"
          placeholder="Number 1"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          className="number-input"
        />
        <input
          type="number"
          placeholder="Number 2"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          className="number-input"
        />
      </div>

      {/* Buttons for Selecting Operations */}
      <div className="operation-buttons">
        <button onClick={() => setOperation('add')}>Add</button>
        <button onClick={() => setOperation('subtract')}>Subtract</button>
        <button onClick={() => setOperation('multiply')}>Multiply</button>
        <button onClick={() => setOperation('divide')}>Divide</button>
      </div>

      {/* Calculate Button */}
      <div className="calculate-button">
        <button onClick={handleCalculation}>Calculate</button>
      </div>

       {/* Result Section */}
       <div className="result-section">
        <p>Result:</p>
        <div className={`result-box ${result.length > 17 ? 'expanded' : ''}`}>
          {result}
        </div>
      </div>
    </div>
  );
}

export default Calculator;
