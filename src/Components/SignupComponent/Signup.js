import React, { useState, useEffect } from "react";
import "./Signup.css";
import Footer from "../Footer/footer";
import Social from "../sideEventButton/sideEvent";
import Validate from "./ValidateInfo";
import axios from "axios";
import Modal1 from "../Modal/Modal";
import Alert from "../Alert/alert";
import Nav from '../Navbar/Navbar';

function Signup() {

  useEffect (()=>{
    document.title=`CREDENZ LIVE | SignUp`;
  },[]);

  let login = "login";
  const [spinner, setSpinner] = useState("form-group col-lg-12 ");

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [college, setCollege] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [show, setShow] = useState(false);
  // const [disabled, setdisabled] = useState(true);
  const [member, setMember] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const submitForm = (e) => {
    setSpinner("form-group col-lg-12 submitSpinner");
    e.preventDefault();
    // //console.log(
    //   "Current state is : " +
    //     JSON.stringify({ email, phone, college, password })
    // );

    if (Object.keys(errors).length === 0 && errors.constructor === Object) {
      try {
        axios
          .post(`${process.env.REACT_APP_API_URL}/signup`, {
            username: username,
            name: name,
            password: password,
            email: email,
            phoneno: phone,
            clgname: college,
          })
          .then(function (response) {
            // //console.log(response);
            // //console.log(response.data);
            // const msg = response.data["accessToken"];
            localStorage.setItem("user", JSON.stringify(response.data));
            // //console.log(msg);
            // //console.log("HEREEE");
            try {
              axios
                .post(`${process.env.REACT_APP_API_URL}/login`, {
                  username: username,
                  password: password,
                })
                .then(function (response) {
                  setName("");
                  setUsername("");
                  setPhone("");
                  setEmail("");
                  setCollege("");
                  setPassword("");
                  setPasswordCheck("");
                  // //console.log(response.data);
                  //const msg = response.data["accessToken"]
                  if (response.data["accessToken"]) {
                    // alert("Logged in successfully!");
                    localStorage.setItem("user", JSON.stringify(response.data));

                    handleClose();
                    window.location.href = "/profile";
                  } else {
                    localStorage.removeItem("user");
                  }
                });
            } catch (e) {
              //console.log("Axios alert" + e);
              // alert("Axios error!" + e);
              setSpinner("form-group col-lg-12 ");
            }
          })
          .catch((e) => {
            if (e.response.status === member) {
              //console.log("Axios alert" + e);
              setSpinner("form-group col-lg-12 ");
              setShowAlert(true);
            }
            // throw e;

            // //console.log("Axios alert" + e);
            // alert("Axios error!" + e);
            // setSpinner("form-group col-lg-12 ");
          });
      } catch (e) {
        //console.log("Axios alert" + e);
        // alert("Axios error!" + e);
        setSpinner("form-group col-lg-12 ");
      }
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
    .then(data => //console.log(data))
    .catch(err => //console.log(err));

  }
*/
  //console.log(values);

  const errors = Validate(values);

  //console.log(
  //   "Errors: " + errors.name + errors.username + errors.email + errors.phone
  // );

  //e.preventDefualt()

  return (
    <div style={{background:'black'}} >
      <Nav/>
      <div className='container mt-5 signupFormWrap'>
        {showAlert ? (
          <Alert show={showAlert} setShow={setShowAlert} var='danger'>
            Sign Up Failed!
          </Alert>
        ) : null}
        <div className='row py-5 mt-4 align-items-center '>
          <div className='col-md-5 pr-lg-5 mb-5 mb-md-0'>
            <img
              src={require("../../assests/img/create.svg")}
              alt='areate account'
              className='img-fluid mb-3 d-none d-md-block'
            />
            <h1 style={{ color: "white" }}>Create an Account</h1>
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
                    required
                  />
                  <span className='asterisk_input'> </span>
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
                    required
                  />
                  <span className='asterisk_input'> </span>
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
                    required
                  />
                  <span className='asterisk_input'> </span>
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
                    required
                    maxLength='10'
                  />
                  <span className='asterisk_input'> </span>
                  {errors && (
                    <small id='phoneErr' className='form-text text-danger'>
                      {errors.phone}
                    </small>
                  )}
                </div>

                <div className='input-group col-lg-12 mb-4'>
                  <div className='input-group-prepend'>
                  </div>
                  <input
                    id='member'
                    type='radio'
                    name='member'
                    //className='border-md border-left-0 pl-3'
                    onChange={(e) => setMember(e.target.value)}
                    value={"IEEE"}
                    required
                    
                  />
                  <label style={{paddingLeft: 20, marginRight: 50, color:'#fff', fontSize:'12px'}} for="member">IEEE member</label><br></br>
                  <input
                    id='member'
                    type='radio'
                    name='member'
                    //className='bg-white border-md border-left-0 pl-3'
                    onChange={(e) => setMember(e.target.value)}
                    value={"nonIEEE"}
                    required
                   
                  />
                  <label style={{paddingLeft: 4, color:'#fff', fontSize:'12px'}} for="member">Non-IEEE member</label><br></br>
                </div>

                {
                  member==="IEEE" &&
                  <div className='input-group col-lg-12 mb-4'>
                  <div className='input-group-prepend'>
                  <span className='input-group-text bg-white px-4 border-md border-right-0'>
                      <i className='fa fa-user text-muted'></i>
                    </span> 
                  </div>
                  <input
                    id='memberID'
                    type='text'
                    name='phone'
                    placeholder='Membership ID'
                    className='form-control bg-white border-md border-left-0 pl-3'
                    //onChange={(e) => setPhone(e.target.value)}
                    //value={phone}
                    required
                    maxLength='10'
                  />
                </div>
                }

                <div className='input-group col-lg-12 mb-4'>
                  <div className='input-group-prepend'>
                    <span className='input-group-text bg-white px-4 border-md border-right-0'>
                      <i className='fa fa-black-tie text-muted'></i>
                    </span>
                  </div>
                  <input
                    id='college'
                    type='college'
                    name='college'
                    className='form-control bg-white border-left-0 border-md'
                    onChange={(e) => setCollege(e.target.value)}
                    value={college}
                    required/>
                  <span className='asterisk_input'> </span>
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
                    required
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
                    required
                  />
                </div>

                <div className='form-group col-lg-12 mx-auto mb-0'>
                  {errors && (
                    <small id='passwordErr' className='form-text text-danger'>
                      {errors.password}
                    </small>
                  )}
                </div>

                <div className={spinner}>
                  <button
                    type='submit'
                    className='btn stylebtn btn-block py-2'
                    disabled={
                      !(
                        Object.keys(errors).length === 0 &&
                        errors.constructor === Object
                      )
                    }>
                    <span className='font-weight-bold'>
                      Create your account
                    </span>
                  </button>
                  <span id='spinnerCircle'></span>
                </div>

                <div className='text-center w-100 mt-3'>
                  <p className='text-muted font-weight-bold'>
                    Already Registered?{" "}
                    <span
                      className='text-primary ml-2'
                      style={{ cursor: "pointer" }}
                      onClick={handleShow}>
                      Login
                    </span>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Modal1 show={show} handleClose={handleClose} type={login} />
      <Social />
      {/* <div className='footer heightFooter'> */}
      <Footer />
      {/* </div> */}
    </div>
  );
}

export default Signup;
