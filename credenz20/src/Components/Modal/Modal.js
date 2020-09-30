import React from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Modal.css';

function ModalTitle({login, event}) {
    if(login)
    return(
        <div className="modal-title">
            <div>Login</div>
        </div>
    );
    else {
        console.log("else")
        if(event==="clash")
            return(
                <div>
                    Clash
                </div>
            );
        else if(event==="enigma")
            return(
                <div>
                    Enigma
                </div>
            );
        else if(event==="xodia")
            return(
                <div>
                    Xodia
                </div>
            );
    }
}

function ModalBody({login, event}) {

    console.log("ModalBody called!")

    if(login) {
        return(
            <div id="myModal">
            <div className="modal-login">
                
                <form>
                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon"><i class="fa fa-envelope"></i></span>
                            <input type="text" className="form-control" name="username" placeholder="Username" required="required"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon"><i class="fa fa-lock"></i></span>
                            <input type="text" className="form-control" name="password" placeholder="Password" required="required"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-block btn-lg">Log in</button>
                    </div>
                    <p className="hint-text">Forgot Password?</p>
                    <p className="hint-text">Don't have an account? <Link to="/signup">Create one</Link></p>
                </form>
                    
                    
                
            </div>
        </div>     
        );
    }
    else {

        if(event==="clash")
            return(
                <div>
                    Events info clash
                </div>
            );
        else if(event==="enigma")
            return(
                <div>
                    Events info enigma
                </div>
            );
        else if(event==="xodia")
            return(
                <div>
                    Events info xodia
                </div>
            );
    }
}


function Modal1( {show, handleClose, login, event} ) {

    console.log("Login called!")

    return(
    <>
    
       <Modal dialogClassName="modal-90w" show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered 
        keyboard={false}>
        <Modal.Header closeButton>
                <Modal.Title text-center> <ModalTitle login={login}/> </Modal.Title>
        </Modal.Header>
        <Modal.Body> 
                <ModalBody login={login} event={event}/>
        </Modal.Body>
        </Modal> 
    </>
    );


}

export default Modal1;