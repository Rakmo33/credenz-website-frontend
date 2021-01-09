import React, { useState } from "react";
import "./Signup.css";
import Footer from "../Footer/footer";
import Social from "../sideEventButton/sideEvent";
import Validate from "./ValidateInfo";
import axios from "axios";

function Signup() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [college, setCollege] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    console.log(
      "Current state is : " +
        JSON.stringify({ email, phone, college, password })
    );

    if (!errors.boolean) {
      try {
        axios
          .post("http://credenzwebsite.herokuapp.com/signup", {
            username: username,
            name: name,
            password: password,
            email: email,
            phoneno: phone,
            clgname: college,
          })
          .then(function (response) {
            alert("Form successfully submitted.");
            console.log(response);
            console.log(response.data);
            const msg = response.data["accessToken"];
            localStorage.setItem("user", JSON.stringify(response.data));
            console.log(msg);

            // alert("Logged in successfully!");

            // handleClose();
            // window.location.reload(false);
            // refreshPage();
            // const user = jwt(response.data["accessToken"]);
            // console.log("JWT decode : " + JSON.stringify(user));
            // setLogged(true);
          });
      } catch (e) {
        alert("Axios error!" + e);
      }

      setName("");
      setUsername("");
      setPhone("");
      setEmail("");
      setCollege("");
      setPassword("");
      setPasswordCheck("");
    }

    // e.preventDefualt()
  };

  const values = {
    username: username,
    name: name,
    password: password,
    email: email,
    phoneno: phone,
    clgname: college,
    passwordCheck: passwordCheck,
  };
  /*
  const verifyPhone = (e) => {
    setPhone(e.target.value)

    const e = this.state.code+this.state.pno;
    await axios.get("http://localhost:8000/verify/getcode", {
        params: {
            phonenumber: e,
            channel: 'sms'
        }
    })
    .then(data => console.log(data))
    .catch(err => console.log(err));

  }
*/
  console.log(values);

  const errors = Validate(values);

  console.log(
    "Errors: " + errors.name + errors.username + errors.email + errors.phone
  );

  //e.preventDefualt()

  return (
    <>
      <div className='container signupWrap'>
        <div className='row py-5 mt-4 align-items-center'>
          <div className='col-md-5 pr-lg-5 mb-5 mb-md-0'>
            <img
              src='https://res.cloudinary.com/mhmd/image/upload/v1569543678/form_d9sh6m.svg'
              alt=''
              className='img-fluid mb-3 d-none d-md-block'
            />
            <h1>Create an Account</h1>
          </div>

          <div className='col-md-7 col-lg-6 ml-auto'>
            <form onSubmit={submitForm}>
              <div className='row'>
                <div className='input-group col-lg-12 mb-4'>
                  <div className='input-group-prepend'>
                    <span className='input-group-text bg-white px-4 border-md border-right-0'>
                      <i className='fa fa-user text-muted'></i>
                    </span>
                  </div>
                  <input
                    id='Name'
                    type='text'
                    name='name'
                    placeholder='Name'
                    className='form-control bg-white border-left-0 border-md'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                  {errors && (
                    <small id='nameErr' className='form-text text-danger'>
                      {errors.name}
                    </small>
                  )}
                </div>

                <div className='input-group col-lg-12 mb-4'>
                  <div className='input-group-prepend'>
                    <span className='input-group-text bg-white px-4 border-md border-right-0'>
                      <i className='fa fa-user text-muted'></i>
                    </span>
                  </div>
                  <input
                    id='username'
                    type='text'
                    name='username'
                    placeholder='Username'
                    className='form-control bg-white border-left-0 border-md'
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                  />
                  {errors && (
                    <small
                      id='nameErr'
                      className='form-text inline text-danger'>
                      {errors.username}
                    </small>
                  )}
                </div>

                <div className='input-group col-lg-12 mb-4'>
                  <div className='input-group-prepend'>
                    <span className='input-group-text bg-white px-4 border-md border-right-0'>
                      <i className='fa fa-envelope text-muted'></i>
                    </span>
                  </div>
                  <input
                    id='email'
                    type='email'
                    name='email'
                    placeholder='Email Address'
                    className='form-control bg-white border-left-0 border-md'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                  {errors && (
                    <small id='nameErr' className='form-text text-danger'>
                      {errors.email}
                    </small>
                  )}
                </div>

                <div className='input-group col-lg-12 mb-4'>
                  <div className='input-group-prepend'>
                    <span className='input-group-text bg-white px-4 border-md border-right-0'>
                      <i className='fa fa-phone-square text-muted'></i>
                    </span>
                  </div>
                  <input
                    id='phoneNumber'
                    type='text'
                    name='phone'
                    placeholder='Phone Number'
                    className='form-control bg-white border-md border-left-0 pl-3'
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                  />
                  {errors && (
                    <small id='phoneErr' className='form-text text-danger'>
                      {errors.phone}
                    </small>
                  )}
                </div>

                <div className='input-group col-lg-12 mb-4'>
                  <div className='input-group-prepend'>
                    <span className='input-group-text bg-white px-4 border-md border-right-0'>
                      <i className='fa fa-black-tie text-muted'></i>
                    </span>
                  </div>
                  <select
                    id='college'
                    type='college'
                    name='college'
                    className='form-control bg-white border-left-0 border-md'
                    onChange={(e) => setCollege(e.target.value)}
                    value={college}>
                    <option>College name</option>
                    <option>PICT</option>
                    <option>COEP</option>
                    <option>MIT</option>
                    <option>VIT</option>
                    <option>Cummins</option>
                    <option>PCCOE</option>
                    <option>Other</option>
                  </select>
                  {errors && (
                    <small id='clgErr' className='form-text text-danger'>
                      {errors.college}
                    </small>
                  )}
                </div>

                <div className='input-group col-lg-6 mb-4'>
                  <div className='input-group-prepend'>
                    <span className='input-group-text bg-white px-4 border-md border-right-0'>
                      <i className='fa fa-lock text-muted'></i>
                    </span>
                  </div>
                  <input
                    id='password'
                    type='password'
                    name='password'
                    placeholder='Password'
                    className='form-control bg-white border-left-0 border-md'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>

                <div className='input-group col-lg-6 mb-4'>
                  <div className='input-group-prepend'>
                    <span className='input-group-text bg-white px-4 border-md border-right-0'>
                      <i className='fa fa-lock text-muted'></i>
                    </span>
                  </div>
                  <input
                    id='passwordConfirmation'
                    type='password'
                    name='passwordConfirmation'
                    placeholder='Confirm Password'
                    className='form-control bg-white border-left-0 border-md'
                    onChange={(e) => setPasswordCheck(e.target.value)}
                    value={passwordCheck}
                  />
                </div>

                <div className='form-group col-lg-12 mx-auto mb-0'>
                  {errors && (
                    <small id='passwordErr' className='form-text text-danger'>
                      {errors.password}
                    </small>
                  )}
                </div>

                <div className='form-group col-lg-12 mx-auto mb-0'>
                  <button
                    type='submit'
                    className='btn btn-primary btn-block py-2'>
                    <span className='font-weight-bold'>
                      Create your account
                    </span>
                  </button>
                </div>

                <div className='text-center w-100'>
                  <p className='text-muted font-weight-bold'>
                    Already Registered?{" "}
                    <span className='text-primary ml-2'>Login</span>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Social />
      <Footer />
    </>
  );
}

export default Signup;
