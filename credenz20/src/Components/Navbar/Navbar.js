import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'
import Modal1 from '../Modal/Modal';
import Modal2 from '../Modal/UpdateModal';
function NavBar() {

      let login="login";
      
    
       const [show, setShow] = useState(false);

       const handleClose = () => setShow(false);
       const handleShow = () => setShow(true);
      
       const [update, setUpdate] = useState(false);
       const handleClose1 = () => setUpdate(false);
       const handleShow1 = () => setUpdate(true);


       
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-inner nav-colour">
            <Link to="/home" className="navbar-brand">
                <img style={{width:'20%'}} alt="logopisb" src={require('../../assests/img/logopisb.png')}/>
            </Link>
            <button type="button" class="btn btn-secondary btn-sm d-inline d-lg-none ml-auto mr-2" onClick={ handleShow }>Log in</button>
            <button className="navbar-toggler btn-sm" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                {/* <li className="nav-item" style={{color: "ivory"}}>
                    <Link to="/home" className="nav-link">
                        Home
                    </Link>
                </li>  */}
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
                        About
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="nav-link">
                        Contact
                    </Link>
                </li>
                <li className="nav-item" onClick={handleShow1}>
                    <div className="nav-link">
                        Updates    
                    </div>
                </li>
                </ul>
            </div>
            <button id="login" type="button" class="btn btn-secondary btn-sm d-none d-lg-block" onClick={ handleShow }>Login</button>
                  
            <Link id="logoieee" to="/home" className="navbar-brand d-none d-lg-block ">
                <img src={require('../../assests/img/ieeelogo.png')} alt="PISB" height="30px" width="auto"/>
            </Link>
            </nav>

            <Modal1 show={show} handleClose={handleClose} type={login}/>
            <Modal2 show={update} handleClose={handleClose1}/>    
            
        </>
    );
}

export default NavBar;
