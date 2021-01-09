import "./profile.css";
import React, { useState, useEffect } from "react";
import Footer from "../Footer/footer";
import SideEventButton from "../sideEventButton/sideEvent";
import LoginFirst from "../LoginFirst/LoginFirst";
import axios from "axios";
import jwt_decode from "jwt-decode";
import jwt from "jwt-decode";
import Nav from "../Navbar/Navbar";
//import jwt from "jwt-decode";
import $ from "jquery";

const Profile = () => {
  // const logout = () => {
  //   localStorage.removeItem("user");
  //   window.location.reload(false); //refresh page
  // };

  const [Events, setEvents] = useState(undefined);

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

  function getEvents() {
    if (localStorage.getItem("user")) {
      var token = localStorage.getItem("user");
      if (token !== undefined || token !== "") {
        var decoded = jwt_decode(token);
        user = jwt(localStorage.getItem("user"));
        const accessToken = JSON.parse(token).accessToken;
        //alert(typeof(decoded.username))

        console.log("type" + typeof accessToken);
        console.log(accessToken);

        axios({
          method: "get",
          url: `http://credenzwebsite.herokuapp.com/${decoded.username}/present`,
          headers: { authorization: `Bearer ${accessToken}` },
        })
          .then((response) => {
            console.log(
              response.data.map((obj) => {
                return obj.event_username;
              })
            );
            setEvents(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } else {
      console.log("logged out!");
    }
  }

  useEffect(() => {
    getEvents();
  }, []);

  if (localStorage.getItem("user")) {
    let count = 1;
    var EventList;
    user = jwt(localStorage.getItem("user"));

    if (Events !== undefined) {
      EventList = Events.map((x) => {
        return (
          <tr>
            <th scope='row'>{count++}</th>
            <td>{x.event_username}</td>
          </tr>
        );
      });
    } else {
      EventList = "You have not registered for any event yet. ";
    }

    if (EventList.length === 0) {
      EventList = "You have not registered for any event yet. ";
    }

    return (
      <div>
        <Nav />
        <div className='profilepage'>
          <div className='container'>
            <div className='wrapper'>
              <div className='pro  '>
                <div className='pro-pic'>
                  <i className='fa fa-id-card'></i>
                  <p className='pro-username'>
                    {JSON.stringify(user["username"]).replace(/^"(.*)"$/, "$1")}
                  </p>
                </div>
                <div className='pro-info col-12'>
                  {/* <div className='pro-info1'> */}
                  <div className='row'>
                    <p className='pro-info1'>
                      <i className='fa fa-user'></i>
                      <span>Name &nbsp;&nbsp;&nbsp;&nbsp;:</span>
                    </p>
                    <div className='pro-info2'>
                      <p>
                        {JSON.stringify(user["name"]).replace(/^"(.*)"$/, "$1")}
                      </p>
                    </div>
                  </div>
                  <div className='row'>
                    <p className='pro-info1'>
                      <i className='fa fa-university'></i>
                      <span>College :</span>
                    </p>
                    <div className='pro-info2'>
                      <p>
                        {JSON.stringify(user["clgname"]).replace(
                          /^"(.*)"$/,
                          "$1"
                        )}
                      </p>
                    </div>
                  </div>
                  <div className='row'>
                    <p className='pro-info1'>
                      <i className='fa fa-envelope'></i>
                      <span>Email &nbsp;&nbsp;:</span>
                    </p>
                    <div className='pro-info2'>
                      <p>
                        {JSON.stringify(user["email"]).replace(
                          /^"(.*)"$/,
                          "$1"
                        )}
                      </p>
                    </div>
                  </div>
                  <div className='row'>
                    <p className='pro-info1'>
                      <i className='fa fa-phone-square'></i>
                      <span>Contact :</span>
                    </p>
                    <div className='pro-info2'>
                      <p>{JSON.stringify(user["phoneno"])}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='rank '>
                <p className='title'>Your Rank</p>
                <div className='rank-pic'>
                  <img src='img/rankk.png' alt='award' />
                  <p className='rank-num'>#7</p>
                </div>
              </div>
              <div className='eve '>
                <div className='eve-title'>
                  <i className='fa fa-check-circle'></i>
                  <p className='reg-eve'>Registered Events</p>
                </div>
                <div className='table-container'>
                  <table className='table table-striped table-dark'>
                    <tbody>{EventList}</tbody>
                  </table>
                </div>
              </div>

              <div className='svg'>
                <img src='img/award.svg' alt='svg' />
              </div>
            </div>
          </div>
        </div>
        <SideEventButton />
        <Footer />
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

export default Profile;
