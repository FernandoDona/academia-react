import { Link } from "react-router-dom"

export default function WorkoutCard({ workout }) {
    
    return (
        <Link to={`${workout.id}`} className="col-md-4 mb-3">
            <div className="card">
                <img src="agachamento.png" className="card-img-top" alt="" />
                <div className="card-img-overlay">
                    <h3 className="card-title">{workout.name}</h3>
                </div>
            </div>
        </Link>
    )
}