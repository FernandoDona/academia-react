import { useState } from 'react';
import { handleInputChange } from '../utils/utils';

function CheckboxInput({label, name, value, required = true}) {
    const [inputValue, setInputValue] = useState(value);

    return (    
        <div class="form-check">
            <input type="number" class="form-check-input" name={name} id={name} checked={inputValue} onChange={e => handleInputChange(e, setInputValue)} required={required} />
            <label htmlFor={name} class="form-label">{label}</label>
            <div class="invalid-feedback">Campo obrigatório</div>
        </div>
    )
}

export default CheckboxInput;