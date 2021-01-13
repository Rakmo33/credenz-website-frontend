import React, { useState } from "react";
import "./Register.css";
import SideEventsButton from "../sideEventButton/sideEvent";
import Footer from "../Footer/footer";
import axios from "axios";
import Nav from "../Navbar/Navbar";
import LoginFirst from "../LoginFirst/LoginFirst";

function Cart() {


    if(1){
    return (
        <div>
          <Nav />
          <SideEventsButton />
          <div className='regPage'>
            <div className='regPageVector'>
              <h1 className='reg-head'>Registration Form</h1>
              <img src='/img/register.svg' alt='registration form' />
            </div>
            <div className='container'>
             
            </div>
          </div>
          <Footer />
        </div>
      );
    } else {
      return (
        <div>
          <SideEventsButton />
  
          <LoginFirst></LoginFirst>
          <Footer />
        </div>
      );
    }

}

export default Cart;