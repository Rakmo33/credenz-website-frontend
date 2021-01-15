import React, { useState } from "react";
import "./Register.css";
import SideEventsButton from "../sideEventButton/sideEvent";
import Footer from "../Footer/footer";
import axios from "axios";
import Nav from "../Navbar/Navbar";
import LoginFirst from "../LoginFirst/LoginFirst";

function Cart() {


    function clearCart() {
        localStorage.removeItem("Cart")
        window.location.reload(false);
    }

    let eventList = "";
    let count = 1;
    eventList = localStorage.getItem("Cart")? localStorage.getItem("Cart").split(",").map((x) => {
      return (
        <tr>
          <td>{count++}</td>
          <td>{x}</td>
        </tr>
      );
    }):["Please head over to the events page to add items to the cart"];

    if(1){
    return (
        <div>
          <Nav />
          <SideEventsButton />
          <div className='regPage'>
            <div className='regPageVector'>
              <h1 className='reg-head'>Your cart</h1>
              <img src='/img/register.svg' alt='registration form' />
            </div>
            <div className='container'>
                <table class='table table-striped'>
                <thead>
                    <tr>
                    <th scope='col'></th>
                    <th scope='col'>Events</th>
                    </tr>
                </thead>
                <tbody>{eventList}</tbody>
                </table>
                <button onClick={clearCart}>Clear cart</button>
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