import { NavLink } from 'react-router-dom';
import './navBar.css';

export const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg custom-navbar-background">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        <img src="public/images2/logophone copy2.jpg" alt="logo" className="img-fluid" />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink activeclassname="active" className="nav-link" aria-current="page" to="/">Inicio</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link" to="/productos">
                                    Productos
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/register">Registrarse</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/login">Iniciar Sesión</NavLink>
                            </li>
                            <img src="public/images2/session-join-svgrepo-com copy.gif" width={35} alt="logosesion" />
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};
