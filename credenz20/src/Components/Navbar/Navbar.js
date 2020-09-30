import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'


function NavBar() {

    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-inner">
            <Link to="/home" className="navbar-brand">
                <img style={{width:'20%'}} src={require('../../assests/img/logopisb.png')}/>
            </Link>
            <button type="button" className="btn btn-secondary btn-sm d-inline d-lg-none ml-auto mr-2">Sign in</button>
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
                <li className="nav-item">
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
                    <Link to="/sideEvents" className="nav-link">
                        SideEvents
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/leaderboard" className="nav-link">
                        LeaderBoard
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="./about" className="nav-link">
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
            <button id="signin" type="button" class="btn btn-secondary btn-sm d-none d-lg-block">Sign in</button>
            <Link id="logopisb" to="/home" className="navbar-brand d-none d-lg-block ">
                <img src={require('../../assests/img/ieeelogo.png')} alt="PISB" height="30px" width="auto"/>
            </Link>
            </nav>
        </>
    );
}

export default NavBar;