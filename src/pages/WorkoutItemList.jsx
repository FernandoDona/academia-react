import AddButton from "../components/AddButton"
import WorkoutItem from "./WorkoutItem"

export default function WorkoutItemList({workout, deleteItem}) {
    return (
        <>
            <div className="container pe-0 ps-0">
                <div className="row">
                    {workout?.items?.map(wi =>
                        <WorkoutItem item={wi} deleteItem={deleteItem}></WorkoutItem>
                    )}
                </div>
            </div>
            <AddButton to='item/new' />
        </>
    )
}