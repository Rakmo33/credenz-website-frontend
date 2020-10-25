import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Modal.css';

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

    const submitForm = e => {
        console.log("Current state is : " + JSON.stringify({username, password}))
        alert("Current state is : " + JSON.stringify({username, password}))
        e.preventDefualt()
    }

    console.log("ModalBody called!")

    if(type==="login") {
        return(
            <div id="myModal">
            <div className="modal-login">
                
                <form onSubmit={ submitForm }>
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


        switch(event) {

            case "clash" : return(
                            <div>

                                <div className="card shadow-sm  mt-3">
                                <div className="card-body">
                                    <div class="tab-content" id="myTabContent">
                                        <div class="tab-pane fade animated zoomIn show active" id="tabs-clash-1" role="tabpanel" aria-labelledby="tabs-clash-1-tab">
                                        <p class="text-center text-default font-weight-normal ">
                                            Put your logical acumen and coding expertise to the test as you clash with a round of perplexing MCQs followed by a set of time-bound coding challenges,
                                            carefully designed to assess your command over programming in the language of your choice- Python, C or C++. 
                                            Showcase your technical proficiency as you have a go at competitive coding with plenty to learn and nothing to lose.
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

                <div class="card shadow-sm  mt-3" >
                <div class="card-body">
            <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade animated zoomIn show active" id="tabs-bplan-1" role="tabpanel" aria-labelledby="tabs-bplan-1-tab">
                <p class="text-center text-default font-weight-normal ">Have you always dreamt of having your own business or product ?
                    B-Plan is the perfect platform for you to showcase your ideas before a panel of the best marketing professionals!
                    Make a presentation describing your business idea, and get a chance to win funding from the investors. </p>


            <h5 class="text-default font-weight-normal ">Registration Fees:</h5>
            <div class="d-flex align-items-start ">
                    <div>
                    <div class="badge badge-pill bg-gradient-primary mr-3 ">
                    </div>
                    </div>
                    <div>
                    <p class=" text-default font-weight-normal "><strong>₹150</strong> for Non-IEEE members</p>
                    </div>
                </div>
                <div class="d-flex align-items-start  ">
                    <div>
                    <div class="badge badge-pill bg-gradient-primary mr-3">
                    </div>
                    </div>
                    <div>
                    <p class=" text-default font-weight-normal "><strong>₹120</strong> for IEEE members</p>
                    </div>
                </div>

            </div>
            <div class="tab-pane fade animated zoomIn" id="tabs-bplan-2" role="tabpanel" aria-labelledby="tabs-bplan-2-tab">
                <p class="text-center text-default font-weight-normal">
                    <ul class="">
                        <li>1) A maximum of three candidates per plan pursuing undergraduate/graduate/postgraduate program at their institution will be allowed per team.</li>
                        <li>2) Proposed business plan should not be in violation of any intellectual property rights.</li>
                        <li>3) All the participants should bring receipt and valid I-Cards while coming for the contest. No one without I-Card will be allowed for the contest and the team will be disqualified.</li>
                    </ul>
    </p>
            </div>
            <div class="tab-pane fade animated zoomIn" id="tabs-bplan-3" role="tabpanel" aria-labelledby="tabs-bplan-3-tab">
                <p class="text-center text-default font-weight-normal">

            <ul class="">
                        <li>1) At stage 1, the soft copy of the abstract (summary) should be submitted to bplan.credenz19@gmail.com</li>
                        <li>2) The Soft copy should be a .pdf file.</li>
                        <li>3) Evaluation of Executive Summaries by judges and Short-listing of 7 (+3 waiting) business plans for the next stage takes place.</li>
                        <li>4) Each team will be given 12 minutes in the final round to present their B-PLAN in College Auditorium in front of panel of judges and audience. A warning bell will be given at 10 minutes and a final 2 minutes thereafter.</li>
                        <li>5) The presentation would be followed by a question-answer session where they would be questioned on different hurdles, opportunities and obstacles at various points.</li>
                        <li>6) The main stress during question-answer session would be given on feasibility and Exit Plan.</li>
                    </ul>

    </p>
            </div>
            <div class="tab-pane fade animated zoomIn" id="tabs-bplan-4" role="tabpanel" aria-labelledby="tabs-bplan-3-tab">
                <p class="text-center text-default font-weight-normal">


    <ul class="">
                        <li>1) Innovation involved in the development of the idea and its practicality.</li>
                        <li>2) Originality and Patentability.</li>
                        <li>3) Technical feasibility.</li>
                        <li>4) Implementation of the product.</li>
                        <li>5) Cost efficiency (if relevant).</li>
                        <li>6) uperiority of the product over existing products in market.</li>
                        <li>7) Participants will be judged on the basis of their business acumen and on how sustainable and innovative their solution is.</li>
                        <li>8) The decision of the judges will be final and shall be respected.</li>
                    </ul>


    </p>
            </div>
            <div class="tab-pane fade animated zoomIn" id="tabs-bplan-5" role="tabpanel" aria-labelledby="tabs-bplan-3-tab">
                                <div class="d-flex flex-column ">
                                <p class="text-center">Neelanjney Pilarisetty &nbsp;<br/><i class="fa fa-phone fa-icons "></i><a href="tel:+91-8668229164" ><span>&nbsp;+91-8087084718</span></a></p>
                                <p class="text-center">Sudhanshu Bhoi &nbsp;<br/><i class="fa fa-phone fa-icons "></i><a href="tel:+91-7756912076"><span>&nbsp;+91-8975167862</span></a></p>

        </div>
            </div>
        </div>
    </div>
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