import React, { useState, useEffect } from "react";
import SideEvent from "../sideEventButton/sideEvent";
import Modal1 from "../Modal/Modal";
import axios from "axios";
import Animation from "./Animation";
import Footer from "../Footer/footer";
import jwt from "jwt-decode";
import Alert from "../Alert/alert";
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

  const [showLogin, setShowLogin] = useState(false);
  const handleClose1 = () => setShowLogin(false);
  const handleShow1 = () => setShowLogin(true);

  // const handleShow = (event) => {
  //   setShow(true);
  //   setEvent(event);
  // };

  async function AllEvents() {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/allevents`
    );
    ////console.log("I am response" + response);
    const data = await response.data;
    ////console.log("I am data" + JSON.stringify(data));

    return data;
  }

  useEffect(() => {
    let result = AllEvents();
    document.title = `CREDENZ LIVE | Events`;
    result.then((res) => {
      setEVENTS(res);
      //window.location.reload(false); //refresh page
    });
  }, []);

  let type = false;

  function addToCart(
    event,
    cart,
    setCart,
    eventReg,
    setEventReg,
    selectedQuiz
  ) {
    if (localStorage.getItem("user")) {
      var cartArray = localStorage.getItem("Cart")
        ? localStorage.getItem("Cart").split(",")
        : [];

      var regArray = localStorage.getItem("Register")
        ? JSON.parse(localStorage.getItem("Register"))
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
        } else if (event === "Quiz") {
          if (!selectedQuiz[0] && !selectedQuiz[1] && !selectedQuiz[2]) {
            alert("Please select at least one quiz in order to proceed!");
            return;
          }

          let tempRegArray = [...regArray];
          let tempArray = [...cartArray];

          if (selectedQuiz[0]) {
            let singleRegObject = {
              team: "single",
              event: "Quiz",
              username: localStorage.getItem("user")
                ? JSON.stringify(user["username"]).replace(/"/g, "")
                : "",
            };
            tempRegArray.push(singleRegObject);

            tempArray.push("General Quiz");

            setTempCartNum((prev) => prev + 1);
          }
          if (selectedQuiz[1]) {
            let singleRegObject = {
              team: "single",
              event: "Quiz",
              username: localStorage.getItem("user")
                ? JSON.stringify(user["username"]).replace(/"/g, "")
                : "",
            };
            tempRegArray.push(singleRegObject);

            tempArray.push("MELA Quiz");

            setTempCartNum((prev) => prev + 1);
          }
          if (selectedQuiz[2]) {
            let singleRegObject = {
              team: "single",
              event: "Quiz",
              username: localStorage.getItem("user")
                ? JSON.stringify(user["username"]).replace(/"/g, "")
                : "",
            };
            tempRegArray.push(singleRegObject);

            tempArray.push("BizTech Quiz");

            setTempCartNum((prev) => prev + 1);
          }

          setEventReg(tempRegArray);
          localStorage.setItem("Register", JSON.stringify(tempRegArray));

          setCart(tempArray);
          localStorage.setItem("Cart", tempArray);
        } else {
          let singleRegObject = {
            team: "single",
            event: event,
            username: localStorage.getItem("user")
              ? JSON.stringify(user["username"]).replace(/"/g, "")
              : "",
          };
          //alert("reg" + props.register)
          let tempRegArray = [...regArray];
          //console.log(tempRegArray);
          //alert(JSON.stringify(tempRegArray));
          tempRegArray.push(singleRegObject);
          setEventReg(tempRegArray);
          localStorage.setItem("Register", JSON.stringify(tempRegArray));
        }

        if (event !== "Quiz") {
          let tempArray = [...cartArray];
          tempArray.push(event);
          setCart(tempArray);
          localStorage.setItem("Cart", tempArray);

          setTempCartNum((prev) => prev + 1);
        }
      } else {
        alert("Event already present in the cart!");
      }
    } else {
      handleShow1();
      //alert("Please log in before accessing the cart.");
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
      <Modal1 show={showLogin} handleClose={handleClose1} type={"login"} />
      <Footer />
    </div>
  );
};

export default Events;
