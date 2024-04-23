import { useState } from 'react';
import { handleInputChange } from '../utils/utils';

function CheckboxInput({name, value, className, required = true}) {
    const [inputValue, setInputValue] = useState(value);

    return (    
        <input type="number" className={className} name={name} id={name} checked={inputValue} onChange={e => handleInputChange(e, setInputValue)} required={required} />
    )
}

export default CheckboxInput;