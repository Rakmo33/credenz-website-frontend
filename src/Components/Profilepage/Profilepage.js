import React from "react";
import "./profile.css";

const Profile = () => {
  return (
    <div className='profilepage'>
      <div className='container'>
        <div className='wrapper'>
          <div className='pro  '>
            <div className='pro-pic'>
              <img src='avatar.png' alt='profile' srcset='' />
              <p className='pro-username'>Rakmo33</p>
            </div>
            <div className='pro-info '>
              <div className='pro-info1'>
                <p className='pro-name'>Name&nbsp; &nbsp; :</p>
                <p className='pro-clg'>College :</p>
                <p className='pro-clg'>Email &nbsp;&nbsp;:</p>
                <p className='pro-clg'>Contact :</p>
              </div>
              <div className='pro-info2'>
                <p className='pro-name'>Omkar Dabir</p>
                <p className='pro-clg'>PICT, Pune</p>
                <p className='pro-clg'>omkardabir2013@gmail.com</p>
                <p className='pro-clg'>7507601084</p>
              </div>

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
            <table class='table table-striped table-dark'>
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
        </div>
      </div>
    </div>
  );
};

export default Profile;

// <div
//         style={{
//           display: "flex",
//           justifyContent: "space-around",

//           maxWidth: "550px",
//           margin: "5% 5%",
//         }}>
//         <div>
//           <img
//             style={{ width: "160px", height: "160px", borderRadius: "80px" }}
//             alt='avatar'
//             src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTU4TdrkxNElS4sy9i0HLQEDfnqicbXmKqbvg&usqp=CAU'
//           />
//         </div>
//         <div>
//           <h4>name</h4>
//           <h4>rank:1</h4>
//           <h4>leaderboard</h4>
//           <div style={{ display: "inline", margin: "5%" }}>
//             <h6>college</h6>
//             <h6>username</h6>
//             <h6>event count</h6>
//           </div>
//         </div>
//       </div>
//       <div style={{ display: "flex" }}>
//         <h2 style={{ margin: " 5%" }}>Registered events</h2>
//         <div style={{ display: "inline", margin: "5%" }}>
//           <br />
//           <br />
//           <h6>event</h6>
//           <h6>event</h6>
//           <h6>event </h6>
//         </div>
//       </div>
