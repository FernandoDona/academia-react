import { useState } from "react"

export default function WorkoutForm( { onSubmit }) {
    const [name, setName] = useState('');
    
    function handleSubmit(e) {
        e.preventDefault();
        
        onSubmit(name);

        setName('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nome do treino
                <input value={name} type="text" onChange={e => setName(e.target.value)} />
                <button type='submit'>Criar</button>
            </label>
        </form>
    )
}