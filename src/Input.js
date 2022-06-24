import React from 'react';

const Input = (props) => {
    const { type, val, setInput } = props;
    return (
        <div>
            <input type={type} value={val} onInput={ e => setInput(Number(e.target.value))} />
        </div>
    );
};

export default Input;