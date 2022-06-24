import React from 'react';
import './CalculatorForm.css';

const ShowResult = (props) => {
    const {isError, result, errorList} = props;
    return (
        <div>
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
    );
};

export default ShowResult;