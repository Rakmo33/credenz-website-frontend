import React, { useState } from 'react';
import './Signup.css';
import Footer from '../Footer/footer';
import Social from '../sideEventButton/sideEvent';
import Validate from './ValidateInfo';
import axios from 'axios';

function Signup() {
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [college, setCollege] = useState('')
    const [password, setPassword] = useState('')
    const [passwordCheck, setPasswordCheck] = useState('')
    

    const submitForm = e => {

        e.preventDefault();
        console.log("Current state is : " + JSON.stringify({email, phone, college, password}))


        if(!errors.boolean) {

            alert("Inside if")
            
            alert("Form successfully submitted.")
    
    
                try{

                    alert("Inside Try")

                    axios.post('http://credenzwebsite.herokuapp.com/signup', {
                        username: username,
                        name: name,
                        password: password,
                        email: email,
                        phoneno: phone,
                        clgname: college,
                    }).then(function (response) {
                        alert("Then")
                        console.log(response);
                        console.log(response.data);
                        const msg = response.data["accessToken"]
                        alert(msg)
                    })
                }
                catch(e) {
                    alert("Axios error!" + e)
                }

                setName('')
                setUsername('')
                setPhone('')
                setEmail('')
                setCollege('')
                setPassword('')
               
            }

           // e.preventDefualt()

    }

        const values = {
            username: username,
            name: name,
            password: password,
            email: email,
            phoneno: phone,
            clgname: college,
            passwordCheck: passwordCheck
        }
        
        console.log(values)
    
        const errors = Validate(values)
            
        console.log("Errors: " + errors.name + errors.username + errors.email + errors.phone)

    //e.preventDefualt()



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

                            <div className="input-group col-lg-12 mb-4">
                                <div className="input-group-prepend">
                                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                                        <i className="fa fa-user text-muted"></i>
                                    </span>
                                </div>
                                <input id="Name" type="text" name="name" placeholder="Name" class="form-control bg-white border-left-0 border-md"
                                onChange={ e => setName(e.target.value) }/>
                                 { 
                                    errors &&
                                    <small id="nameErr" class="form-text text-danger">
                                        {errors.name}
                                    </small>  
                                 }
                            </div>


                            <div className="input-group col-lg-12 mb-4">
                                <div className="input-group-prepend">
                                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                                        <i className="fa fa-user text-muted"></i>
                                    </span>
                                </div>
                                <input id="username" type="text" name="username" placeholder="Username" class="form-control bg-white border-left-0 border-md"
                                onChange={ e => setUsername(e.target.value) }/>
                                 { 
                                    errors &&
                                    <small id="nameErr" class="form-text inline text-danger">
                                        {errors.username}
                                    </small>  
                                 }
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
                                 { 
                                    errors &&
                                    <small id="nameErr" class="form-text text-danger">
                                        {errors.email}
                                    </small>  
                                 }
                            </div>

                            <div class="input-group col-lg-12 mb-4">
                                <div class="input-group-prepend">
                                    <span class="input-group-text bg-white px-4 border-md border-right-0">
                                        <i class="fa fa-phone-square text-muted"></i>
                                    </span>
                                </div>
                                <input id="phoneNumber" type="text" name="phone" placeholder="Phone Number"
                                 class="form-control bg-white border-md border-left-0 pl-3"
                                 onChange={ e => setPhone(e.target.value) }/>
                                 { 
                                    errors &&
                                    <small id="phoneErr" class="form-text text-danger">
                                        {errors.phone}
                                    </small>  
                                 }
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
                                 { 
                                    errors &&
                                    <small id="clgErr" class="form-text text-danger">
                                        {errors.college}
                                    </small>  
                                 }
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
                                <input id="passwordConfirmation" type="password" name="passwordConfirmation" placeholder="Confirm Password" class="form-control bg-white border-left-0 border-md"/>
                            </div>

                            <div class="form-group col-lg-12 mx-auto mb-0">
                            { 
                                    errors &&
                                    <small id="passwordErr" class="form-text text-danger">
                                        {errors.password}
                                    </small>  
                            }
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