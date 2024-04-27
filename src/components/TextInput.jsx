import { useState } from 'react';
import { handleInputChange } from '../utils/utils.js';

function TextInput({name, value, className, required = true}) {
    const [inputValue, setInputValue] = useState(value);
    
    return (    
        <div className="mb-2">
            <input type="text" className={className} name={name} id={name} value={inputValue} onChange={e => handleInputChange(e, setInputValue)} required={required} />
        </div>
    )
}

export default TextInput;