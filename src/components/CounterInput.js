import { useState } from 'react';

function CounterInput({label, name, value, className}) {
    const [count, setCount] = useState(value ? parseInt(value) : 0);

    function handleIncreaseClick() {
        let number = count + 1
        setCount(number);
    }
    function handleDecreaseClick() {
        if (count === 0)
            return;

        let number = count - 1
        setCount(number);
    };

    function handleOnChange(e) {
        let number = parseInt(e.target.value)
        setCount(number)
    }

    return (
        <div className={className}>
            <label htmlFor={name}>{label}</label>
            <button type='button' onClick={handleDecreaseClick}>-</button>
            <input type='number' name={name} value={count} onChange={e => handleOnChange(e)}/>
            <button type='button' onClick={handleIncreaseClick}>+</button>
        </div>
    )
}

export default CounterInput;