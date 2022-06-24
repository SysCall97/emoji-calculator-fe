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
    const [operation, setOperation] = useState("+");
    const [isError, setIsError] = useState(false);
    const [errorList, setErrorList] = useState([]);
    const handleCalculate = () => {
        let status;
        fetch('http://127.0.0.1:8000/api/calculate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({input1, input2, operation})
        }).then(async res => {
            status = res.status;
            return res.json();
        }).then(data => {
            if(status === 200) {
                setIsError(false);
                setErrorList([])
                setResult(data.data);
            } else {
                const errors = Object.values(data.errors).map(item => item[0]);
                setIsError(true);
                setErrorList(errors);
            }
        });
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
                    !isError &&
                    <p> Result: {result} </p>
                }
                {
                        isError && 
                        <ul className='errorMsg'>
                            {
                                errorList.map((err, ind) => <li key={ind}>{err}</li>)
                            }
                        </ul>
                }
            </div>
        </div>
    );
};

export default CalculatorForm;