import React, { useState } from "react";
import "./LoginFirst.css";
import Nav from '../Navbar/Navbar';
import { Link } from "react-router-dom";


function LoginFirst() {
  return (
    <div>
      <Nav/>
      <div className='loginFirst'>
        <img src='img/loginFirst3.svg' alt='login first' />
        <h1>You need to Login first!</h1>
        {/* <hr style={{color:'wheat'}}/> */}
        <hr width="500px;" color="red"
        size="10" />  
       <h3> Don't have an account ? </h3>
        <h3><Link to="/signup">Sign Up</Link></h3>
      </div>
    </div>
  );
}

export default LoginFirst;
