import { Link, Routes, Route } from 'react-router-dom';
import WorkoutItemForm from './WorkoutItemForm';
import WorkoutItemList from "./WorkoutItemList";

function Workout() {
  function handleSubmit(workoutItem) {
    console.log({workoutId: 5, workoutItem})
  }

  return (
      <section className="container text-center">
          <div className="row">
              <h2 className="col-9 text-center">Treinos</h2>
              <Link to="new" className="btn btn-primary col-3">Novo Item</Link>
          </div>
          <div className="row">
          <Routes>
              <Route index element={<WorkoutItemList workout={workout}></WorkoutItemList>}></Route>
              <Route path='item/new' element={<WorkoutItemForm workoutItem={workout.items[0]} onSubmit={handleSubmit} submitText='Criar'></WorkoutItemForm>}></Route>
              <Route path='item/edit/:id' element={<WorkoutItemForm onSubmit={handleSubmit} submitText='Editar'></WorkoutItemForm>}></Route>
          </Routes>
          </div>
      </section>
  )
}

export default Workout;