import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Modal.css';
import axios from 'axios';
import {EVENTS} from '../EventsComponent/allEvents';
import { data } from 'jquery';

function ModalTitle({type, event}) {
    if(type==="login")
    return(
        <div className="modal-title">
            <div>Login</div>
        </div>
    );
    else {


        switch(event) {

            case "clash" : return(
                            <div>
                                Clash
                            </div>
                            );
            case "enigma" : return(
                                <div>
                                    Enigma
                                </div>
                            );
            case "xodia" : return(
                                <div>
                                    Xodia
                                </div>
                            );

            case "webweaver" : return(
                                <div>
                                    Web weaver
                                </div>
                            );

            case "bplan" : return(
                                <div>
                                    B-Plan
                                </div>
                            );

            default : return(
                            <div>
                                Invalid request
                            </div>
                            );
                      

        }

    }
}

function ModalBody({handleClose, type, event}) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [logged, setLogged] = useState(false)
   

    if(type==="login") {

        const login = e => {

            //alert("Login")
            e.preventDefault()
    
            try{
                axios.post('http://credenzwebsite.herokuapp.com/login', {
                    username: username,
                    password: password,
                }).then(function (response) {
                    console.log(response.data);
                    //const msg = response.data["accessToken"]
                    localStorage.setItem("login", JSON.stringify(response.data));
                    if(response.data["accessToken"]) {
                        alert("Logged in successfully!")
                        setLogged(true)
                    }
                    else {
                        alert("Invalid login credentials!")
                        setLogged(false)
                    }
                })
            }
            catch(e) {
                alert("Axios error!" + e)
            }
        }

        return(
            <div id="myModal">
            <div className="modal-login">
                
                <form onSubmit={ login }>
                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon"><i class="fa fa-envelope"></i></span>
                            <input type="text" className="form-control" name="username" placeholder="Username"
                             required="required" onChange={ e => setUsername(e.target.value) }/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon"><i class="fa fa-lock"></i></span>
                            <input type="text" className="form-control" name="password" placeholder="Password"
                             required="required" onChange={ e => setPassword(e.target.value) }/>
                        </div>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-block btn-lg">Log in</button>
                    </div>

                    
                    <p className="hint-text">Don't have an account? <Link id="create" to="/signup" onClick={handleClose}>Create one</Link></p>
                </form>
                    
                    
                
            </div>
        </div>     
        );
    }
    else {

        async function AllEvents(){
    
            const response =  await axios.get('http://credenzwebsite.herokuapp.com/allevents')
            const data = await response.data
            
            return data;
        }

        const EVENTS = AllEvents();

        console.log("Events"+ EVENTS)

        switch(event) {

            case "clash" : return(
                            <div>
                                    <div className="card shadow-sm  mt-3">
                                    <div className="card-body">
                                        <div class="tab-content" id="myTabContent">
                                            <div class="tab-pane fade animated zoomIn show active" id="tabs-clash-1" role="tabpanel" aria-labelledby="tabs-clash-1-tab">
                                            <p class="text-center text-default font-weight-normal ">
                                                {/*Put your logical acumen and coding expertise to the test as you clash with a round of perplexing MCQs followed by a set of time-bound coding challenges,
                                                carefully designed to assess your command over programming in the language of your choice- Python, C or C++. 
                                                Showcase your technical proficiency as you have a go at competitive coding with plenty to learn and nothing to lose.*/}
                                                {JSON.stringify(EVENTS[0])}
                                            </p>
                                            </div>                
                                        </div>
                                    </div>
                                    </div>
                                    <h5 class="text-default font-weight-normal ">Registration Fees:</h5>
                                    <div class="d-flex align-items-start ">
                                        <div class="">
                                        <div class="badge badge-pill bg-gradient-primary mr-3 ">
                                        </div>
                                        </div>
                                        <div>
                                        <p class=" text-default font-weight-normal "><strong>₹100</strong> for Non-IEEE members</p>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-start  ">
                                        <div>
                                        <div class="badge badge-pill bg-gradient-primary mr-3">
                                        </div>
                                        </div>
                                        <div>
                                        <p class=" text-default font-weight-normal "><strong>₹80</strong> for IEEE members</p>
                                        </div>
                                    </div>
                            </div>
                            );


            case "enigma" : return(
                                <div>
                                    Enigma info
                                </div>
                            );
            case "xodia" : return(
                                <div>
                                    Xodia info
                                </div>
                            );

            case "webweaver" : return(
                                <div>
                                    Web weaver info
                                </div>
                            );

            case "bplan" : return(
                                <div>
                                    Bplan info
                                </div>
                            );

            default : return(
                            <div>
                                Invalid request
                            </div>
                            );
                      
        }


        

    }

}


function Modal1( {show, handleClose, type, event} ) {

    console.log("Login called!")

    return(
    <>
    
       <Modal dialogClassName="modal-90w" show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered 
        keyboard={false}>
        <Modal.Header closeButton>

                <Modal.Title text-center> <ModalTitle type={type} event={event}/> </Modal.Title>
        </Modal.Header>
        <Modal.Body> 
                <ModalBody handleClose={handleClose} type={type} event={event}/>
        </Modal.Body>
        </Modal> 
    </>
    );


}

export default Modal1;

/*
               const response =  await axios.get('http://credenzwebsite.herokuapp.com/allevents').then(function (response) {
                    //alert(JSON.stringify(response.data[0]["event_name"]));
                    setEventDesc(response.data);
                })

*/