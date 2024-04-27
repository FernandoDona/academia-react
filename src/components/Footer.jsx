import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <div className="footer-deadspace"></div>
            <footer className="footer">
                <div className="footer-card">
                    <Link className="text-center" to="/">
                        <span>Home</span>
                        <div>
                        <i className="fa-house fa-2x"></i>
                        </div>
                    </Link>
                </div>
                <div>
                    <Link className="text-center" to="/rotinas">
                        <span>Rotinas</span>
                        <div>
                            <i className="fa-regular fa-calendar-days fa-2x"></i>
                        </div>
                    </Link>
                </div>
                <div>
                    <Link className="text-center" to="/treinos">
                        <span>Treinos</span>
                        <div>
                            <i className="fa-solid fa-dumbbell fa-2x"></i>
                        </div>
                    </Link>
                </div>
            </footer>
        </>
    )
}