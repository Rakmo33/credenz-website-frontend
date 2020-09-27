import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../Modal/Login';
import './NavBar.css'
import useModal from '../Modal/useModal';



function NavBar() {

    const {isShowing, toggle} = useModal();

    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to="/home" className="navbar-brand">
                Credenz logo
            </Link>
            <button type="button" class="btn btn-secondary btn-sm d-inline d-lg-none" onClick={ toggle }>Sign in</button>
            <button className="navbar-toggler btn-sm" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/home" className="nav-link">
                        Home
                    </Link>
                </li>
                <li class="nav-item">
                    <Link to="/events" className="nav-link">
                        Events
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link">
                        Register
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link">
                        About us
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="nav-link">
                        Contact us
                    </Link>
                </li>
                </ul>
            </div>
            <button id="signin" type="button" class="btn btn-secondary btn-sm d-none d-lg-block" onClick={ toggle }>Sign in</button>
            <Link id="logopisb" to="/home" className="navbar-brand d-none d-lg-block">
                <img src="assets/logopisb.png" alt="PISB" height="30px" width="auto"/>
            </Link>
            <Login isShowing={ isShowing } hide={ toggle } />
            </nav>
        </>
    );
}

export default NavBar;