import { Link } from "react-router-dom";

function WorkoutItem( { item, hasStarted, handleCompleteItem, deleteItem } ) {

    return (
        <>
            <td><Link className="exercise-name" to={`item/edit/${item.id}`}>{item.exercise}</Link></td>
            <td>{item.series}</td>
            <td>{item.repetitions}</td>
            <td>{item.weight}</td>
            { hasStarted && <td><CheckboxInput value={item.completed}/></td> }
            <td><button type="button" className="btn btn-danger" onClick={() => deleteItem(item.id)}>Excluir</button></td>
        </>
    )
}


export default WorkoutItem;