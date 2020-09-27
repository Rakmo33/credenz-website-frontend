import React from 'react';
import './Login.css';
import { Modal } from 'react-bootstrap';


function ModalHeading(login) {
    if(login) {
        return(
            <div className="title">Log in</div>
        );
    }
    else {
        return(
            <div>Sign Up</div>
        );
    }
}

function ModalBody(login) {
    if(login) {
        return(
            <div>
                <form>
                    <label for="username">E-mail id : </label>
                    <input type="text" id="username" name="username" placeholder="Your E-mail id"/>
                    <label for="password">Password : </label>
                    <input type="password" id="password" name="password" placeholder="Password"/>
                    <br/>
                    <div className="login-btn"><button className="btn btn-primary" type="submit" value="Submit">Log in</button></div>
                    Not a user ?
                    <div className="submit-btn"> 
                        <button className="btn btn-primary" type="submit" value="Submit" onClick={ Login }>Sign up</button>
                    </div>

                </form>
            </div>
        );
    }
    else {
        return(
            <div>Sign Up</div>
        );
    }
}


function Login( {show, handleClose, login} ) {


    console.log("Login called!")

    return(
    <>
       <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered 
       backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title text-center> <ModalHeading login={ login }/> </Modal.Title>
            </Modal.Header>
            <Modal.Body> 
                <ModalBody login={ login }/>
            </Modal.Body>

        </Modal>
 
    </>
    );


}


export default Login;