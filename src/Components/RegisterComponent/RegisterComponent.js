import React, { useState } from "react";
import { useForm } from "react-hooks-helper";
import "./Register.css";
import SideEventsButton from "../sideEventButton/sideEvent";
import Footer from "../Footer/footer";
import axios from "axios";
import $ from "jquery";
// form components
import NameWrap from "./NameWrap";
import NumberWrap from "./NumberWrap";
import MemberWrap from "./MemberWrap";
import EmailWrap from "./EmailWrap";
import YearWrap from "./YearWrap";
import CollegeList from "./CollegeList";
import EventWrap from "./EventWrap";
import Proceed from "./Proceed";
import NavigateButton from "./NavigateButton";
import LoginFirst from "../LoginFirst/LoginFirst";
import jwt_decode from "jwt-decode";
import jwt from "jwt-decode";

const Register = () => {
  var screenHeight = window.screen.height;
  if (screenHeight < 901) {
    $(document).ready(function () {
      // your code here...
      $(".regPage").css({ transform: "scale(0.85)" });
    });
  } else {
    $(document).ready(function () {
      // your code here...
      $(".regPage").css({ transform: "scale(1)" });
    });
  }
  // for total price
  const [total, setTotal] = useState(0);
  const [events, setEvents] = useState([
    {
      id: "event1",
      name: "Clash",
      username: "clash",
      price: 100,
      isCheked: false,
    },
    {
      id: "event2",
      name: "Reverse Coding",
      username: "rc",
      price: 50,
      isCheked: false,
    },
    {
      id: "event3",
      name: "Pixelate",
      username: "pixelate",
      price: 50,
      isCheked: false,
    },
    {
      id: "event4",
      name: "Cretronix",
      username: "cretronix",
      price: 50,
      isCheked: false,
    },
    {
      id: "event5",
      name: "Bplan",
      username: "bplan",
      price: 50,
      isCheked: false,
    },
    {
      id: "event6",
      name: "Wallstreet",
      username: "wallstreet",
      price: 50,
      isCheked: false,
    },
    {
      id: "event7",
      name: "Datawiz",
      username: "datawiz",
      price: 50,
      isCheked: false,
    },
    {
      id: "event8",
      name: "Enigma",
      username: "enigma",
      price: 50,
      isCheked: false,
    },
    {
      id: "event9",
      name: "Quiz",
      username: "quiz",
      price: 50,
      isCheked: false,
    },
    {
      id: "event10",
      name: "Web Weaver",
      username: "webweaver",
      price: 50,
      isCheked: false,
    },
    {
      id: "event11",
      name: "Paper Presentation",
      username: "paperpresentation",
      price: 50,
      isCheked: false,
    },
    {
      id: "event12",
      name: "Network Treasure Hunt",
      username: "nth",
      price: 50,
      isCheked: false,
    },
  ]);

  let user = "";
  //alert("JUST BEFORE IF")
  if (localStorage.getItem("user")) {
    user = jwt(localStorage.getItem("user"));
    //alert(user)
  }

  let defaultFormData = {
    name1: localStorage.getItem("user")
      ? JSON.stringify(user["name"]).replace(/"/g, "")
      : "",
    name2: "",
    name3: "",
    name4: "",
    year: undefined,
    number1: localStorage.getItem("user")
      ? JSON.stringify(user["phoneno"]).replace(/"/g, "")
      : "",
    number2: undefined,
    email1: localStorage.getItem("user")
      ? JSON.stringify(user["email"]).replace(/"/g, "")
      : "",
    email2: "",
    isMember: undefined,
    college: localStorage.getItem("user")
      ? JSON.stringify(user["email"]).replace(/"/g, "")
      : "",
    events: {},
  };

  const [formData, setFormData] = useForm(defaultFormData);

  // disable buttons
  const [showPrevBtn, setPrev] = useState(false);
  const [showNextBtn, setNext] = useState(true);

  // display only first component
  const [isVisible, setVisible] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [anim, setAnim] = useState(["", "", "", "", "", ""]);

  if (localStorage.getItem("user")) {
    user = jwt(localStorage.getItem("user"));

    // total number of events
    // const totalEvents = 9;

    const changeHandler = (eventNum) => {
      let tempEvents = [...events];
      // When Checked
      if (!tempEvents[eventNum].isCheked) {

        console.log("checked : " + JSON.stringify(tempEvents[eventNum]))

        tempEvents[eventNum].isCheked = true;
        setEvents(tempEvents);
        setTotal((total) => total + tempEvents[eventNum].price);
      }
      // When Unchecked
      else {
        tempEvents[eventNum].isCheked = false;
        setEvents(tempEvents);
        setTotal((total) => total - tempEvents[eventNum].price);
      }
    };

    const nextHandler = () => {
      // find index of visible component
      const index = isVisible.findIndex((item) => item === true);

     
      setPrev(true);
      setNext(true);

      if (index === 4) {
        setNext(false);
      }

      if (index === 5) {
        return;
      }

      let tempVisible = [...isVisible];

      // hide current
      tempVisible[index] = false;
      // display next
      tempVisible[index + 1] = true;

      // set animations
      let tempAnim = ["", "", "", "", "", ""];
      tempAnim[index] = "toLeft";
      tempAnim[index + 1] = "fromRight";
      setAnim(tempAnim);

      // timeout for completion of animations before disappearing
      setTimeout(() => setVisible(tempVisible), 200);
    }; //next

    // prev click
    const prevHandler = () => {
      // find index of current
      const index = isVisible.findIndex((item) => item === true);
      setPrev(true);
      setNext(true);

      if (index === 1) {
        setPrev(false);
      }

      if (index === 0) {
        return;
      }

      // disable button for first component

      let tempVisible = [...isVisible];
      // hide current
      tempVisible[index] = false;
      // display prev
      tempVisible[index - 1] = true;

      // set animations
      let tempAnim = ["", "", "", "", "", ""];
      tempAnim[index - 1] = "fromLeft";
      tempAnim[index] = "toRight";
      setAnim(tempAnim);

      // timeout for completion of animations before disappearing
      setTimeout(() => setVisible(tempVisible), 200);
    };

   
    //alert(typeof(decoded.username))
    const _DEV_ = document.domain === "localhost";

    async function DisplayRazorpay(e) {
      e.preventDefault();
      console.log("display razor called !");

      console.log(JSON.stringify(events))

      const token = localStorage.getItem("user");
      // alert(typeof(token))
       const accessToken = JSON.parse(token).accessToken;
       var decoded = jwt_decode(token);
   
      console.log("type" + typeof(accessToken))
      console.log(accessToken)
   

      events.forEach((event) => {
        if (event.isCheked === true) {

          axios.post(`http://credenzwebsite.herokuapp.com/${decoded.username}/${event.username}`, {
                headers: {
                  authorization: `Bearer ${accessToken}` 
                }
              }).then((response) => {
                console.log("registered!" + JSON.stringify(response.data));
              })
              .catch((error) => {
                console.log(error);
              });

          /*
          axios({
            method: "post",
            url: `http://credenzwebsite.herokuapp.com/${decoded.username}/${event.username}`,
            headers: { authorization: `Bearer ${accessToken}` },
          })
            .then((response) => {
              console.log("event checked" + JSON.stringify(response.data));
            })
            .catch((error) => {
              console.log("Axios error : " + error);//request fails with 500
            });*/
        }
      });

      console.log("display razor called !");

      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );

      if (!res) {
        alert("Razorpay SDK failed to load!");
        return;
      }

      const data = await axios
        .post("http://credenzwebsite.herokuapp.com/razorpay")
        .then(function (response) {
          console.log(response);
          console.log(JSON.stringify(response));
          return response;
        });

      //alert("Data " + data);

      const options = {
        key: _DEV_ ? "rzp_test_8OXCvHsV5OiOpe" : "prod-key", // Enter the Key ID generated from the Dashboard
        //"amount": "50000", // 100p = 1rupee
        //"currency": "INR",
        name: "Credenz",
        description: "Test Transaction",
        image: "",
        //"order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        handler: function (response) {
          alert(response.razorpay_payment_id);
          alert(response.razorpay_order_id);
          alert(response.razorpay_signature);
        },

        prefill: {
          name: localStorage.getItem("user")
            ? JSON.stringify(user["name"]).replace(/"/g, "")
            : "",
          email: localStorage.getItem("user")
          ? JSON.stringify(user["email"]).replace(/"/g, "")
          : "",
          contact: localStorage.getItem("user")
          ? JSON.stringify(user["phoneno"]).replace(/"/g, "")
          : "",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#F37254",
        },
      };
      const paymentObject = new window.Razorpay(options);

      paymentObject.open();

    }

    //RAZORPAY
    function loadScript(src) {
      console.log("load razor called !");

      return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;

        script.onload = () => {
          resolve(true);
        };
        script.onerror = () => {
          resolve(false);
        };

        document.body.appendChild(script);
      });
    }


    return (
      <div>
        <SideEventsButton />
        <div className='regPage'>
          <h1 className='reg-head'>Registration Form</h1>

          <div className='container'>
            <NavigateButton
              id='back-btn'
              handler={prevHandler}
              isVisible={showPrevBtn}>
              <i className='fa fa-chevron-circle-left' aria-hidden='true'></i>
            </NavigateButton>

            <form className='col-md-9 m-auto' onSubmit={DisplayRazorpay}>
              <NameWrap
                isVisible={isVisible[0]}
                cls={`parent ${anim[0]}`}
                formData={formData}
                setFormData={setFormData}></NameWrap>

              <YearWrap
                isVisible={isVisible[1]}
                cls={`parent ${anim[1]}`}
                formData={formData}
                setFormData={setFormData}></YearWrap>

              <NumberWrap
                isVisible={isVisible[2]}
                cls={`parent ${anim[2]}`}
                formData={formData}
                setFormData={setFormData}></NumberWrap>

              <EmailWrap
                isVisible={isVisible[2]}
                cls={`parent ${anim[2]}`}
                formData={formData}
                setFormData={setFormData}></EmailWrap>

              <MemberWrap
                isVisible={isVisible[3]}
                cls={`parent ${anim[3]}`}
                formData={formData}
                setFormData={setFormData}></MemberWrap>

              <CollegeList
                isVisible={isVisible[3]}
                cls={`parent ${anim[3]}`}
                formData={formData}
                setFormData={setFormData}></CollegeList>

              <EventWrap
                changeHandler={changeHandler}
                events={events}
                isVisible={isVisible[4]}
                cls={`parent ${anim[4]}`}
                formData={formData}
                setFormData={setFormData}
                total={total}></EventWrap>

              <Proceed
                isVisible={isVisible[5]}
                total={total}
                cls={`col-sm-6 d-flex justify-content-center m-auto proceed-btn ${anim[5]}`}
                formData={formData}
                setFormData={setFormData}></Proceed>
            </form>

            <NavigateButton
              id='nxt-btn'
              handler={nextHandler}
              isVisible={showNextBtn}>
              <i className='fa fa-chevron-circle-right' aria-hidden='true'></i>
            </NavigateButton>
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
};

export default Register;
