const basePath = 'http://localhost:5000';

export async function GetWorkouts() {
    const data = await fetch(`${basePath}/workouts`);
    const json = await data.json();

    return json;
}

export async function GetWorkout(id) {
    const data = await fetch(`${basePath}/workouts/${id}`);
    const json = await data.json();

    return json;
}

// crie chamadas para criar, atualizar e deletar workouts
export async function CreateWorkout(workout) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(workout)
    }

    const data = await fetch(`${basePath}/workouts`, requestOptions);
    return await data.json();
}

export async function UpdateWorkout(workout) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(workout)
    }

    const data = await fetch(`${basePath}/workouts/${workout.id}`, requestOptions);
    return await data.json();
}

export async function DeleteWorkout(workoutId) {
    const requestOptions = {
        method: 'DELETE'
    }

    const data = await fetch(`${basePath}/workouts/${workoutId}`, requestOptions);
    return await data.json();
}

export async function UpdateWorkoutItem(workoutId, workoutItem) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(workoutItem)
    }

    const data = await fetch(`${basePath}/workouts/${workoutId}/item/${workoutItem.id}`, requestOptions);
    return await data.json();
}

export async function CreateWorkoutItem(workoutId, workoutItem) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(workoutItem)
    }

    const data = await fetch(`${basePath}/workouts/${workoutId}/item`, requestOptions);
    return await data.json();
}

export async function DeleteWorkoutItem(workoutId, workoutItemId) {
    const requestOptions = {
        method: 'DELETE'
    }

    const data = await fetch(`${basePath}/workouts/${workoutId}/item/${workoutItemId}`, requestOptions);
    return await data.json();
}