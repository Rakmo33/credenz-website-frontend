import React, { useState } from "react";
import "./LoginFirst.css";
import Nav from '../Navbar/Navbar';

function LoginFirst() {
  return (
    <div>
      <Nav/>
      <div className='loginFirst'>
        <img src='img/loginFirst3.svg' alt='login first' />
        <h1>You need to Login first!</h1>
      </div>
    </div>
  );
}

export default LoginFirst;
