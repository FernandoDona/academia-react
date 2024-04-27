import { Link } from "react-router-dom";

function WorkoutItem( { item, hasStarted, handleCompleteItem, deleteItem } ) {

    return (
        <Link to={`item/edit/${item.id}`} className="col-md-4 mb-3">
          <div className="card">
            <img src="agachamento.png" className="card-img-top" alt="Card Image" />
            <div className="card-img-overlay">
              <div className="card-top-section">
                <h5>{item.exercise}</h5>
                <span>...</span>
              </div>
              <div className="card-exercise">
                <div className="card-exercise-stats">
                  <p>Séries</p>
                  <span>{item.series}</span>
                </div>
                <div className="card-exercise-stats">
                  <p>Reps</p>
                  <span>{item.repetitions}</span>
                </div>
                <div className="card-exercise-stats">
                  <p>Carga</p>
                  <span>{item.weight}</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
        /* <>
            <td><Link className="exercise-name" to={`item/edit/${item.id}`}>{item.exercise}</Link></td>
            <td>{item.series}</td>
            <td>{item.repetitions}</td>
            <td>{item.weight}</td>
            { hasStarted && <td><CheckboxInput value={item.completed}/></td> }
            <td><button type="button" className="btn btn-danger" onClick={() => deleteItem(item.id)}>Excluir</button></td>
        </> */
    )
}


export default WorkoutItem;