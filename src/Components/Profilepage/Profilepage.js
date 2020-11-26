import "./profile.css";
import React, { useState } from "react";
import jwt from "jwt-decode";
import Footer from "../Footer/footer";

const Profile = () => {
  const logout = () => {
    localStorage.removeItem("user");
    window.location.reload(false); //refresh page
  };

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

                {/* <p className='pro-clg'>College : </p> */}
                {/* <p className='pro-clg'>Email &nbsp;&nbsp;:</p> */}
                {/* <p className='pro-clg'>Contact :</p> */}
                {/* </div> */}
                {/* <div className='pro-info2'> */}
                {/* <p className='pro-clg'>{JSON.stringify(user["clgname"])}</p> */}
                {/* <p className='pro-clg'>{JSON.stringify(user["email"])}</p> */}
                {/* <p className='pro-clg'>{JSON.stringify(user["phoneno"])}</p> */}
                {/* </div> */}

                {/* <p className='pro-rank'>2nd</p> */}
                {/* <p className='pro-events'>7</p> */}
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
              <p className='title'>Registered Events</p>
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

            <div className='svg'>
              <img src='award.svg' alt='svg' />
            </div>

            <div>
              <button className='btn custombtn' type='button' onClick={logout}>
                Logout
              </button>
            </div>
          </div>
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
