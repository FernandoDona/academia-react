import { useState } from 'react';

function NumberInput({label, name, value, required = true}) {
    const [inputValue, setInputValue] = useState(value);

    return (    
        <div class="mb-2">
            <label htmlFor={name} class="form-label">{label}</label>
            <input type="number" class="form-control" name={name} id={name} value={inputValue} onChange={e => handleInputChange(e, setInputValue)} required={required} />
            <div class="invalid-feedback">Campo obrigatório</div>
        </div>
    )
}

export default NumberInput;