import React, {useState} from "react";
import "./Register.css";
import SideEventsButton from "../sideEventButton/sideEvent";
import Footer from "../Footer/footer";
//import axios from "axios";
import Nav from "../Navbar/Navbar";
import LoginFirst from "../LoginFirst/LoginFirst";
import axios from "axios";
import jwt_decode from "jwt-decode";
import jwt from "jwt-decode";
import Ipay from "../Ipay/Ipay";

function Cart() {

  const [pay, setPay] = useState(false);
  const [UPIname, setUPIname] = useState('');
  const [TransacID, setTransacID] = useState('');
  const [currentUser, setCurrentUser] = useState('');
  const getUsername = (event) => { 
    //get event names and their prices
    switch (event) {
      case "Clash":
        return ["clash",50 , 60];
      case "Reverse Coding":
        return ["rc", 50, 60];
      case "Pixelate":
        return ["pixelate", 50,40];
      case "Cretronix":
        return ["cretronix", 50,40];
      case "Bplan":
        return ["bplan", 120,100];
      case "Wallstreet":
        return ["wallstreet", 50,40];
      case "Datawiz":
        return ["datawiz", 50,60];
      case "Enigma":
        return ["enigma", 50,40];
      case "Quiz":
        return ["quiz", 50,40];
      case "Web Weaver":
        return ["webweaver", 50,60];
      case "Paper Presentation":
        return ["paperpresentation", 150,120];
      case "Network Treasure Hunt":
        return ["nth", 0,0];
      default:
        return "Invalid event";
    }
  }

  //get  current user to check if it is ieee member 
  let user ='';
  /*if (localStorage.getItem("user")) {
    var token = localStorage.getItem("user");
    
    if (token !== undefined || token !== "") {
      var decoded = jwt_decode(token);
      user = jwt(localStorage.getItem("user"));
      const accessToken = JSON.parse(token).accessToken;
        axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}/user/${decoded.username}`,
        headers: { authorization: `Bearer ${accessToken}` },
      })
        .then((response) => {
          setCurrentUser(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
      }
    }*/

    let sum = 0;    
    let RegItems = JSON.parse( localStorage.getItem("Register"));
    let i=1;
    if( currentUser.ieee && currentUser.ieee == true){
      i=2;
    }
    if(RegItems){
    RegItems.map((regItem)=>{
      sum = sum + getUsername(regItem.event)[i];
    })
  }
  

  function payment() {
    setPay(true);
    //alert("Payment gateway will open soon. Stay tuned!");
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
    ////console.log(newCart)
    localStorage.setItem("Cart", newCart);

    let oldRegItems = JSON.parse( localStorage.getItem("Register"));
    let newRegItems = oldRegItems.filter((regItem)=>regItem.event!==event)
    //alert(newRegItems)
    localStorage.setItem("Register", JSON.stringify(newRegItems));
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
          <tr key={count}>
            <td key={count}>{count++}</td>
            <td key={x}>{x}</td>
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

    let RegItems = JSON.parse( localStorage.getItem("Register"));
   // let RegItems1 = localStorage.getItem("Register").split(",");
    
    //alert(JSON.stringify(RegItems1))
    //alert(typeof(RegItems))

    /*
    API call
    */

   const token = localStorage.getItem("user");
   const accessToken = JSON.parse(token).accessToken;
   var decoded = jwt_decode(token);
   //alert(JSON.stringify(decoded))

   console.log(RegItems)

    RegItems.map((regItem)=>{

      //alert(JSON.stringify(regItem))
      //axios
      //console.log(regItem.team)

      if (regItem.team === "single") {

        if(regItem.username===decoded.username) {
          axios({
            method: "post",
            url: `${process.env.REACT_APP_API_URL}/${decoded.username}/${
              getUsername(regItem.event)[0]
            }`,
            data:{
              trans_id:TransacID,
              approved:false
            },
            headers: { authorization: `Bearer ${accessToken}` },
          })
            .then((response) => {
           //   alert("insingle : " + JSON.stringify(response.data))
              console.log("insingle : " + JSON.stringify(response.data));
            })
            .catch((error) => {
              alert("Error!" + error); //request fails with 500 
            });
        }

      } else {

        var players = [];
        let count = 1;

        if (regItem.name1 !== "") {
          count++;
          players[0] = regItem.name1;
        }
        if (regItem.name2 !== "") {
          count++;
          players[1] = regItem.name2;
        }
        if (regItem.name3 !== "") {
          count++;
          players[2] = regItem.name3;
        }

        if(regItem.username===decoded.username) {
          axios
          .post(
            `${process.env.REACT_APP_API_URL}/addteam`,
            {
              //...data
              players: players,
              event_name: getUsername(regItem.event)[0],
              team_username: regItem.teamName,
              no_of_players: count,
              trans_id:TransacID,
              approved:false
            },
            {
              headers: {
                authorization: `Bearer ${accessToken}`,
              },
            }
          )
          .then((response) => {
  //            alert("team :" + JSON.stringify(response.data))
            console.log("team :" + JSON.stringify(response.data));
          })
          .catch((error) => {
            console.log("Axios error : " + error); //request fails with 500
          });
        }
        //console.log("else");
      } //else

    })
    setPay(true);
    clearCart();
  }





  if (localStorage.getItem("user")) {
    return (
      <div>
        <Nav />
        <SideEventsButton />
        <div className='regPage'>
          <div className='regPageVector'>

          {pay &&
          <div className='responsiveTable' style={{order:2}}>
            <h1 className='reg-head'>Transaction details</h1>
            <br/>
            {/* <div className='input-group col-lg-12 mb-4'>
                  <input
                    id='name'
                    type='text'
                    name='name'
                    placeholder='Name of UPI holder'
                    className='form-control bg-white border-md'
                    onChange={(e) => setUPIname(e.target.value)}
                    value={UPIname}
                    required
                  />    
              </div> */}
            <div className='input-group col-lg-12 mb-4'>
                  <input
                    id='transactionNumber'
                    type='text'
                    name='phone'
                    pattern=".{10,}"
                    placeholder='Transaction ID'
                    className='form-control bg-white border-md'
                    onChange={(e) => setTransacID(e.target.value)}
                    value={TransacID}
                    required
                  />    
              </div>
              <div>
                  <button
                    type='submit'
                    className='btn stylebtn btn-block py-2'
                    >
                    <span onClick={Register} className='font-weight-bold'>
                      Click here after payment to register
                    </span>

                  </button>
              </div>
          </div>}

          {!pay &&
            <div>
            <h1 className='reg-head'>Your cart</h1>
            <img
              src={require("../../assests/img/register.svg")}
              alt='registration form'
              width='350'
            /> </div>}
          </div>
          <div className='container'>
            <div className='row'>
              <div className='col'>
              {!pay &&
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
                    <tr>
                      <td></td>
                      <td>
                        <button onClick={payment} type='button' className='btn btn-outline-info'>
                          Proceed to pay Rs {sum}
                        </button>
                        <Ipay sum={sum}/>
                      </td>
                      <td></td>
                    </tr> 
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
                </table>}

                {
                  pay &&  
                  <><img
                    src={require("../../assests/img/gpay.jpeg")}
                    alt='gpay'
                    width='350'
                  />
                  <div style={{color:'white', margin:'10px'}}>
                   <h4>UPI ID :</h4> <h4>9834570868@okbizaxis</h4>
                  </div>
                  </>
                }

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
