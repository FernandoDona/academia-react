import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <Link to='/' class="navbar-brand">LogoApp</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link to='/' class="nav-link active" aria-current="page">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/rotinas' class="nav-link">Rotinas</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/treinos' class="nav-link">Treinos</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;