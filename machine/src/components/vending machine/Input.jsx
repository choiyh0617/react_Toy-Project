import React, { useState } from 'react';

const Input = () => {
    const [inputValue, setInputValue] = useState('');

    const test = () => {
        console.log(inputValue)
    } 

    const Update = (event) => {
        setInputValue(event.target.value);
    }
    return (
        <div>
            <span>
                <input type="number" placeholder='입금액 입력' value={inputValue} onChange={Update}/>
                <button onClick={test}>입금</button>
            </span>
            
            <span>
                <div>잔액 : {inputValue}</div>
                <button>거스름돈 반환</button>
            </span>
        </div>
    );
};

export default Input;