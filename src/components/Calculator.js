import React from "react";
import { useState } from "react";

function Calculator() {
    const [calc, setCalc] = useState('');
    const [result, setResult] = useState('');

    const opps = ['/', '*', '+', '-', '.'];

    // set value calc in click
    const updateCalc = (value) => {
        if (
            opps.includes(value) && calc === '' ||
            opps.includes(value) && opps.includes(calc.slice(-1))
        ) {
            return;
        }

        setCalc(calc + value);

        if (!opps.includes(value)) {
            setResult(eval(calc + value).toString());
        }
    }

    const createDigits = () => {
        // array save number
        const digits = [];
        
        // push number
        for (let i = 0; i < 10; i++) {
            digits.push(
                <button 
                    onClick={()=> updateCalc(i.toString())}
                    key={i}>
                    {i}
                </button>
            )
        }

        return digits;
    }

    const calculator = () => {
        setCalc(eval(calc).toString());
    }

    const deleteLast = () => {
        if (calc == '') {
            return;
        }
        const value = calc.slice(0, -1);

        setCalc(value);
    }

  return (
      <div className="calculator">
        <div className="display">
            {calc || '0'}
        </div>

        <div className="operators">
          <button onClick={()=> updateCalc('+')}>+</button>
          <button onClick={()=> updateCalc('-')}>-</button>
          <button onClick={()=> updateCalc('*')}>*</button>
          <button onClick={()=> updateCalc('/')}>/</button>

          <button onClick={()=> deleteLast()}>DEL</button>
        </div>
            <div className="digits">
            {createDigits()}
            <button onClick={()=> updateCalc('.')}>.</button>
            <button onClick={()=> calculator()}>=</button>
        </div>
      </div>
  );
}

export default Calculator;