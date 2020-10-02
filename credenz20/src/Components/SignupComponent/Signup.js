import React from 'react';
import './Signup.css';

function Signup() {

    return(
        <>
        <div className="page">
            <div className="container">
                <div className="left">
                    <div className="login">Sign Up</div>
                     <div className="eula">By Signing in you agree to the ridiculously long terms that you didn't bother to read</div>
                </div>
                <div className="right">
                    <svg viewBox="0 0 320 300">
                        <path d="m 40,120.00016 239.99984,-3.2e-4 c 0,0 24.99263,0.79932 25.00016,35.00016 0.008,34.20084 -25.00016,35 -25.00016,35 h -239.99984 c 0,-0.0205 -25,4.01348 -25,38.5 0,34.48652 25,38.5 25,38.5 h 215 c 0,0 20,-0.99604 20,-25 0,-24.00396 -20,-25 -20,-25 h -190 c 0,0 -20,1.71033 -20,25 0,24.00396 20,25 20,25 h 168.57143" />
                    </svg>
                    <div class="form">
                        <label for="username">UserName</label>
                        <input type="text" id="username" placeholder="unique username"/>
                        <label for="email">Email</label>
                        <input type="email" id="email"/>
                        <label for="password">Password</label>
                        <input type="password" id="password"/>
                        <input type="submit" id="submit" value="Submit"/>
                    </div>
                </div>
            </div>
        </div>    
        </>
    );

}

export default Signup;


 /*
   <div>
                <form>
                    <label for="username">E-mail id : </label>
                    <input type="text" id="username" name="username" placeholder="Your E-mail id"/>
                    <label for="mobile">Mobile no : </label>
                    <input type="text" id="mobile" name="mobile" placeholder="Your mobile no"/>
                    <label for="college">College : </label>
                    <input type="text" id="college" name="username" placeholder="Your E-mail id"/>
                    <label for="password">Password : </label>
                    <input type="password" id="password" name="password" placeholder="Password"/>
                    <br/>
                    <div className="login-btn"><button className="btn btn-primary" type="submit" value="Submit">Sign up</button></div>
                </form>
                <Signup show={show} handleClose={handleClose} login={false}/>
            </div>  
*/ 