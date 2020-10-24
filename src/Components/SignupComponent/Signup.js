import React, { useState } from 'react';
import './Signup.css';
import Footer from '../Footer/footer';
import Social from '../sideEventButton/sideEvent';

function Signup() {

    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [college, setCollege] = useState('')
    const [password, setPassword] = useState('')

    const submitForm = e => {
        alert("Current state is : " + JSON.stringify({email, phone, college, password}))
        e.preventDefualt()
    }

    return(
        <>
        

        <div className="container">
            <div className="row py-5 mt-4 align-items-center">
        
                <div class="col-md-5 pr-lg-5 mb-5 mb-md-0">
                    <img src="https://res.cloudinary.com/mhmd/image/upload/v1569543678/form_d9sh6m.svg" alt="" class="img-fluid mb-3 d-none d-md-block"/>
                    <h1>Create an Account</h1>
                </div>

                <div className="col-md-7 col-lg-6 ml-auto">
                    <form onSubmit={submitForm}>
                        <div className="row">

                            <div className="input-group col-lg-6 mb-4">
                                <div className="input-group-prepend">
                                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                                        <i className="fa fa-user text-muted"></i>
                                    </span>
                                </div>
                                <input id="firstName" type="text" name="firstname" placeholder="First Name" class="form-control bg-white border-left-0 border-md"/>
                            </div>

                
                            <div class="input-group col-lg-6 mb-4">
                                <div class="input-group-prepend">
                                    <span class="input-group-text bg-white px-4 border-md border-right-0">
                                        <i class="fa fa-user text-muted"></i>
                                    </span>
                                </div>
                                <input id="lastName" type="text" name="lastname" placeholder="Last Name" class="form-control bg-white border-left-0 border-md"/>
                            </div>

                            <div class="input-group col-lg-12 mb-4">
                                <div class="input-group-prepend">
                                    <span class="input-group-text bg-white px-4 border-md border-right-0">
                                        <i class="fa fa-envelope text-muted"></i>
                                    </span>
                                </div>
                                <input id="email" type="email" name="email" placeholder="Email Address"
                                 class="form-control bg-white border-left-0 border-md"
                                 onChange={ e => setEmail(e.target.value) }/>
                            </div>

                            
                            <div class="input-group col-lg-12 mb-4">
                                <div class="input-group-prepend">
                                    <span class="input-group-text bg-white px-4 border-md border-right-0">
                                        <i class="fa fa-phone-square text-muted"></i>
                                    </span>
                                </div>
                                <input id="phoneNumber" type="tel" name="phone" placeholder="Phone Number"
                                 class="form-control bg-white border-md border-left-0 pl-3"
                                 onChange={ e => setPhone(e.target.value) }/>
                            </div>

                            <div class="input-group col-lg-12 mb-4">
                                <div class="input-group-prepend">
                                    <span class="input-group-text bg-white px-4 border-md border-right-0">
                                        <i class="fa fa-black-tie text-muted"></i>
                                    </span>
                                </div>
                                <input id="college" type="college" name="college" placeholder="College"
                                 class="form-control bg-white border-left-0 border-md"
                                 onChange={ e => setCollege(e.target.value) }/>
                            </div>

                            <div class="input-group col-lg-6 mb-4">
                                <div class="input-group-prepend">
                                    <span class="input-group-text bg-white px-4 border-md border-right-0">
                                        <i class="fa fa-lock text-muted"></i>
                                    </span>
                                </div>
                                <input id="password" type="password" name="password" placeholder="Password" 
                                class="form-control bg-white border-left-0 border-md"
                                onChange={ e => setPassword(e.target.value) }/>
                            </div>

                            
                            <div class="input-group col-lg-6 mb-4">
                                <div class="input-group-prepend">
                                    <span class="input-group-text bg-white px-4 border-md border-right-0">
                                        <i class="fa fa-lock text-muted"></i>
                                    </span>
                                </div>
                                <input id="passwordConfirmation" type="text" name="passwordConfirmation" placeholder="Confirm Password" class="form-control bg-white border-left-0 border-md"/>
                            </div>

                    
                            <div class="form-group col-lg-12 mx-auto mb-0">
                                <button type="submit" class="btn btn-primary btn-block py-2">
                                    <span class="font-weight-bold">Create your account</span>
                                </button>
                            </div>

                
                            <div class="text-center w-100">
                                <p class="text-muted font-weight-bold">Already Registered? <span class="text-primary ml-2">Login</span></p>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>

        <Social/>
        <div className="footer"  ><Footer/></div>
        </>
    );

}

export default Signup;


 /*
 <div className="page">
            <div  className="container">
                <div className="left">
                    <div className="signup">Sign Up</div>
                    <div className="text-left">Sign up here and be a part of the exciting adventure Credenz 2020 is!</div>
                </div>
                <div className="right">
                    {<svg viewBox="0 0 320 300">
                        <path d="m 40,120.00016 239.99984,-3.2e-4 c 0,0 24.99263,0.79932 25.00016,35.00016 0.008,34.20084 -25.00016,35 -25.00016,35 h -239.99984 c 0,-0.0205 -25,4.01348 -25,38.5 0,34.48652 25,38.5 25,38.5 h 215 c 0,0 20,-0.99604 20,-25 0,-24.00396 -20,-25 -20,-25 h -190 c 0,0 -20,1.71033 -20,25 0,24.00396 20,25 20,25 h 168.57143" />
                    </svg>}
                    <form className="form" onSubmit = {submitForm}>
                        <label for="email">Email</label>
                        <input type="email" id="email" onChange={ e => setEmail(e.target.value) }/>
                        <label for="text">User name</label>
                        <input type="text" id="username" onChange={ e => setUsername(e.target.value) }/>
                        <label for="text">Phone</label>
                        <input type="text" id="phone" onChange={ e => setPhone(e.target.value) }/>
                        <label for="text">College</label>
                        <input type="text" id="college" onChange={ e => setCollege(e.target.value) }/>
                        <label for="password">Password</label>
                        <input type="password" id="password"
                        onChange={ e => setPassword(e.target.value) }/>
                        <input type="submit" id="submit" value="Submit"/>
                        {<button id="submit" type="submit" class="btn btn-secondary btn-sm">Submit</button>}
                    </form>
                </div>
            </div>
        </div>   
*/ 