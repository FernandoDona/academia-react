import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import NumberInput from '../components/NumberInput'
import TextInput from "../components/TextInput";
import NotFound from "./NotFound";

export default function WorkoutItemForm({ onSubmit, submitText }) {
    const [workoutItem, setWorkoutItem] = useState(undefined);
    const { id, itemId } = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        let subscribed = true;

        const fetchData = async () => {
            let data = await fetch(`http://localhost:5000/workouts/${id}`);
            let json = await data.json();

            if (subscribed){
                console.log('entrou no subscribed')
                setWorkoutItem(json.items.find(item => item.id === parseInt(itemId)))
            }
        }

        fetchData()
            .catch((err) => console.error(err));

        return () => subscribed = false;
    }, [ id, itemId ])


    function handleSubmit(e) {
        e.preventDefault()
        let finalItem = {}
        const inputs = e.target.getElementsByTagName('input')
        for (let i = 0; i < inputs.length; i++) {
            finalItem[inputs[i].name] = inputs[i].value;
        }
        console.log({ ...workoutItem, ...finalItem })
        onSubmit({ ...workoutItem, ...finalItem })
        navigate(`/workouts/${id}`);
    }

    return (
        <>
            {workoutItem || submitText === 'Criar' ? (
                <form className="add-form" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor='exercise' className="form-label">Exercício</label>
                        <TextInput className='form-control' name='exercise' value={workoutItem?.exercise} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="series" className="form-label">Séries</label>
                        <NumberInput className='form-control' name="series" min='0' value={workoutItem?.series} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="repetitions" className="form-label">Repetições</label>
                        <NumberInput className='form-control' name="repetitions" min='0' value={workoutItem?.repetitions} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="weight" className="form-label">Carga</label>
                        <NumberInput className='form-control' name="weight" min='0' value={workoutItem?.weight} />
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary">{submitText}</button>
                    </div>
                </form>
            ) : 
            <NotFound></NotFound>}
        </>
    )
}