
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useAuthStore } from '../../hooks/useAuthStore';
import { NavDropdown } from 'react-bootstrap';

export const HomeNav = () => {

    const [show, setShow] = useState(false);

    const { user, status, startLogout } = useAuthStore();
    

    // console.log(user)
    // console.log(status)

    return (
        <div className="row navbar__row">
            <div className="col-lg-4">
            </div>
            <div className="col-lg-4">
                <ul className="list-inline quicklinks mb-0 navbar__ul">
                    <li className="list-inline-item">
    
                        <NavLink 
                                className={ ({ isActive }) => 'nav-link navbar__link' + (isActive ? 'active' : '') } 
                                to="/"
                            >
                                Home
                        </NavLink>                    
                    </li>
    
                    <li className="list-inline-item">
                        <NavLink 
                                className={ ({ isActive }) => 'nav-link navbar__link' + (isActive ? 'active' : '') } 
                                to="/clases"
                            >
                                Clases
                        </NavLink>                    
                    </li>
    
                    <li className="list-inline-item">
                        <NavLink 
                                className={ ({ isActive }) => 'nav-link navbar__link' + (isActive ? 'active' : '') } 
                                to="/facilitadores"
                            >
                                Facilitadores
                        </NavLink>                    
                    </li>
    
                    <li className="list-inline-item">
                        <NavLink 
                                className={ ({ isActive }) => 'nav-link navbar__link' + (isActive ? 'active' : '') } 
                                to="/contacto"
                            >
                                Contacto
                        </NavLink>                    
                    </li>
    
                    {status === 'authenticated' ?
                        
                        <NavDropdown title="Datos" id="nav-dropdown" 
                            show={show}
                            onMouseEnter={() => setShow(true)}
                            onMouseLeave={() => setShow(false)}
                        >
                            <Link className="dropdown-item" to="/data/clases">Clases</Link>
                            <Link className="dropdown-item" to="/data/noticias">Noticias</Link>
                            <NavDropdown.Divider />
                            <Link className="dropdown-item" to="/data/facilitadores">Facilitadores</Link>
                            <Link className="dropdown-item" to="/data/alumnos">Alumnos</Link>
                        </NavDropdown>
    
                    :<></>}
    
                </ul>
    
            </div>
    
            {status === 'authenticated' ?
                <div className="col-lg-4 d-flex justify-content-center align-items-center">
                    <ul className="list-inline quicklinks mb-0">
                        <li className="list-inline-item">
                            <span>{ user.name }</span>
    
                             <button 
                                 className="navbar__link btn-menu"
                                 onClick={ startLogout }
                             >
                                 Logout
                             </button>
                        </li>
                    </ul>
                </div>
            :
                <div className="col-lg-4 d-flex justify-content-center align-items-center">
                    <ul className="list-inline quicklinks mb-0">
                        <li className="list-inline-item">
                            <Link to="/auth/login">
                                <button 
                                    className="navbar__link btn-menu"
                                >
                                    Login
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            }
        </div>
        
        
        )
}