import { useEffect, useState } from 'react';
import { Link, Routes, Route, useParams, useLocation } from 'react-router-dom';
import WorkoutItemForm from './WorkoutItemForm';
import WorkoutItemList from "./WorkoutItemList";
import { GetWorkout, UpdateWorkoutItem, CreateWorkoutItem, DeleteWorkoutItem } from '../services/workoutServices';

function Workout() {
  const [showNewItemLink, setShowNewItemLink] = useState(true);
  const [workout, setWorkout] = useState({});
  const { id } = useParams();
  const location = useLocation();
  
  useEffect(() => {
    console.log('useEffect!!')
    let subscribed = true;

    const fetchData = async () => {
      let json = await GetWorkout(id);

      if (subscribed)
        setWorkout(json);
    }

    fetchData()
      .catch((err) => console.error(err));

    return () => subscribed = false;
  }, [ id ])

  function handleUpdateSubmit(workoutItem) {
    const updateItem = async () => {
      await UpdateWorkoutItem(id, workoutItem);
      
      console.log('Atualizou item');
      let json = await GetWorkout(id);
      setWorkout(json);
    }

    updateItem()
      .catch(err => console.error(err))
  }
  
  function handleCreateSubmit(workoutItem) {
    const createItem = async () => {
      await CreateWorkoutItem(id, workoutItem);
      
      console.log('Criou item');

      let json = await GetWorkout(id);
      setWorkout(json);
    }

    createItem()
      .catch(err => console.error(err))
  }

  function handleDeleteItemClick(itemId) {
    const deleteItem = async () => {
      await DeleteWorkoutItem(id, itemId);

      console.log('Deletou Item');
      let json = await GetWorkout(id);
      setWorkout(json);
    }
    
    deleteItem()
      .catch(err => console.error(err));
  }

  return (
    <section>
      <div className='d-flex justify-content-between'>
        <h2>Treino {workout.name}</h2> { 
          location.pathname === `/workouts/${id}` ? 
          <Link to="item/new" className='btn btn-primary' onClick={() => setShowNewItemLink(!showNewItemLink)}>Novo Item</Link> : 
          <Link to={`/workouts/${id}`} className='btn btn-primary'>Voltar</Link>
        }
      </div>
      <div>
        <Routes>
          <Route index element={<WorkoutItemList workout={workout} deleteItem={handleDeleteItemClick}></WorkoutItemList>}></Route>
          <Route path='item/new' element={<WorkoutItemForm onSubmit={handleCreateSubmit} submitText='Criar'></WorkoutItemForm>}></Route>
          <Route path='item/edit/:itemId' element={<WorkoutItemForm onSubmit={handleUpdateSubmit} submitText='Editar'></WorkoutItemForm>}></Route>
        </Routes>
      </div>
    </section>
  )
}

export default Workout;
