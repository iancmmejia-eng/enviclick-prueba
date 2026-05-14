import { useNavigate } from 'react-router';
import './NavBar.css'

function NavBar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('Data')
        navigate('/');
    }
    return (
        <nav className="nav">
            <div className='nav__sesion'>
                <button onClick={handleLogout} className='nav__button'>Cerrar Sesión</button>
            </div>
        </nav>
    );
}

export { NavBar };