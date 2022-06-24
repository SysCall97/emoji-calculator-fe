import React, { useState } from 'react';
import Input from './Input';
import Select from './Select';
import './CalculatorForm.css';
import ShowResult from './ShowResult';

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
        }).then(res => {
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
                <Input type="number" val={input1} setInput={setInput1} />
                <Select val={operation} setVal={setOperation} emojis={emojis} options={options} />
                <Input type="number" val={input2} setInput={setInput2} />
                <div>
                    <button onClick={handleCalculate}>Calculate</button>
                </div>
            </div>
            <ShowResult isError={isError} result={result} errorList={errorList} />
        </div>
    );
};

export default CalculatorForm;