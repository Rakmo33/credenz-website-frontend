import React from 'react';
import { Modal } from 'react-bootstrap';
import './Modal.css';

function Modal2( {show, handleClose} ) {

    console.log("Login called!")

    return(
    <>
    
       <Modal dialogClassName="modal-90w" show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered 
        keyboard={false}>
        <Modal.Header closeButton>
                <Modal.Title text-center> <div><h1>Updates</h1></div> </Modal.Title>
        </Modal.Header>
        <Modal.Body> 
                <div>
                    <ul>
                        <li>Update1</li>
                        <li>Update2</li>
                        <li>Update3</li>
                        <li>Update4</li>
                    </ul>
                </div>
        </Modal.Body>
        </Modal> 
    </>
    );


}

export default Modal2;