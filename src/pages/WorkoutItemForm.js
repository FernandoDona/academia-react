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
                <form onSubmit={handleSubmit}>
                    <TextInput label='Exercício' name='exercise' value={workoutItem?.exercise} />
                    <NumberInput label='Series' name="series" value={workoutItem?.series} />
                    <NumberInput label='Repetições' name="repetitions" value={workoutItem?.repetitions} />
                    <NumberInput label='Carga' name="weight" value={workoutItem?.weight} />
                    <div>
                        <button type="submit" className="btn btn-primary">{submitText}</button>
                    </div>
                </form>
            ) : 
            <NotFound></NotFound>}
        </>
    )
}