import "./profile.css";
import React, { useState } from "react";
import jwt from "jwt-decode";
import Footer from "../Footer/footer";
import $ from "jquery";

const Profile = () => {
  const logout = () => {
    localStorage.removeItem("user");
    window.location.reload(false); //refresh page
  };

  var screenHeight = window.screen.height;
  if (screenHeight < 901) {
    $("body").css("zoom", 0.8);
  } else {
    $("body").css("zoom", 1);
  }

  let user = "";

  if (localStorage.getItem("user")) {
    user = jwt(localStorage.getItem("user"));

    return (
      <div className='profilepage'>
        <div className='container'>
          <div className='wrapper'>
            <div className='pro  '>
              <div className='pro-pic'>
                {/* <img src='avatar.png' alt='profile' srcset='' /> */}
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
                      {JSON.stringify(user["email"]).replace(/^"(.*)"$/, "$1")}
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
                <img src='rankk.png' alt='award' srcset='' />
                <p className='rank-num'>#7</p>
              </div>
            </div>
            <div className='eve '>
              <div className='eve-title'>
                <i class='fa fa-check-circle'></i>
                <p className='reg-eve'>Registered Events</p>
              </div>
              {/* <p className='title'>Registered Events</p> */}
              <div className='table-container'>
                <table className='table table-striped table-dark'>
                  <tbody>
                    <tr>
                      <th scope='row'>1</th>
                      <td>
                        {/* <img src='./logos/clash.png' alt='' /> */}
                        Clash
                      </td>
                    </tr>
                    <tr>
                      <th scope='row'>2</th>
                      <td>Reverse Coding</td>
                    </tr>
                    <tr>
                      <th scope='row'>3</th>
                      <td>Pixelate</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className='svg'>
              <img src='award.svg' alt='svg' />
            </div>
          </div>
          <div className='logout-wrap'>
            <button className='btn  logout' type='button' onClick={logout}>
              Logout
            </button>
          </div>
        </div>
        <div style={{ marginTop: "18px" }}>
          <Footer />
        </div>
      </div>
    );
  } else {
    return (
      <div className='profilepage'>
        <h1>Login to view your profile!</h1>
      </div>
    );
  }
};

export default Profile;
