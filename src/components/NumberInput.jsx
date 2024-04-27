import { useState } from 'react';
import { handleInputChange } from '../utils/utils.js';

function NumberInput({name, value, className, min, max, required = true}) {
    const [inputValue, setInputValue] = useState(value);

    return (
        <input type="number" className={className} name={name} id={name} value={inputValue} min={min} onChange={e => handleInputChange(e, setInputValue)} required={required} />
    )
}

export default NumberInput;