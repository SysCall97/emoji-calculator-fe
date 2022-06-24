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
    const [operation, setOperation] = useState("+");
    const handleCalculate = () => {
        let val;
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
                val = input1 / input2;
                break;
            }
        }
        setResult(val);
    }
    return (
        <div>
            <input type="number" value={input1} onInput={ e => setInput1(Number(e.target.value))} />
            <select value={operation} onChange={ e => setOperation(e.target.value) }>
                {
                    emojis.map((emoji, index) => <option key={index} value={options[emoji]}> {emoji} </option>)
                }
            </select>
            <input type="number" value={input2} onInput={ e => setInput2(Number(e.target.value))} />
            <button onClick={handleCalculate}>Calculate</button>
            <p>
                {result}
            </p>
        </div>
    );
};

export default CalculatorForm;