import React from 'react';

const Select = (props) => {
    const {val, setVal, emojis, options} = props;
    return (
        <div>
            <select value={val} onChange={ e => setVal(e.target.value) }>
                {
                    emojis.map((emoji, index) => <option key={index} value={options[emoji]}> {emoji} </option>)
                }
            </select>
        </div>
    );
};

export default Select;