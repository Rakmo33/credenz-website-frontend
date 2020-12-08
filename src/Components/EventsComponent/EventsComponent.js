import React, { useState, useEffect } from "react";
import SideEvent from "../sideEventButton/sideEvent";
import Modal1 from "../Modal/Modal";
import axios from "axios";
import Animation from "./Animation";
import { EVENTS } from "./allEvents";
import Footer from "../Footer/footer";
const Events = () => {
  // window.location.reload(false); //refresh page

  const [show, setShow] = useState(false);
  const [event, setEvent] = useState("clash");
  const [EVENTS, setEVENTS] = useState("NULL");

  const handleClose = () => setShow(false);
  const handleShow = (event) => {
    setShow(true);
    setEvent(event);
  };

  async function AllEvents() {
    const response = await axios.get(
      "http://credenzwebsite.herokuapp.com/allevents"
    );
    //console.log("I am response" + response);
    const data = await response.data;
    //console.log("I am data" + JSON.stringify(data));

    return data;
  }

  useEffect(() => {
    let result = AllEvents();

    result.then((res) => {
      setEVENTS(res);
      //window.location.reload(false); //refresh page
    });
  }, []);

  //console.log("Events"+ JSON.stringify(EVENTS))

  let type = false;

  return (
    <div>
      <SideEvent />

      <h1 style={{ color: "ivory" }}>Events Page</h1>
      <ul style={{ color: "ivory" }}>
        <li onClick={() => handleShow("clash")}>Clash</li>
        <li onClick={() => handleShow("rc")}>Reverse Coding</li>
        <li onClick={() => handleShow("enigma")}>Enigma</li>
        <li onClick={() => handleShow("xodia")}>Xodia</li>
        <li onClick={() => handleShow("webweaver")}>Webweaver</li>
        <li onClick={() => handleShow("bplan")}>BPlan</li>
        <li onClick={() => handleShow("quiz")}>Quiz</li>
      </ul>

      <Animation></Animation>

      <Modal1
        show={show}
        handleClose={handleClose}
        type={type}
        event={event}
        event_info={EVENTS}
      />
      <div style={{ marginTop: "70vh" }}>
        <Footer />
      </div>
    </div>
  );
};

export default Events;
