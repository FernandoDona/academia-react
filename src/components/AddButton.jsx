import { Link } from "react-router-dom";

export default function AddButton({to}) {
    return (
        <Link to={to} className="add-button"><i className="fa-solid fa-plus fa-2x"></i></Link>
    )
}