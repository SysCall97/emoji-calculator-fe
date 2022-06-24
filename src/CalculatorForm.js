import React, { useState } from 'react';
import './CalculatorForm.css'

const CalculatorForm = () => {
    const options = {
        "👽": "+",
        "💀": "-",
        "👻": "*",
        "😱": "/"
    }
    const emojis = Object.keys(options);
    const [input1, setInput1] = useState(0);
    const [input2, setInput2] = useState(0);
    const [result, setResult] = useState(0);
    const [isDivisionByZeroErrorOccured, setIsDivisionByZeroErrorOccured] = useState(false);
    const [operation, setOperation] = useState("+");
    const handleCalculate = () => {
        let val;
        setIsDivisionByZeroErrorOccured(false);
        switch(operation) {
            case "+": {
                val = input1 + input2;
                break;
            }
            case "-": {
                val = input1 - input2;
                break;
            }
            case "*": {
                val = input1 * input2;
                break;
            }
            case "/": {
                if(input2 === 0) setIsDivisionByZeroErrorOccured(true);
                else val = input1 / input2;
                break;
            }
            default: {
                break;
            }
        }
        setResult(val);
    }

    return (
        <div className='container'>
            <div className='formWrapper'>
                <div>
                    <input type="number" value={input1} onInput={ e => setInput1(Number(e.target.value))} />
                </div>
                <div>
                    <select value={operation} onChange={ e => setOperation(e.target.value) }>
                        {
                            emojis.map((emoji, index) => <option key={index} value={options[emoji]}> {emoji} </option>)
                        }
                    </select>
                </div>
                <div>
                    <input type="number" value={input2} onInput={ e => setInput2(Number(e.target.value))} />
                </div>
                <div>
                    <button onClick={handleCalculate}>Calculate</button>
                </div>
            </div>
            <div className='resultArea'>
                {
                    !isDivisionByZeroErrorOccured &&
                    <p> Result: {result} </p>
                }
                {
                        isDivisionByZeroErrorOccured && 
                        <p className='errorMsg'>
                            *Cannot divide by zero
                        </p>
                }
            </div>
        </div>
    );
};

export default CalculatorForm;