import React, { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState('');

  const handleCalculation = () => {
    if (!num1 || !num2 || !operation) return;

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
        return 'No Operation Selected';
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <div>
        {operation && (
          <div
            style={{
              marginTop: '10px',
              backgroundColor: 'darkgrey',
              color: 'red',
              padding: '10px',
              borderRadius: '5px',
              display: 'inline-block',
            }}
          >
            <p>Selected Operation:</p>
            <p>{getOperationText()}</p>
          </div>
        )}
      </div>
      <div style={{ marginTop: '20px' }}>
        <input
          type="number"
          placeholder="Number 1"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          style={{
            margin: '5px',
            width: '50%', // Limit width to half of the screen
            maxWidth: '300px', // Set a maximum width for larger screens
            minWidth: '150px', // Set a minimum width for smaller screens
          }}
        />
        <input
          type="number"
          placeholder="Number 2"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          style={{
            margin: '5px',
            width: '50%', // Limit width to half of the screen
            maxWidth: '300px', // Set a maximum width for larger screens
            minWidth: '150px', // Set a minimum width for smaller screens
          }}
        />
      </div>
      <div style={{ marginTop: '10px' }}>
        <button onClick={() => setOperation('add')}>Add</button>
        <button onClick={() => setOperation('subtract')}>Subtract</button>
        <button onClick={() => setOperation('multiply')}>Multiply</button>
        <button onClick={() => setOperation('divide')}>Divide</button>
      </div>
      <div style={{ marginTop: '10px' }}>
        <button onClick={handleCalculation}>Calculate</button>
      </div>
      <div style={{ marginTop: '20px', fontSize: '20px' }}>
        <p>Result:</p>
        <div
          style={{
            maxWidth: '90%', // Makes it responsive to screen size
            width: result.length > 17 ? '400px' : '300px',
            height: result.length > 17 ? '150px' : '100px',
            margin: '0 auto',
            border: '1px solid #ddd',
            borderRadius: '5px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 'calc(16px + 1vw)', // Adapts to screen size
            backgroundColor: '#f9f9f9',
            transition: 'all 0.3s ease',
            overflowWrap: 'break-word',
          }}
        >
          {result}
        </div>
      </div>
    </div>
  );
}

export default Calculator;
