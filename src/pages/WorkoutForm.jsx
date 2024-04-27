import { useState } from "react"
import { useNavigate } from "react-router-dom"
import TextInput from "../components/TextInput"
import { CreateWorkout } from "../services/workoutServices"

export default function WorkoutForm() {
    const navigate = useNavigate();
    
    function handleSubmit(e) {
        e.preventDefault()
        let finalItem = {}
        const inputs = e.target.getElementsByTagName('input')
        for (let i = 0; i < inputs.length; i++) {
            finalItem[inputs[i].name] = inputs[i].value;
        }
        
        CreateWorkout({ ...finalItem })
        navigate(`/treinos`);
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor='name' className="form-label">Nome do treino</label>
                <TextInput className='form-control' name='name' value='' />
            </div>
            <div>
                <button type="submit" className="btn btn-primary">Criar</button>
            </div>
        </form>
    )
}