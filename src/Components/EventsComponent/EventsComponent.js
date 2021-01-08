import React, { useState, useEffect } from "react";
import SideEvent from "../sideEventButton/sideEvent";
import Modal1 from "../Modal/Modal";
import axios from "axios";
import Animation from "./Animation";
import Footer from "../Footer/footer";
import { Nav } from "react-bootstrap";
import Navbar from "../Navbar/Navbar";

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

  let type = false;

  return (
    <div className='evePage' style={{ marginTop: "70px" }}>
      <Navbar />
      <SideEvent />
      <Animation></Animation>
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
