import React, { useState } from "react";
import "./Register.css";
import SideEventsButton from "../sideEventButton/sideEvent";
import Footer from "../Footer/footer";

// form components
import Name from "./Name";
import Number from "./Number";
import Email from "./Email";
import Radio from "./Radio";
import EventCard from "./EventCard";

const Register = () => {
  // for total price
  const [count, setCount] = useState(0);

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

  function changeHandler(eventNum) {
    let tempEvents = [...events];

    // When Checked
    if (!tempEvents[eventNum].isCheked) {
      tempEvents[eventNum].isCheked = true;
      setEvents(tempEvents);

      setCount((count) => count + tempEvents[eventNum].price);
    }
    // When Unchecked
    else {
      tempEvents[eventNum].isCheked = false;
      setEvents(tempEvents);

      setCount((count) => count - tempEvents[eventNum].price);
    }
  }

  return (
    <div>
      <SideEventsButton />
      <div className='regPage'>
        <h1 className='reg-head'>Registration Form</h1>
        <div className='container'>
          <form className='col-md-7 m-auto' onSubmit={DisplayRazorpay}>
            <div className='form-row'>
              {/* NAME OF PARTICIPANTS */}
              <Name index={1} id='Name1'></Name>
              <Name index={2} id='Name2'></Name>
              <Name index={3} id='Name3'></Name>
              <Name index={4} id='Name4'></Name>
            </div>
            <div className='form-row justify-spread'>
              {/* FE-SE-TE-BE RADIO BUTTONS */}
              {/* <div className='form-group col-md-12 years'> */}
              <Radio
                index={1}
                id='Radio1'
                name='year'
                value='FE'
                label='FE'></Radio>
              <Radio
                index={2}
                id='Radio2'
                name='year'
                value='SE'
                label='SE'></Radio>
              <Radio
                index={3}
                id='Radio3'
                name='year'
                value='TE'
                label='TE'></Radio>
              <Radio
                index={4}
                id='Radio4'
                name='year'
                value='BE'
                label='BE'></Radio>
              {/* </div> */}
            </div>

            {/* Contact Numbers */}
            <div className='form-row'>
              <Number index={1} id='inputContact1'></Number>
              <Number index={2} id='inputContact2'></Number>
              {/* </div> */}

              {/* Emails */}
              {/* <div className='form-row'> */}
              <Email index={1} id='inputEmail1'></Email>
              <Email index={2} id='inputEmail2'></Email>
            </div>

            <div className='form-row justify-spread'>
              <Radio
                index={1}
                id='Radio5'
                name='membership'
                value='true'
                label='IEEE Member'></Radio>
              <Radio
                index={1}
                id='Radio6'
                name='membership'
                value='false'
                label='Non IEEE Member'></Radio>
            </div>

            <div className='form-row'>
              <label htmlFor='inputState'>College Name</label>
              <select id='inputState' className='form-control'>
                <option defaultValue>Choose...</option>
                <option>PICT</option>
                <option>COEP</option>
                <option>MCOE</option>
                <option>VIT</option>
              </select>
            </div>

            {/* FE-SE-TE-BE RADIO BUTTONS */}
            <p id='choose-events'>Choose Events</p>

            <div className='form-group col-md-12 event-icons'>
              {events.map((event, index) => {
                return (
                  <EventCard
                    key={index}
                    id={event.id}
                    name={event.name}
                    price={event.price}
                    isCheked={event.isCheked}
                    cls={
                      event.isCheked
                        ? "custom-control-label event1 drinkcard-cc true"
                        : "custom-control-label event1 drinkcard-cc"
                    }
                    changeHandler={() => changeHandler(index)}></EventCard>
                );
              })}
            </div>

            <div className='col-sm-6 d-flex justify-content-center m-auto'>
              <button className='btn btn-primary next-btn'>
                Proceed For Payment
                <br />
                <span id='total-amount'>₹{count}</span>
              </button>
            </div>
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
