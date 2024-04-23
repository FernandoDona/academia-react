import { Link } from "react-router-dom";

export default function AddButton({to}) {
    return (
        <Link to={to} class="add-button"><i class="fa-solid fa-plus fa-2x"></i></Link>
    )
}