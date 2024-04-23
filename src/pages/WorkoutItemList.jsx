import AddButton from "../components/AddButton"
import WorkoutItem from "./WorkoutItem"

export default function WorkoutItemList({workout, deleteItem}) {
    return (
        <>
            <div class="container pe-0 ps-0">
                <div class="row">
                    {workout?.items?.map(wi =>
                        <tr key={wi.id}>
                            <WorkoutItem item={wi} deleteItem={deleteItem}></WorkoutItem>
                        </tr>
                    )}
                </div>
            </div>
            <AddButton />
        </>
    )
}