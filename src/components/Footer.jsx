import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <div class="footer-deadspace"></div>
            <footer class="footer">
                <div class="footer-card">
                    <Link class="text-center" to="/">
                        <span>Home</span>
                        <div>
                            <i class="fa-solid fa-house fa-2x"></i>
                        </div>
                    </Link>
                </div>
                <div>
                    <Link class="text-center" to="/rotinas">
                        <span>Rotinas</span>
                        <div>
                            <i class="fa-regular fa-calendar-days fa-2x"></i>
                        </div>
                    </Link>
                </div>
                <div>
                    <Link class="text-center" to="/treinos">
                        <span>Treinos</span>
                        <div>
                            <i class="fa-solid fa-dumbbell fa-2x"></i>
                        </div>
                    </Link>
                </div>
            </footer>
        </>
    )
}