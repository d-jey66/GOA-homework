import React, { useState } from 'react';

const Calculator = () => {
  const [result, setResult] = useState('');
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('+');

  const calculate = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    let res;

    switch (operator) {
      case '+':
        res = a + b;
        break;
      case '-':
        res = a - b;
        break;
      case '*':
        res = a * b;
        break;
      case '/':
        res = b !== 0 ? a / b : 'Error';
        break;
      default:
        res = 'Invalid Operation';
    }
    setResult(res);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-gray-100 rounded-lg mt-[20%]">
      <input 
        type="number" 
        value={num1} 
        onChange={(e) => setNum1(e.target.value)} 
        placeholder="Number 1"
        className="p-2 border border-gray-300 rounded-md"
      />
      <select 
        value={operator} 
        onChange={(e) => setOperator(e.target.value)} 
        className="p-2 border border-gray-300 rounded-md"
      >
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input 
        type="number" 
        value={num2} 
        onChange={(e) => setNum2(e.target.value)} 
        placeholder="Number 2"
        className="p-2 border border-gray-300 rounded-md"
      />
      <button 
        onClick={calculate} 
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Calculate
      </button>
      <p className="text-xl font-semibold">Result: {result}</p>
    </div>
  );
};

export default Calculator;
