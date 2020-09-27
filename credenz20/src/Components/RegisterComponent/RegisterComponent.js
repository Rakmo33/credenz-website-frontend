import React from "react";
import classes from "./Register.module.css";

const Register = () => {
  return (
    <div className={classes.body}>
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
              <button type='submit' class='btn btn-primary next-btn'>
                Proceed for Payment
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
