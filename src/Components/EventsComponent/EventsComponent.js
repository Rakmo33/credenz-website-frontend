import React, { useState, useEffect } from "react";
import SideEvent from "../sideEventButton/sideEvent";
import Modal1 from "../Modal/Modal";
import axios from "axios";
import Animation from "./Animation";
import Footer from "../Footer/footer";
import jwt from "jwt-decode";
// import { Nav } from "react-bootstrap";
import Navbar from "../Navbar/Navbar";

const Events = (props) => {
  // window.location.reload(false); //refresh page

  var cartArray = localStorage.getItem("Cart")
    ? localStorage.getItem("Cart").split(",")
    : [];

  const [show, setShow] = useState(false);
  const [event, setEvent] = useState("clash");
  const [EVENTS, setEVENTS] = useState("NULL");
  const [tempCartNum, setTempCartNum] = useState(cartArray.length);

  const handleClose = () => setShow(false);
  // const handleShow = (event) => {
  //   setShow(true);
  //   setEvent(event);
  // };

  async function AllEvents() {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/allevents`
    );
    //console.log("I am response" + response);
    const data = await response.data;
    //console.log("I am data" + JSON.stringify(data));

    return data;
  }

  useEffect(() => {
    let result = AllEvents();
      document.title=`CREDENZ LIVE | Events`;
    result.then((res) => {
      setEVENTS(res);
      //window.location.reload(false); //refresh page
    });
  }, []);

  let type = false;

  function addToCart(event, cart, setCart, eventReg, setEventReg) {
    var cartArray = localStorage.getItem("Cart")
      ? localStorage.getItem("Cart").split(",")
      : [];
    var regArray = localStorage.getItem("Register")
      ? localStorage.getItem("Register").split(",")
      : [];

    //regArray.map((x) => alert(JSON.stringify(x.event)));

    if (!cartArray.includes(event)) {
      const teamPresent = teams(event);

      let user = "";
      if (localStorage.getItem("user")) {
        user = jwt(localStorage.getItem("user"));
      }

      if (teamPresent) {
        setEventReg("team");
      } else {
        let singleRegObject = {
          event: event,
          username: localStorage.getItem("user")
            ? JSON.stringify(user["username"]).replace(/"/g, "")
            : "",
        };

        let tempRegArray = [...regArray];
        console.log(tempRegArray);
        //alert(JSON.stringify(tempRegArray));
        tempRegArray.push(singleRegObject);
        setEventReg(tempRegArray);
        localStorage.setItem("Register", tempRegArray);
      }

      //console.log(eventReg)
      //var cartArray = localStorage.getItem("Cart")? localStorage.getItem("Cart").split(","):[];
      let tempArray = [...cartArray];
      tempArray.push(event);
      //console.log("temp" + cartArray)
      setCart(tempArray);
      localStorage.setItem("Cart", tempArray);

      console.log("LOL" + tempArray + " dfsd " + tempArray.length);

      setTempCartNum((prev) => prev + 1);
      // window.location.reload(false);
    } else {
      alert("Event already present in the cart!");
    }
  }

  function teams(event) {
    let teamAllowed = true;

    switch (event) {
      case "Clash": //1 member
        teamAllowed = false;
        break;
      case "Reverse Coding": //1 member
        teamAllowed = false;
        break;
      case "Enigma": //1 member
        teamAllowed = false;
        break;
      case "Quiz": //1 member
        teamAllowed = false;
        break;
      case "Cretronix": //1 member
        teamAllowed = false;
        break;
      case "Bplan": //3 members
        break;
      case "Network Treasure Hunt": //1 member
        teamAllowed = false;
        break;
      case "Paper Presentation": //3 members
        break;
      case "Datawiz": //3 members
        break;
      case "Webweaver": //3 members
        break;
      case "Wallstreet": //1 member
        teamAllowed = false;
        break;
      case "Pixelate": //1 member
        teamAllowed = false;
        break;
      default:
        break;
    }

    return teamAllowed;
  }

  return (
    <div className='evePage' style={{ marginTop: "70px" }}>
      <Navbar cartNum={tempCartNum} />
      <SideEvent />
      <Animation addToCart={addToCart} teams={teams}></Animation>
      <Modal1
        show={show}
        handleClose={handleClose}
        type={type}
        event={event}
        event_info={EVENTS}
      />
      <Footer />
    </div>
  );
};

export default Events;
