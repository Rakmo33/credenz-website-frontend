import "../Profilepage/profile.css";
import React, { useState, useEffect } from "react";
import Footer from "../Footer/footer";
import SideEventButton from "../sideEventButton/sideEvent";
import LoginFirst from "../LoginFirst/LoginFirst";
import axios from "axios";
import jwt_decode from "jwt-decode";
import jwt from "jwt-decode";
import Nav from "../Navbar/Navbar";
import RegEve from "./registeredEvents";
//import jwt from "jwt-decode";
import $ from "jquery";

const Approve = () => {
  // const logout = () => {
  //   localStorage.removeItem("user");
  //   window.location.reload(false); //refresh page
  // };

  console.log(`${process.env.REACT_APP_API_URL}/LOL`);

  const [Events, setEvents] = useState(undefined);
  const [regAr, setRegAr] = useState([]);

  var screenHeight = window.screen.height;
  if (screenHeight < 901) {
    $(document).ready(function () {
      // your code here...
      $(".profilepage .container").css({ transform: "scale(0.85)" });
    });
  } else {
    $(document).ready(function () {
      // your code here...
      $(".profilepage .container").css({ transform: "scale(1)" });
    });
  }

  let user = "";
  let i = 0;
  let arr = [];
  let promises = [];
  function getEvents() {
    if (localStorage.getItem("user")) {
      var token = localStorage.getItem("user");
      if (token !== undefined || token !== "") {
        var decoded = jwt_decode(token);
        user = jwt(localStorage.getItem("user"));
        const accessToken = JSON.parse(token).accessToken;
        //alert(typeof(decoded.username))

        // const loading = async () => {
        for (i = 0; i < 100; i++) {
          promises.push(
            axios({
              method: "get",
              url: `${process.env.REACT_APP_API_URL}/admin/allregs/` + i,
              headers: { authorization: `Bearer ${accessToken}` },
            })
              .then((response) => {
                // console.log(
                //   response.data
                // );
                let temp = response.data;
                arr.push(temp);
                console.log(arr);
                setRegAr(arr);
              })
              .catch((error) => {
                console.log(error);
              })
          );
        }
        // };

        Promise.all(promises).then(() => {
          // alert("LOL");

          setEvents(arr);
        });

        // loading().then(() => {});

        console.log(regAr);
      }
    }
  }

  useEffect(() => {
    getEvents();
    document.title = `CREDENZ LIVE | ADMIN`;
  }, []);

  if (localStorage.getItem("user")) {
    let count = 1;
    var EventList = [];
    user = jwt(localStorage.getItem("user"));

    // if (Events !== undefined) {
    //   Events.map((x) => {
    //       return (
    //     <div></div>
    //     );
    //   });
    // } else {
    //   EventList = "You have not registered for any event yet. ";
    // }

    // if (EventList.length === 0) {
    //   EventList = "You have not registered for any event yet. ";
    // }

    return (
      <div>
        <Nav />
        <div className='eve '>
          <div className='eve-title'>
            <i className='fa fa-check-circle'></i>
            <p className='reg-eve'>Registered Events</p>
          </div>
          <div className='table-container'>
            <table className='table table-striped table-dark'>
              <tbody>
                <RegEve eveList={Events} />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <SideEventButton />
        <LoginFirst></LoginFirst>
        <Footer />
      </div>
    );
  }
};

export default Approve;
