import React, {useState} from "react";
import "./Register.css";
import SideEventsButton from "../sideEventButton/sideEvent";
import Footer from "../Footer/footer";
//import axios from "axios";
import Nav from "../Navbar/Navbar";
import LoginFirst from "../LoginFirst/LoginFirst";
import Axios from "axios";

function Cart() {

  const [pay, setPay] = useState(false)

  const getUsername = (event) => { //get event names and their prices
    switch (event) {
      case "Clash":
        return ["clash", 100];
      case "Reverse Coding":
        return ["rc", 50];
      case "Pixelate":
        return ["pixelate", 50];
      case "Cretronix":
        return ["cretronix", 50];
      case "Bplan":
        return ["bplan", 50];
      case "Wallstreet":
        return ["wallstreet", 50];
      case "Datawiz":
        return ["datawiz", 50];
      case "Enigma":
        return ["enigma", 50];
      case "Quiz":
        return ["quiz", 50];
      case "Web Weaver":
        return ["webweaver", 50];
      case "Paper Presentation":
        return ["paperpresentation", 50];
      case "Network Treasure Hunt":
        return ["nth", 50];
      default:
        return "Invalid event";
    }
  }

  function payment() {
    alert("Payment gateway will open soon. Stay tuned!");
  }

  function clearCart(event) {
    localStorage.removeItem("Cart");
    localStorage.removeItem("Register");
    window.location.reload(false);
  }

  function clearEvent(event) {
    //alert(index);
    var comma = ",";
    var temp = comma.concat(event);
    var oldCart = localStorage.getItem("Cart");
    var newCart = oldCart.replace(temp, "");
    temp = event.concat(",");
    newCart = newCart.replace(temp, "");
    temp = event;
    newCart = newCart.replace(temp, "");
    //console.log(newCart)
    localStorage.setItem("Cart", newCart);
    window.location.reload(false);
  }

  let eventList = "";
  let count = 1;
  eventList = localStorage.getItem("Cart") ? (
    localStorage
      .getItem("Cart")
      .split(",")
      .map((x) => {
        return (
          <tr>
            <td>{count++}</td>
            <td>{x}</td>
            <td>
              <button
                onClick={() => clearEvent(x)}
                type='button'
                className='btn btn-outline-primary'>
                <i className='fa fa-trash'></i>
              </button>
            </td>
          </tr>
        );
      })
  ) : (
    <tr>
      <td></td>
      <td>Please head over to the events page to add items to the cart</td>
      <td></td>
    </tr>
  );

  function Register() {

    let RegItems = localStorage.getItem("Register").split(",")
    //alert(RegItems)
    //alert(typeof(RegItems))

    /*
    API call
    */
/*
    RegItems.map((regItem)=>{

      //axios

    })
*/
    setPay(true);

  }


  if (1) {
    return (
      <div>
        <Nav />
        <SideEventsButton />
        <div className='regPage'>
          <div className='regPageVector'>
            <h1 className='reg-head'>Your cart</h1>
            <img
              src={require("../../assests/img/register.svg")}
              alt='registration form'
            />
          </div>
          <div className='container'>
            <div className='row'>
              <div className='col'>
                <table className='table table-striped'>
                  <thead>
                    <tr>
                      <th scope='col'></th>
                      <th scope='col'>Events</th>
                    </tr>
                  </thead>
                  <tbody>
                    {eventList}
                    <tr></tr>
                    { !pay &&
                    <tr>
                      <td></td>
                      <td>
                        <button onClick={Register} type='button' className='btn btn-outline-info'>
                          Register
                        </button>
                      </td>
                      <td></td>
                    </tr> }
                   {pay && <tr>
                      <td></td>
                      <td>
                        <button onClick={payment} type='button' className='btn btn-outline-info'>
                          Proceed to pay
                        </button>
                      </td>
                      <td></td>
                    </tr> }
                    <tr>
                      <td></td>
                      <td>
                        <button
                          onClick={clearCart}
                          type='button'
                          className='btn btn-outline-danger'>
                          Clear Cart
                        </button>
                      </td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
