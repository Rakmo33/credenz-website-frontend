import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'


function NavBar() {

    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to="/home" className="navbar-brand">
                Credenz logo
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
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
                    <Link to="/contact" className="nav-link">
                        Contact us
                    </Link>
                </li>
                </ul>
            </div>
            <Link to="/home" className="navbar-brand d-none d-lg-block">
                <img src="assets/logopisb.png" alt="PISB" height="30px" width="auto"/>
            </Link>
            </nav>
        </>
    );
}

export default NavBar;