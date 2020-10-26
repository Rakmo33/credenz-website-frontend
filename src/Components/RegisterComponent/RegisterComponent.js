import React, {useState} from "react";
import "./Register.css";
import SideEventsButton from "../sideEventButton/sideEvent";
import Footer from "../Footer/footer";
import Names from "./Names";

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



const Register = () => {

   // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  function changeHandler(){
    // if(!isChecked)
    setCount(count + 50)
  }

  return (
    <div>
      <SideEventsButton />
      <div className='regPage'>
  <h1 className='reg-head'>Registrations Page </h1>
        <div className='container'>
          <form className='col-md-7 m-auto'>
            <div className='form-row'>
              {/* NAME OF PARTICIPANTS */}
              <div className='form-group col-md-12'>
                <label for='inputName1'>Participant 1</label>
                <input type='text' className='form-control' id='inputName1' />
              </div>
              <div className='form-group col-md-12'>
                <label for='inputName1'>Participant 2</label>
                <input type='text' className='form-control' id='inputName2' />
              </div>
              <div className='form-group col-md-12'>
                <label for='inputName1'>Participant 3</label>
                <input type='text' className='form-control' id='inputName3' />
              </div>
              <div className='form-group col-md-12'>
                <label for='inputName1'>Participant 4</label>
                <input type='text' className='form-control' id='inputName4' />
              </div>

              {/* FE-SE-TE-BE RADIO BUTTONS */}
              <div className='form-group col-md-12 years'>
                <div className='custom-control custom-radio custom-control-inline'>
                  <input
                    type='radio'
                    id='customRadioInline1'
                    name='year'
                    value='1'
                    className='custom-control-input'
                  />
                  <label
                    className='custom-control-label'
                    for='customRadioInline1'>
                    FE
                  </label>
                </div>
                <div className='custom-control custom-radio custom-control-inline'>
                  <input
                    type='radio'
                    id='customRadioInline2'
                    name='year'
                    value='2'
                    className='custom-control-input'
                  />
                  <label
                    className='custom-control-label'
                    for='customRadioInline2'>
                    SE
                  </label>
                </div>
                <div className='custom-control custom-radio custom-control-inline'>
                  <input
                    type='radio'
                    id='customRadioInline3'
                    value='3'
                    name='year'
                    className='custom-control-input'
                  />
                  <label
                    className='custom-control-label'
                    for='customRadioInline3'>
                    TE
                  </label>
                </div>
                <div className='custom-control custom-radio custom-control-inline'>
                  <input
                    type='radio'
                    id='customRadioInline4'
                    value='4'
                    name='year'
                    className='custom-control-input'
                  />
                  <label
                    className='custom-control-label'
                    for='customRadioInline4'>
                    BE
                  </label>
                </div>
              </div>

              {/* Contact Numbers */}
              <div className='form-group col-md-6 numbers'>
                <label for='inputContact1'>Contact Number 1</label>
                <input
                  type='tel'
                  maxLength='10'
                  className='form-control'
                  id='inputContact1'
                />
              </div>
              <div className='form-group col-md-6 numbers'>
                <label for='inputContact2'>Contact Number 2</label>
                <input type='tel' maxLength='10' className='form-control' id='inputContact2' />
              </div>

              <div className='form-group col-md-6 emails'>
                <label for='inputEmail1'>Email 1</label>
                <input type='email' className='form-control' id='inputEmail1' />
              </div>
              <div className='form-group col-md-6 emails'>
                <label for='inputEmail2'>Email 2</label>
                <input type='email' className='form-control' id='inputEmail2' />
              </div>
            </div>

            <div className='form-group col-md-12 members'>
              <div className='custom-control custom-radio custom-control-inline'>
                <input
                  type='radio'
                  id='customRadioInline5'
                  name='isMember'
                  value='true'
                  className='custom-control-input'
                />
                <label
                  className='custom-control-label'
                  for='customRadioInline5'>
                  IEEE Member
                </label>
              </div>
              <div className='custom-control custom-radio custom-control-inline'>
                <input
                  type='radio'
                  id='customRadioInline6'
                  name='isMember'
                  value='false'
                  className='custom-control-input'
                />
                <label
                  className='custom-control-label'
                  for='customRadioInline6'>
                  NON-IEEE Member
                </label>
              </div>
            </div>

            <div className='form-row college'>
              <div className='form-group col-md-12'>
                <label for='inputState'>College Name</label>
                <select id='inputState' className='form-control'>
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
            </div>

            {/* FE-SE-TE-BE RADIO BUTTONS */}
            <p id='choose-events'>Choose Events : </p>

            <div className='form-group col-md-12 event-icons'>
              <div className='custom-control event-wrap custom-checkbox  custom-control-inline cc-selector'>
                <input
                  type='checkbox'
                  id='event1'
                  name='events'
                  onChange={changeHandler}
                  value='event1'
                  className='custom-control-input event1 '
                />
                <label 
                  className='custom-control-label event1 drinkcard-cc'
                  for='event1'></label>
                <p className='event-name'>CLASH</p>
                <p className='event-price'>₹50</p>
              </div>
              <div className='custom-control event-wrap custom-checkbox  custom-control-inline cc-selector'>
                <input
                  type='checkbox'
                  id='event2'
                  name='events'
                  onChange={changeHandler}
                  className='custom-control-input event2 form-check-input'
                  value='event2'
                />
                <label
                  className='custom-control-label event1 drinkcard-cc'
                  for='event2'></label>
                <p className='event-name'>CLASH</p>
                <p className='event-price'>₹50</p>
              </div>
              <div className='custom-control event-wrap custom-checkbox custom-control-inline cc-selector'>
                <input
                  type='checkbox'
                  id='event3'
                  name='events'
                  onChange={changeHandler}
                  className='custom-control-input '
                />
                <label
                  className='custom-control-label event1 drinkcard-cc'
                  for='event3'></label>
                <p className='event-name'>CLASH</p>
                <p className='event-price'>₹50</p>
              </div>
              <div className='custom-control event-wrap custom-checkbox custom-control-inline cc-selector'>
                <input
                  type='checkbox'
                  id='event4'
                  name='events'
                  onChange={changeHandler}
                  className='custom-control-input '
                />
                <label
                  className='custom-control-label event1 drinkcard-cc'
                  for='event4'></label>
                <p className='event-name'>CLASH</p>
                <p className='event-price'>₹50</p>
              </div>
              <div className='custom-control event-wrap custom-checkbox custom-control-inline cc-selector'>
                <input
                  type='checkbox'
                  id='event5'
                  name='events'
                  onChange={changeHandler}
                  className='custom-control-input '
                />
                <label
                  className='custom-control-label event1 drinkcard-cc'
                  for='event5'></label>
                <p className='event-name'>CLASH</p>
                <p className='event-price'>₹50</p>
              </div>
              <div className='custom-control event-wrap custom-checkbox custom-control-inline cc-selector'>
                <input
                  type='checkbox'
                  id='event6'
                  name='events'
                  onChange={changeHandler}
                  className='custom-control-input '
                />
                <label
                  className='custom-control-label event1 drinkcard-cc'
                  for='event6'></label>
                <p className='event-name'>CLASH</p>
                <p className='event-price'>₹50</p>
              </div>
              <div className='custom-control event-wrap custom-checkbox custom-control-inline cc-selector'>
                <input
                  type='checkbox'
                  id='event7'
                  name='events'
                  onChange={changeHandler}
                  className='custom-control-input '
                />
                <label
                  className='custom-control-label event1 drinkcard-cc'
                  for='event7'></label>
                <p className='event-name'>CLASH</p>
                <p className='event-price'>₹50</p>
              </div>
              <div className='custom-control event-wrap custom-checkbox custom-control-inline cc-selector'>
                <input
                  type='checkbox'
                  id='event8'
                  name='events'
                  onChange={changeHandler}
                  className='custom-control-input '
                />
                <label
                  className='custom-control-label event1 drinkcard-cc'
                  for='event8'></label>
                <p className='event-name'>CLASH</p>
                <p className='event-price'>₹50</p>
              </div>
              <div className='custom-control event-wrap custom-checkbox custom-control-inline cc-selector'>
                <input
                  type='checkbox'
                  id='event9'
                  name='events'
                  onChange={changeHandler}
                  className='custom-control-input '
                />
                <label
                  className='custom-control-label event1 drinkcard-cc'
                  for='event9'></label>
                <p className='event-name'>CLASH</p>
                <p className='event-price'>₹50</p>
              </div>
            </div>

            <div className='form-group row d-flex justify-content-center'>
              <div className='col-sm-4 d-flex justify-content-center'>
                <button
                  className='btn btn-primary next-btn'
                  onClick={DisplayRazorpay}>
                  Proceed for Payment :

                  ₹{count}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
