import React, { useState } from "react";
import "./Register.css";
import SideEventsButton from "../sideEventButton/sideEvent";
import Footer from "../Footer/footer";
import axios from "axios";
import Nav from "../Navbar/Navbar";
import LoginFirst from "../LoginFirst/LoginFirst";

function Cart() {


    function clearCart(event) {
      
          localStorage.removeItem("Cart")
          window.location.reload(false);  
        
    }

    function clearEvent({event}) {

      var comma = ","
      var temp = comma.concat(event);
      var newCart = localStorage.getItem("Cart").replace(temp, "")
      console.log(newCart)
      localStorage.setItem("Cart", newCart)
  

    }

    let eventList = "";
    let count = 1;
    eventList = localStorage.getItem("Cart")? localStorage.getItem("Cart").split(",").map((x) => {
      return (
        <tr>
          <td>{count++}</td>
          <td>{x}</td>
          <td><button onClick={clearEvent(x)}><i class="fa fa-trash"></i></button></td>
        </tr>
      );
    }):<tr>
          <td></td>
          <td>Please head over to the events page to add items to the cart</td>
       </tr>
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
                <div className='row'>
                    <table class='table table-striped'>
                    <thead>
                        <tr>
                        <th scope='col'></th>
                        <th scope='col'>Events</th>
                        </tr>
                    </thead>
                    <tbody>
                      {eventList}
                      <tr>
                        
                      </tr>
                      <tr style={{textAlign: "center"}}>
                        <td></td>
                        <td>
                        <button onClick={clearCart} type="button" class="btn btn-outline-danger">Clear Cart</button>
                        </td>
                      </tr>
                    </tbody>
                    </table>
                </div>
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