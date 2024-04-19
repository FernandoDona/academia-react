import WorkoutItem from "./WorkoutItem"

export default function WorkoutItemList({workout, deleteItem}) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col-5">Nome</th>
                    <th scope="col-2">Séries</th>
                    <th scope="col-2">Reps</th>
                    <th scope="col-2">Carga</th>
                    <th scope="col-1"></th>
                </tr>
            </thead>                                  
            <tbody>
                {workout?.items?.map(wi =>
                    <tr key={wi.id}>
                        <WorkoutItem item={wi} deleteItem={deleteItem}></WorkoutItem>
                    </tr>
                )}
            </tbody>
        </table>
    )
}