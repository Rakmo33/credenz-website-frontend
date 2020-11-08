import React, { useState } from "react";
import "./Register.css";
import SideEventsButton from "../sideEventButton/sideEvent";
import Footer from "../Footer/footer";

// form components
import NameWrap from "./NameWrap";
import NumberWrap from "./NumberWrap";
import MemberWrap from "./MemberWrap";
import EmailWrap from "./EmailWrap";
import YearWrap from "./YearWrap";
import CollegeList from "./CollegeList";
import EventWrap from "./EventWrap";
import Proceed from "./Proceed";

const Register = () => {
  // for total price
  const [total, settotal] = useState(0);

  // total number of events
  // const totalEvents = 9;

  const [events, setEvents] = useState([
    { id: "event1", name: "Clash", price: 100, isCheked: false },
    { id: "event2", name: "Reverse Coding", price: 50, isCheked: false },
    { id: "event3", name: "Pixelate", price: 50, isCheked: false },
    { id: "event4", name: "Cretronix", price: 50, isCheked: false },
    { id: "event5", name: "Bplan", price: 50, isCheked: false },
    { id: "event6", name: "Wallstreet", price: 50, isCheked: false },
    { id: "event7", name: "Roboliga", price: 50, isCheked: false },
    { id: "event8", name: "Enigma", price: 50, isCheked: false },
    { id: "event9", name: "Quiz", price: 50, isCheked: false },
  ]);

  const changeHandler = (eventNum) => {
    let tempEvents = [...events];

    // When Checked
    if (!tempEvents[eventNum].isCheked) {
      tempEvents[eventNum].isCheked = true;
      setEvents(tempEvents);

      settotal((total) => total + tempEvents[eventNum].price);
    }
    // When Unchecked
    else {
      tempEvents[eventNum].isCheked = false;
      setEvents(tempEvents);

      settotal((total) => total - tempEvents[eventNum].price);
    }
  };

  // display only first component
  const [isVisible, setVisible] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [anim, setAnim] = useState(["", "", "", "", "", "", "", ""]);

  // next click
  const nextHandler = () => {
    // find index of visible component
    const index = isVisible.findIndex((item) => item === true);
    // disable button for first component
    if (index === 5) {
      return;
    }
    let tempVisible = [...isVisible];

    // hide current
    tempVisible[index] = false;
    // display next
    tempVisible[index + 1] = true;

    // set animations
    let tempAnim = [...anim];
    tempAnim[index] = "toLeft";
    tempAnim[index + 1] = "fromRight";
    setAnim(tempAnim);

    // timeout for completion of animations before disappearing
    setTimeout(() => setVisible(tempVisible), 200);

    console.log(isVisible);
  };

  // prev click
  const prevHandler = () => {
    // find index of current
    const index = isVisible.findIndex((item) => item === true);

    // disable button for first component
    if (index === 0) {
      return;
    }

    let tempVisible = [...isVisible];
    // hide current
    tempVisible[index] = false;
    // display prev
    tempVisible[index - 1] = true;

    // set animations
    let tempAnim = [...anim];
    tempAnim[index - 1] = "fromLeft";
    tempAnim[index] = "toRight";
    setAnim(tempAnim);

    // timeout for completion of animations before disappearing
    setTimeout(() => setVisible(tempVisible), 200);

    console.log(isVisible);
  };

  return (
    <div>
      <SideEventsButton />
      <div className='regPage'>
        <h1 className='reg-head'>Registration Form</h1>
        <button id='back-btn' type='button' onClick={prevHandler}>
          Back
        </button>
        <button type='button' onClick={nextHandler}>
          Next
        </button>
        <div className='container'>
          <form className='col-md-9 m-auto' onSubmit={DisplayRazorpay}>
            <NameWrap
              isVisible={isVisible[0]}
              cls={`form-row ${anim[0]}`}></NameWrap>

            <YearWrap
              isVisible={isVisible[1]}
              cls={`form-row justify-spread ${anim[1]}`}></YearWrap>

            <NumberWrap
              isVisible={isVisible[2]}
              cls={`form-row ${anim[2]}`}></NumberWrap>

            <EmailWrap
              isVisible={isVisible[2]}
              cls={`form-row ${anim[2]}`}></EmailWrap>

            <MemberWrap
              isVisible={isVisible[3]}
              cls={`form-row justify-spread ${anim[3]}`}></MemberWrap>

            <CollegeList
              isVisible={isVisible[3]}
              cls={`form-row ${anim[3]}`}></CollegeList>

            <EventWrap
              changeHandler={changeHandler}
              events={events}
              isVisible={isVisible[4]}
              cls={`form-row ${anim[4]}`}></EventWrap>

            <Proceed
              isVisible={isVisible[5]}
              total={total}
              cls={`form-row ${anim[5]}`}></Proceed>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

// RAZORPAY
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

const _DEV_ = document.domain === "localhost";

async function DisplayRazorpay() {
  console.log("display razor called !");
  alert("display razor called !");
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

  if (!res) {
    alert("Razorpay SDK failed to load!");
    return;
  }

  const options = {
    key: _DEV_ ? "rzp_test_8OXCvHsV5OiOpe" : "prod-key", // Enter the Key ID generated from the Dashboard
    amount: "50000", // 100p = 1rupee
    currency: "INR",
    name: "Credenz",
    description: "Test Transaction",
    image: "",
    order_id: "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    handler: function (response) {
      alert("Pay here!");
      alert(response.razorpay_payment_id);
      alert(response.razorpay_order_id);
      alert(response.razorpay_signature);
    },
    prefill: {
      name: "Gaurav Kumar",
      email: "gaurav.kumar@example.com",
      contact: "9999999999",
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

export default Register;
