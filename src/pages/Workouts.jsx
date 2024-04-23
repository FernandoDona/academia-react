import { Link } from 'react-router-dom';
import { useEffect, useState } from "react"
import { CreateWorkout, GetWorkouts, DeleteWorkout } from '../services/workoutServices';
import WorkoutForm from './WorkoutForm';
import WorkoutCard from '../components/WorkoutCard';

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
        <section>
            <div className='container'>
                <h2>Treinos</h2>
            </div>
            {showCreateForm && <WorkoutForm onSubmit={handleSubmit}/>}
            <div className='container'>
                <div className='row'>
                    {workouts.map((workout) => {
                        return <WorkoutCard workout={workout} />
                    })}
                </div>
            </div>
        </section>
    )
}