import { Link } from 'react-router-dom';
import { useEffect, useState } from "react"
import { CreateWorkout, GetWorkouts, DeleteWorkout } from '../services/workoutServices';
import WorkoutForm from './WorkoutForm';

export default function Workouts () {
    const [workouts, setWorkouts] = useState([]);
    const [showCreateForm, setShowCreateForm] = useState(false);
    
    useEffect(() => {
        console.log('useEffect!)!)!')
        let subscribed = true;
        
        const fetchData =  async () => {
            let json = await GetWorkouts();

            if (subscribed) {
                setWorkouts(json);
            }
        }

        fetchData()
            .catch((err) => {console.error(err)})
        
        return () => subscribed = false;
    }, [])

    function handleSubmit(name) {
        if (!name) return;
        
        const Create = async() => {
            let workout = await CreateWorkout({name});
            setWorkouts([...workouts, workout]);
            setShowCreateForm(false);
        }

        Create()
            .catch(err => console.error(err))

        return;
    }

    function handleDelete(id) {
        const Delete = async() => {
            await DeleteWorkout(id);
            setWorkouts(workouts.filter(workout => workout.id !== id));
        }

        Delete()
            .catch(err => console.error(err))
    }
    
    return (
        <section className='container'>
            <div className='d-flex justify-content-between pb-2 pt-2 pe-4'>
                <h2>Workouts</h2>
                <button onClick={() => setShowCreateForm(!showCreateForm) } className='btn btn-primary'>Novo</button>
            </div>
            {showCreateForm && <WorkoutForm onSubmit={handleSubmit}/>}
            <ul className='list-group'>
                {workouts.map((workout) => {
                    return (
                        <li key={workout.id} className='d-flex justify-content-between list-group-item'>
                            <Link to={`${workout.id}`} className='text-center'>
                                {workout.name}
                            </Link>
                            <button onClick={() => handleDelete(workout.id)} className='btn btn-danger'>Excluir</button>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}