import React, { useState } from 'react';

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
        }
        setResult(val);
    }

    return (
        <div className='formWrapper'>
            <input type="number" value={input1} onInput={ e => setInput1(Number(e.target.value))} />
            <select value={operation} onChange={ e => setOperation(e.target.value) }>
                {
                    emojis.map((emoji, index) => <option key={index} value={options[emoji]}> {emoji} </option>)
                }
            </select>
            <input type="number" value={input2} onInput={ e => setInput2(Number(e.target.value))} />
            {
                isDivisionByZeroErrorOccured && 
                <p style={{color: "red"}}>
                    *Cannot divide by zero
                </p>
            }
            <button onClick={handleCalculate}>Calculate</button>
            {
                !isDivisionByZeroErrorOccured &&
                <p>
                    {result}
                </p>
            }
            
        </div>
    );
};

export default CalculatorForm;