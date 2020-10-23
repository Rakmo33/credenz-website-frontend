import React from "react";
import classes from "./Register.module.css";
import SideEventsButton from '../sideEventButton/sideEvent';
import Footer from '../Footer/footer';


function loadScript(src) {

  console.log("load razor called !")

  return new Promise( (resolve) => {

      const script = document.createElement('script');
      script.src = src;
      
      script.onload = () => {
          resolve(true)
      }
      script.onerror = () => {
          resolve(false)
      }

      document.body.appendChild(script)

  })
}

const _DEV_ = document.domain === 'localhost'

async function DisplayRazorpay() {

  console.log("display razor called !")
  alert("display razor called !")
  const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

  if(!res) {
      alert('Razorpay SDK failed to load!')
      return
  }

  const options = {
      "key": _DEV_ ? 'rzp_test_8OXCvHsV5OiOpe' : 'prod-key', // Enter the Key ID generated from the Dashboard
      "amount": "50000", // 100p = 1rupee
      "currency": "INR",
      "name": "Credenz",
      "description": "Test Transaction",
      "image": "",
      "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "handler": function (response){
          alert("Pay here!")
          alert(response.razorpay_payment_id);
          alert(response.razorpay_order_id);
          alert(response.razorpay_signature)
      },
      "prefill": {
          "name": "Gaurav Kumar",
          "email": "gaurav.kumar@example.com",
          "contact": "9999999999"
      },
      "notes": {
          "address": "Razorpay Corporate Office"
      },
      "theme": {
          "color": "#F37254"
      }
  };
  const paymentObject = new window.Razorpay(options)
  paymentObject.open()

}


const Register = () => {

  return (
    <div >
    <SideEventsButton/>
    <div style={{height:'1050px'}} className={classes.body}>
      <h1 className='reg-head'>Registrations Page</h1>
      <div className='container'>
        <form className='col-md-7 m-auto'> 
          <div class='form-row'>
            {/* NAME OF PARTICIPANTS */}
            <div class='form-group col-md-12'>
              <label for='inputName1'>Participant 1</label>
              <input type='text' class='form-control' id='inputName1' />
            </div>
            <div class='form-group col-md-12'>
              <label for='inputName1'>Participant 2</label>
              <input type='text' class='form-control' id='inputName2' />
            </div>
            <div class='form-group col-md-12'>
              <label for='inputName1'>Participant 3</label>
              <input type='text' class='form-control' id='inputName3' />
            </div>
            <div class='form-group col-md-12'>
              <label for='inputName1'>Participant 4</label>
              <input type='text' class='form-control' id='inputName4' />
            </div>

            {/* FE-SE-TE-BE RADIO BUTTONS */}
            <div class='form-group col-md-12'>
              <div class='custom-control custom-radio custom-control-inline'>
                <input
                  type='radio'
                  id='customRadioInline1'
                  name='year'
                  value='1'
                  class='custom-control-input'
                />
                <label class='custom-control-label' for='customRadioInline1'>
                  FE
                </label>
              </div>
              <div class='custom-control custom-radio custom-control-inline'>
                <input
                  type='radio'
                  id='customRadioInline2'
                  name='year'
                  value='2'
                  class='custom-control-input'
                />
                <label class='custom-control-label' for='customRadioInline2'>
                  SE
                </label>
              </div>
              <div class='custom-control custom-radio custom-control-inline'>
                <input
                  type='radio'
                  id='customRadioInline3'
                  value='3'
                  name='year'
                  class='custom-control-input'
                />
                <label class='custom-control-label' for='customRadioInline3'>
                  TE
                </label>
              </div>
              <div class='custom-control custom-radio custom-control-inline'>
                <input
                  type='radio'
                  id='customRadioInline4'
                  value='4'
                  name='year'
                  class='custom-control-input'
                />
                <label class='custom-control-label' for='customRadioInline4'>
                  BE
                </label>
              </div>
            </div>

            {/* Contact Numbers */}
            <div class='form-group col-md-6'>
              <label for='inputContact1'>Contact Number 1</label>
              <input type='number' class='form-control' id='inputContact1' />
            </div>
            <div class='form-group col-md-6'>
              <label for='inputContact2'>Contact Number 2</label>
              <input type='number' class='form-control' id='inputContact2' />
            </div>

            <div class='form-group col-md-6'>
              <label for='inputEmail1'>Email 1</label>
              <input type='email' class='form-control' id='inputEmail1' />
            </div>
            <div class='form-group col-md-6'>
              <label for='inputEmail2'>Email 2</label>
              <input type='email' class='form-control' id='inputEmail2' />
            </div>
          </div>

          <div class='form-group col-md-12'>
            <div class='custom-control custom-radio custom-control-inline'>
              <input
                type='radio'
                id='customRadioInline5'
                name='isMember'
                value='true'
                class='custom-control-input'
              />
              <label class='custom-control-label' for='customRadioInline5'>
                IEEE Member
              </label>
            </div>
            <div class='custom-control custom-radio custom-control-inline'>
              <input
                type='radio'
                id='customRadioInline6'
                name='isMember'
                value='false'
                class='custom-control-input'
              />
              <label class='custom-control-label' for='customRadioInline6'>
                NON-IEEE Member
              </label>
            </div>
          </div>

          <div class='form-row'>
            <div class='form-group col-md-12'>
              <label for='inputState'>College Name</label>
              <select id='inputState' class='form-control'>
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
          </div>

          {/* FE-SE-TE-BE RADIO BUTTONS */}
          <p id='choose-events'>Choose Events : </p>

          <div class='form-group col-md-12 event-icons'>
            <div class='custom-control custom-radio custom-control-inline cc-selector'>
              <input
                type='checkbox'
                id='event1'
                name='events'
                class='custom-control-input event1 '
              />
              <label
                class='custom-control-label  drinkcard-cc'
                for='event1'></label>
            </div>
            <div class='custom-control custom-radio custom-control-inline cc-selector'>
              <input
                type='checkbox'
                id='event2'
                name='events'
                class='custom-control-input '
              />
              <label
                class='custom-control-label event1 drinkcard-cc'
                for='event2'></label>
            </div>
            <div class='custom-control custom-radio custom-control-inline cc-selector'>
              <input
                type='checkbox'
                id='event3'
                name='events'
                class='custom-control-input '
              />
              <label
                class='custom-control-label event1 drinkcard-cc'
                for='event3'></label>
            </div>
            <div class='custom-control custom-radio custom-control-inline cc-selector'>
              <input
                type='checkbox'
                id='event4'
                name='events'
                class='custom-control-input '
              />
              <label
                class='custom-control-label event1 drinkcard-cc'
                for='event4'></label>
            </div>
            <div class='custom-control custom-radio custom-control-inline cc-selector'>
              <input
                type='checkbox'
                id='event5'
                name='events'
                class='custom-control-input '
              />
              <label
                class='custom-control-label event1 drinkcard-cc'
                for='event5'></label>
            </div>
            <div class='custom-control custom-radio custom-control-inline cc-selector'>
              <input
                type='checkbox'
                id='event6'
                name='events'
                class='custom-control-input '
              />
              <label
                class='custom-control-label event1 drinkcard-cc'
                for='event6'></label>
            </div>
            <div class='custom-control custom-radio custom-control-inline cc-selector'>
              <input
                type='checkbox'
                id='event7'
                name='events'
                class='custom-control-input '
              />
              <label
                class='custom-control-label event1 drinkcard-cc'
                for='event7'></label>
            </div>
            <div class='custom-control custom-radio custom-control-inline cc-selector'>
              <input
                type='checkbox'
                id='event8'
                name='events'
                class='custom-control-input '
              />
              <label
                class='custom-control-label event1 drinkcard-cc'
                for='event8'></label>
            </div>
            <div class='custom-control custom-radio custom-control-inline cc-selector'>
              <input
                type='checkbox'
                id='event9'
                name='events'
                class='custom-control-input '
              />
              <label
                class='custom-control-label event1 drinkcard-cc'
                for='event9'></label>
            </div>
          </div>

          <div class='form-group row d-flex justify-content-center'>
            <div class='col-sm-4 d-flex justify-content-center'>
              <button class='btn btn-primary next-btn' onClick={DisplayRazorpay}>
                Proceed for Payment
              </button>
              
            </div>
          </div>
        </form>
      </div>
      </div>
        <Footer/>      
    </div>
  );
};

export default Register;
