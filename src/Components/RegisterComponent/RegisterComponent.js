import React, { useState } from "react";
import { useForm } from "react-hooks-helper";
import "./Register.css";
import SideEventsButton from "../sideEventButton/sideEvent";
import Footer from "../Footer/footer";
import axios from "axios"

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
import jwt_decode from "jwt-decode";


const Register = () => {
  // for total price
  const [total, setTotal] = useState(0);

  const defaultFormData = {
    name1: "",
    name2: "",
    name3: "",
    name4: "",
    year: undefined,
    number1: undefined,
    number2: undefined,
    email1: "",
    email2: "",
    isMember: undefined,
    college: undefined,
    events: {},
  };

  // total number of events
  // const totalEvents = 9;

  const [events, setEvents] = useState([
    { id: "event1", name: "Clash",username:"clash", price: 100, isCheked: false },
    { id: "event2", name: "Reverse Coding", username:"rc",price: 50, isCheked: false },
    { id: "event3", name: "Pixelate",username:"pixelate", price: 50, isCheked: false },
    { id: "event4", name: "Cretronix",username:"cretronix", price: 50, isCheked: false },
    { id: "event5", name: "Bplan",username:"bplan", price: 50, isCheked: false },
    { id: "event6", name: "Wallstreet",username:"wallstreet", price: 50, isCheked: false },
    { id: "event7", name: "Roboliga", username:"roboliga",price: 50, isCheked: false },
    { id: "event8", name: "Enigma", username:"enigma",price: 50, isCheked: false },
    { id: "event9", name: "Quiz", username:"quiz",price: 50, isCheked: false },
  ]);

  const changeHandler = (eventNum) => {
    let tempEvents = [...events];

    // When Checked
    if (!tempEvents[eventNum].isCheked) {
      tempEvents[eventNum].isCheked = true;
      setEvents(tempEvents);

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

  // next click
  const nextHandler = () => {
    // find index of visible component
    const index = isVisible.findIndex((item) => item === true);

    if (index === 0) {
      if (formData.name1 === "") {
        document.querySelector("#Name1").classList.add("err");
        document.querySelector("span#Name1").innerHTML =
          "This Field Is Required!";
        return;
      }
    }

    if (index === 1) {
      if (formData.year === undefined) {
        document.querySelector("#Radio1").classList.add("err");
        document.querySelector("span#yearErrMsg").innerHTML =
          "Please Select A Category!";
        document.querySelector("span#yearErrMsg").classList.add("txt-center");
        return;
      }
    }

    let err = false;

    if (index === 2) {
      if (!/^[6789]\d{9}$/.test(formData.number1)) {
        document.querySelector("span#inputContact1").innerHTML =
          "Enter Valid Contact Number!";
        document.querySelector("#inputContact1").classList.add("err");

        err = true;
      } else {
        document.querySelector("span#inputContact1").innerHTML = "";
        document.querySelector("#inputContact1").classList.remove("err");

        err = false;
      }
      if (!/^[6789]\d{9}$/.test(formData.number2)) {
        document.querySelector("span#inputContact2").innerHTML =
          "Enter Valid Contact Number!";
        document.querySelector("#inputContact2").classList.add("err");

        err = true;
      } else {
        document.querySelector("span#inputContact2").innerHTML = "";
        document.querySelector("#inputContact2").classList.remove("err");

        err = false;
      }
      if (
        !/^\w+[\S\w+]*@[a-zA-Z]+\.([a-zA-Z]+\.)?[a-zA-Z]+$/.test(
          formData.email1
        )
      ) {
        document.querySelector("span#inputEmail1").innerHTML =
          "Enter Valid Email!";
        document.querySelector("#inputEmail1").classList.add("err");

        err = true;
      } else {
        document.querySelector("span#inputEmail1").innerHTML = "";
        document.querySelector("#inputEmail1").classList.remove("err");

        err = false;
      }
      if (
        !/^\w+[\S\w+]*@[a-zA-Z]+\.([a-zA-Z]+\.)?[a-zA-Z]+$/.test(
          formData.email2
        )
      ) {
        document.querySelector("span#inputEmail2").innerHTML =
          "Enter Valid Email!";
        document.querySelector("#inputEmail2").classList.add("err");

        err = true;
      } else {
        document.querySelector("span#inputEmail2").innerHTML = "";
        document.querySelector("#inputEmail2").classList.remove("err");

        err = false;
      }
      if (err) return;
    }

    if (index === 3) {
      if (formData.isMember === undefined) {
        document.querySelector("span#memberErrMsg").innerHTML =
          "Please Choose An Option!";
        document.querySelector("span#memberErrMsg").classList.add("txt-center");
        err = true;
      } else {
        document.querySelector("span#memberErrMsg").innerHTML = "";
        err = false;
      }

      if (formData.college === undefined) {
        document.querySelector("span#clgErrMsg").innerHTML =
          "Please Select Your College";
        document.querySelector("span#clgErrMsg").classList.add("txt-center");
        err = true;
      } else {
        document.querySelector("span#clgErrMsg").innerHTML = "";
        err = false;
      }

      if (err) return;
    }

    if (index === 4) {
      err = true;

      for (var e in formData.events) {
        // if at least one event is selected
        if (formData.events[e]) {
          err = false;
          break;
        }
      }

      if (err) {
        document.querySelector("span#eventErrMsg").innerHTML =
          "Please Select At Least One Event!";

        return;
      } else {
        document.querySelector("span#eventErrMsg").innerHTML = "";
      }
      // alert("LOL");
    }

    // disable button for first component
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
  };

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

  const [events, setEvents] = useState([
    { id: "event1", name: "Clash", price: 100, isChecked: false },
    { id: "event2", name: "Reverse Coding", price: 50, isChecked: false },
    { id: "event3", name: "Pixelate", price: 50, isChecked: false },
    { id: "event4", name: "Cretronix", price: 50, isChecked: false },
    { id: "event5", name: "Bplan", price: 50, isChecked: false },
    { id: "event6", name: "Wallstreet", price: 50, isChecked: false },
    { id: "event7", name: "Roboliga", price: 50, isChecked: false },
    { id: "event8", name: "Enigma", price: 50, isChecked: false },
    // { id: "event9", name: "Quiz", price: 50, isChecked: false },
  ]);

  // events checkbox handler
  const changeHandler = (eventNum) => {
    let tempEvents = [...events];

    // When Checked
    if (!tempEvents[eventNum].isChecked) {
      tempEvents[eventNum].isChecked = true;
      setEvents(tempEvents);

      setTotal((total) => total + tempEvents[eventNum].price);
    }
    // When Unchecked
    else {
      tempEvents[eventNum].isChecked = false;
      setEvents(tempEvents);

      setTotal((total) => total - tempEvents[eventNum].price);
    }
  };

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

  // RAZORPAY
// function loadScript(src) {
//   console.log("load razor called !");

//   return new Promise((resolve) => {
//     const script = document.createElement("script");
//     script.src = src;

//     script.onload = () => {
//       resolve(true);
//     };
//     script.onerror = () => {
//       resolve(false);
//     };

//     document.body.appendChild(script);
//   });
// }

const _DEV_ = document.domain === "localhost";

function DisplayRazorpay(e) {
 e.preventDefault();
  console.log("display razor called !");
  alert("display razor called !");
 
  const token = localStorage.getItem("token");
 
  var decoded = jwt_decode(token);
 

  events.map((event)=>{
    if(event.isCheked=== true)
    {
  
      axios({
        method: "post",
        url: `http://credenzwebsite.herokuapp.com/${decoded.username}/${event.username}`,
        headers: { authorization: `Bearer ${token}` },
      })
      .then((response)=>{
        console.log(response.data);
      }).catch((error)=>{
        console.log(error)
      })
    
    }
  })

}
}

export default Register;

//   const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
//  if (!res) {
//     alert("Razorpay SDK failed to load!");
//     return;
  
//   }

//   const options = {
//     key: _DEV_ ? "rzp_test_8OXCvHsV5OiOpe" : "prod-key", // Enter the Key ID generated from the Dashboard
//     amount: "50000", // 100p = 1rupee
//     currency: "INR",
//     name: "Credenz",
//     description: "Test Transaction",
//     image: "",
//     order_id: "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
//     handler: function (response) {
//       alert("Pay here!");
//       alert(response.razorpay_payment_id);
//       alert(response.razorpay_order_id);
//       alert(response.razorpay_signature);
//     },
//     prefill: {
//       name: "Gaurav Kumar",
//       email: "gaurav.kumar@example.com",
//       contact: "9999999999",
//     },
//     notes: {
//       address: "Razorpay Corporate Office",
//     },
//     theme: {
//       color: "#F37254",
//     },
//   };
//   const paymentObject = new window.Razorpay(options);
//   paymentObject.open();
// }

//};

