import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import { HashLink as Link } from "react-router-hash-link";
import "./NavBar.css";
import Modal1 from "../Modal/Modal";
import Modal2 from "../Modal/UpdateModal";
import { faDivide } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  let login = "login";
  const location = useLocation();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [update, setUpdate] = useState(false);
  const handleClose1 = () => setUpdate(false);
  const handleShow1 = () => setUpdate(true);

  const logout = () => {
    localStorage.removeItem("user");
    window.location.reload(false); //refresh page
  };

  const LoginBtn = () => {
    if (!localStorage.getItem("user")) {
      return (
        <div className='login-wrap'>
          <button
            id='login'
            className='btn  login'
            type='button'
            onClick={handleShow}>
            Login
          </button>
        </div>
      );
    } else {
      return (
        <div className='logout-wrap'>
          <button className='btn  logout' type='button' onClick={logout}>
            Logout
          </button>
        </div>
      );
    }
  };

  return (
    <>
      <nav className='navbar navbar-expand-xl navbar-inner nav-colour '>
        <a href='http://pictieee.in/' className='navbar-brand'>
          <img
            className='pisblogo'
            alt='logopisb'
            src={require("../../assests/img/logopisb.png")}
          />
        </a>
        {/* <button
          type='button'
          className='btn custombtn btn-sm d-inline d-lg-none ml-auto mr-2'
          onClick={handleShow}>
          Log in
        </button> */}
        <div onClick={handleShow1} className='hiddenBell'>
          <div>
            <i className='fa fa-bell' title='Updates'></i>
          </div>
        </div>
        <button
          className='navbar-toggler navbar-toggler-icon'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          {/* <span className="navbar-toggler-icon"></span> */}
        </button>

        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ml-auto pull-left mr-auto'>
            <li className='nav-item' style={{ color: "ivory" }}>
              <Link to='/home' className='nav-link'>
                <samp
                  className={
                    location.pathname === "/home" &&
                    location.hash !== "#Aboutus"
                      ? "active-nav-tab"
                      : ""
                  }>
                  Home
                </samp>
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/events' className='nav-link'>
                <samp
                  className={
                    location.pathname === "/events" ? "active-nav-tab" : ""
                  }>
                  Events
                </samp>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/sideEvents' className='nav-link'>
                <samp
                  className={
                    location.pathname === "/sideEvents" ? "active-nav-tab" : ""
                  }>
                  Side-Events
                </samp>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/register' className='nav-link'>
                <samp
                  className={
                    location.pathname === "/register" ? "active-nav-tab" : ""
                  }>
                  Register
                </samp>
              </Link>
            </li>

            {/* <li className="nav-item">
                    <Link  to="/leaderboard" className="nav-link">
                       <samp>LeaderBoard</samp>
                    </Link>
                </li> */}
            <li className='nav-item'>
              <Link to='/home#Aboutus' className='nav-link'>
                <samp
                  className={
                    location.pathname === "/home" &&
                    location.hash === "#Aboutus"
                      ? "active-nav-tab"
                      : ""
                  }>
                  About Us
                </samp>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contact' className='nav-link'>
                <samp
                  className={
                    location.pathname === "/contact" ? "active-nav-tab" : ""
                  }>
                  Contact Us
                </samp>
              </Link>
            </li>
            <li className='nav-item profile'>
              <Link to='/profile' className='nav-link'>
                <samp
                  className={
                    location.pathname === "/profile" ? "active-nav-tab" : ""
                  }>
                  My Profile
                </samp>
              </Link>
            </li>
            <li className='hide nav-item'>
              <LoginBtn></LoginBtn>
            </li>

            <li className='hide nav-item'>
              <Link
                id='logoieee'
                to='/home'
                className='navbar-brand d-none d-xl-block '>
                <img
                  src={require("../../assests/img/ieeelogo.png")}
                  alt='PISB'
                  height='30px'
                  width='auto'
                />
              </Link>
            </li>
            {/* <li className='nav-item' onClick={handleShow1}>
              <div className='nav-link' style={{ cursor: "pointer" }}>
                <samp>Updates</samp>
              </div>
            </li> */}
          </ul>
          <ul className='navbar-nav ml-auto second  pull-right'>
            <li>
              <div onClick={handleShow1}>
                <div>
                  <i className='fa fa-bell' title='Updates'></i>
                </div>
              </div>
            </li>

            <li>
              <LoginBtn></LoginBtn>
            </li>

            <li>
              <a
                id='logoieee'
                href='https://www.ieee.org/'
                className='navbar-brand d-none d-lg-block '>
                <img
                  src={require("../../assests/img/ieeelogo.png")}
                  alt='PISB'
                  height='30px'
                  width='auto'
                />
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <Modal1 show={show} handleClose={handleClose} type={login} />
      <Modal2 show={update} handleClose={handleClose1} />
    </>
  );
}

export default NavBar;
// export const LoginButton = LoginBtn;
