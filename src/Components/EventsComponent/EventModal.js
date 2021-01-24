/* eslint-disable no-lone-blocks */
import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import jwt_decode from "jwt-decode";
import jwt from "jwt-decode";

import "./eventmodal.css";

function addToCart(event, cart, setCart,eventReg, setEventReg) {

  var cartArray = localStorage.getItem("Cart")? localStorage.getItem("Cart").split(","):[];
  var regArray = localStorage.getItem("Register")? localStorage.getItem("Register").split(","):[];

  regArray.map((x)=>alert(JSON.stringify(x.event)))
  
  if(!cartArray.includes(event)) {
    
    
    const teamPresent = teams(event);

    let user = ''
    if (localStorage.getItem("user")) {
      user = jwt(localStorage.getItem("user"));
    }

    if(teamPresent) {    
      setEventReg("team")
    }else {

      let singleRegObject = {
        event: event,
        username: localStorage.getItem("user") ? JSON.stringify(user["username"]).replace(/"/g, ""):""
      }

      let tempRegArray = [...regArray]
      console.log(tempRegArray)

     

      alert(JSON.stringify(tempRegArray))
      tempRegArray.push(singleRegObject)
      setEventReg(tempRegArray)
      localStorage.setItem("Register", tempRegArray);
    }

    //console.log(eventReg)
    //var cartArray = localStorage.getItem("Cart")? localStorage.getItem("Cart").split(","):[];
    let tempArray = [...cartArray]
    tempArray.push(event)
    //console.log("temp" + cartArray)
    setCart(tempArray);
    localStorage.setItem("Cart", tempArray);
    window.location.reload(false);
  }else{
    alert("Event already present in the cart!")
  }
}

function teams(event) {

  let teamAllowed = true;

  switch(event) {
    case "Clash"://1 member
        teamAllowed=false;
        break;
    case "Reverse Coding"://1 member
        teamAllowed=false;
        break;
    case "Enigma"://1 member
        teamAllowed=false;
        break;
    case "Quiz"://1 member
        teamAllowed=false;
        break;
    case "Cretronix"://1 member
        teamAllowed=false;
        break;
    case "Bplan"://3 members
        break;
    case "Network Treasure Hunt"://1 member
        teamAllowed=false;
        break;
    case "Paper Presentation"://3 members
        break;
    case "Datawiz"://3 members
        break;
    case "Webweaver"://3 members
        break;
    case "Wallstreet"://1 member
        teamAllowed=false;
        break;
    case "Pixelate"://1 member
        teamAllowed=false;
        break;
    default:
      break;
  }

  return teamAllowed;

}


function EventModal(props) {
  let currentInfo = props.info;
  let currentTab = currentInfo.info1;
  let cls = `modalWrap ${props.cls}`;

  const [tab, setTab] = useState(1);
  const [currentTabInfo, setCurrentTabInfo] = useState(currentInfo.info1);

  const activeTab = (index) => {
    let tabs = document.querySelectorAll(".tab-button");

    tabs.forEach((item) => {
      item.classList.remove("activeTabButton");
    });

    tabs[index - 1].classList.add("activeTabButton");
  };

  const tabSwitchHandler = (tabNumber) => {
    setTab(tabNumber);

    console.log(tabNumber);

    if (tabNumber === 1) {
      setCurrentTabInfo(currentInfo.info1);
      activeTab(1);
    } else if (tabNumber === 2) {
      setCurrentTabInfo(currentInfo.info2);
      activeTab(2);
    } else if (tabNumber === 3) {
      setCurrentTabInfo(currentInfo.info3);
      activeTab(3);
    } else if (tabNumber === 4) {
      setCurrentTabInfo(currentInfo.info4);
      activeTab(4);
    } else if (tabNumber === 5) {
      activeTab(5);
      setCurrentTabInfo(currentInfo.info5);
    }
  };

  return (
    <div style={{textAlign:'left !important'}} className={cls}>
      <div className='modalHead'>
        <img src={currentInfo.src} alt='logo' />
        <h3>{currentInfo.title}</h3>
        {/*
        <Link to={`/register/${currentInfo.title}`} className='regNowBtn'>
          Register Now!
        </Link>
       */}
       {/* {
          teams(currentInfo.title)===false ? 
          <button className='regNowBtn' 
          onClick={() => addToCart(currentInfo.title, props.cart, props.setCart,props.eventReg, props.setEventReg)}>
            Add to Cart
          </button> 
          :
          <Link to={`/newreg/${currentInfo.title}`}>
            <button className='regNowBtn'>
              Add to Cart
            </button>
          </Link> 
       } */}
        
        <span onClick={props.onClick}>
          <i className='fa fa-times'></i>
        </span>
      </div>
      <hr />
      <div className='modalBody'>
        <ul className='tabs'>
          <li>
            <button
              className='tab-button activeTabButton'
              onClick={() => {
                tabSwitchHandler(1);
              }}>
              <i className='fa fa-info'></i>
              <p>Info</p>
            </button>
          </li>
          <li>
            <button
              className='tab-button'
              onClick={() => {
                tabSwitchHandler(2);
              }}>
              <i className='fa  fa-pencil-square-o'></i>
              <p>Rules</p>
            </button>
          </li>
          <li>
            <button
              className='tab-button'
              onClick={() => {
                tabSwitchHandler(3);
              }}>
              <i className='fa  fa-cogs'></i>
              <p>Structure</p>
            </button>
          </li>
          <li>
            <button
              className='tab-button'
              onClick={() => {
                tabSwitchHandler(4);
              }}>
              <i className='fa  fa-balance-scale'></i>
              <p>Judging Criteria</p>
            </button>
          </li>
          <li>
            <button
              className='tab-button'
              onClick={() => {
                tabSwitchHandler(5);
              }}>
              <i className='fa  fa-phone'></i>
              <p>Contact</p>
            </button>
          </li>
        </ul>

        <div
          className='info'
          dangerouslySetInnerHTML={{ __html: currentTabInfo }}
        />
      </div>
      {/*<button
        className='regNowBtn'
        onClick={() => addToCart(currentInfo.title, props.cart, props.setCart)}>
        <i class='fa fa-lg fa-shopping-cart' title='Cart' value='5'></i>
        Add to Cart
      </button>*/}
       {
          teams(currentInfo.title)===false ? 
          <button className='regNowBtn' 
          onClick={() => addToCart(currentInfo.title, props.cart, props.setCart,props.eventReg, props.setEventReg)}>
             <i class='fa fa-lg fa-shopping-cart' title='Cart' value='5'></i>
            Add to Cart
          </button> 
          :
          <Link  style={{textAlign:'center'}} to={`/newreg/${currentInfo.title}`}>
            <button className='regNowBtn'>
            <i class='fa fa-lg fa-shopping-cart' title='Cart' value='5'></i>
              Add to Cart
            </button>
          </Link> 
       }
    </div>
  );
}

export default EventModal;

{
  /* <div>
<div
  className='modal show fade animated zoomIn'
  data-type='events'
  style={{ display: "block" }}
  data-id='bplan'
  id='myModal1'
  role='dialog'
  tabindex='-1'>
  <div className='modal-dialog modal-dialog-centered modal-lg'>
    <div className='modal-content mt-sm-5'>
      <div className='modal-header'>
        <h4 className='modal-title display-4'>BPLAN</h4>
        <button
          type='button'
          className='close modal-close '
          data-dismiss='modal'
          onClick={props.onClick}>
          &times;
        </button>
      </div>
      <div className='modal-body'>
        <div className=' d-flex justify-content-center'>
          <ul
            className='nav nav-pills nav-pills-circle d-flex flex-wrap justify-content-center '
            role='tablist'>
            <li className='nav-item'>
              <a
                className='nav-link rounded-circle mx-auto active '
                data-toggle='tab'
                href='#tabs-bplan-1'
                role='tab'
                aria-controls='home'
                aria-selected='true'>
                <div className='nav-link-icon '>
                  <i
                    className='fa fa-info'
                    style={{
                      fontSize: "1.5rem",
                      transform: "translateY(0.5rem)",
                    }}></i>
                </div>
              </a>
              <span
                className=' d-none d-lg-block mt-2'
                style={{ color: "black" }}>
                Introduction
              </span>
            </li>
            <li className='nav-item '>
              <a
                className='nav-link rounded-circle mx-auto'
                data-toggle='tab'
                href='#tabs-bplan-2'
                role='tab'
                aria-controls='home'
                aria-selected='true'>
                <div className='nav-link-icon '>
                  <i
                    className='fa  fa-pencil-square-o'
                    style={{
                      fontSize: "1.5rem",
                      transform: "translateY(0.5rem)",
                    }}></i>
                </div>
              </a>
              <span
                className=' d-none d-lg-block mt-2'
                style={{ color: "black", marginLeft: "10px" }}>
                Rules
              </span>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link rounded-circle mx-auto'
                data-toggle='tab'
                href='#tabs-bplan-3'
                role='tab'
                aria-controls='home'
                aria-selected='true'>
                <div className='nav-link-icon '>
                  <i
                    className='fa fa-cogs'
                    style={{
                      fontSize: "1.5rem",
                      transform: "translateY(0.5rem)",
                    }}></i>
                </div>
              </a>
              <span
                className=' d-none d-lg-block mt-2'
                style={{ color: "black" }}>
                Structure
              </span>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link rounded-circle mx-auto'
                data-toggle='tab'
                href='#tabs-bplan-4'
                role='tab'
                aria-controls='home'
                aria-selected='true'>
                <div className='nav-link-icon '>
                  <i
                    className='fa  fa fa-balance-scale'
                    style={{
                      fontSize: "1.5rem",
                      transform: "translateY(0.5rem)",
                    }}></i>
                </div>
              </a>
              <span
                className=' d-none d-lg-block mt-2'
                style={{ color: "black" }}>
                Judging Criteria
              </span>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link rounded-circle mx-auto'
                data-toggle='tab'
                href='#tabs-bplan-5'
                role='tab'
                aria-controls='home'
                aria-selected='true'>
                <div className='nav-link-icon '>
                  <i
                    className='fa fa-phone'
                    style={{
                      fontSize: "1.5rem",
                      transform: "translateY(0.5rem)",
                    }}></i>
                </div>
              </a>
              <span
                className=' d-none d-lg-block mt-2'
                style={{ color: "black" }}>
                Contact
              </span>
            </li>
          </ul>
        </div>

        <div
          className='card shadow-sm  mt-3'
          style={{ overflowY: "auto", height: "50vh" }}>
          <div className='card-body'>
            <div className='tab-content' id='myTabContent'>
              <div
                className='tab-pane fade animated zoomIn show active'
                id='tabs-bplan-1'
                role='tabpanel'
                aria-labelledby='tabs-bplan-1-tab'>
                <p className='text-center text-default font-weight-normal '>
                  Have you always dreamt of having your own business or
                  product ? B-Plan is the perfect platform for you to
                  showcase your ideas before a panel of the best marketing
                  professionals! Make a presentation describing your
                  business idea, and get a chance to win funding from the
                  investors.{" "}
                </p>

                <h5 className='text-default font-weight-normal '>
                  Registration Fees:
                </h5>
                <div className='d-flex align-items-start '>
                  <div>
                    <div className='badge badge-pill bg-gradient-primary mr-3 '></div>
                  </div>
                  <div>
                    <p className=' text-default font-weight-normal '>
                      <strong>₹150</strong> for Non-IEEE members
                    </p>
                  </div>
                </div>
                <div className='d-flex align-items-start  '>
                  <div>
                    <div className='badge badge-pill bg-gradient-primary mr-3'></div>
                  </div>
                  <div>
                    <p className=' text-default font-weight-normal '>
                      <strong>₹120</strong> for IEEE members
                    </p>
                  </div>
                </div>
              </div>
              <div
                className='tab-pane fade animated zoomIn'
                id='tabs-bplan-2'
                role='tabpanel'
                aria-labelledby='tabs-bplan-2-tab'>
                <p className='text-center text-default font-weight-normal'>
                  <ul className=''>
                    <li>
                      1) A maximum of three candidates per plan pursuing
                      undergraduate/graduate/postgraduate program at their
                      institution will be allowed per team.
                    </li>
                    <li>
                      2) Proposed business plan should not be in violation
                      of any intellectual property rights.
                    </li>
                    <li>
                      3) All the participants should bring receipt and
                      valid I-Cards while coming for the contest. No one
                      without I-Card will be allowed for the contest and
                      the team will be disqualified.
                    </li>
                  </ul>
                </p>
              </div>
              <div
                className='tab-pane fade animated zoomIn'
                id='tabs-bplan-3'
                role='tabpanel'
                aria-labelledby='tabs-bplan-3-tab'>
                <p className='text-center text-default font-weight-normal'>
                  <ul className=''>
                    <li>
                      1) At stage 1, the soft copy of the abstract
                      (summary) should be submitted to
                      bplan.credenz19@gmail.com
                    </li>
                    <li>2) The Soft copy should be a .pdf file.</li>
                    <li>
                      3) Evaluation of Executive Summaries by judges and
                      Short-listing of 7 (+3 waiting) business plans for
                      the next stage takes place.
                    </li>
                    <li>
                      4) Each team will be given 12 minutes in the final
                      round to present their B-PLAN in College Auditorium
                      in front of panel of judges and audience. A warning
                      bell will be given at 10 minutes and a final 2
                      minutes thereafter.
                    </li>
                    <li>
                      5) The presentation would be followed by a
                      question-answer session where they would be
                      questioned on different hurdles, opportunities and
                      obstacles at various points.
                    </li>
                    <li>
                      6) The main stress during question-answer session
                      would be given on feasibility and Exit Plan.
                    </li>
                  </ul>
                </p>
              </div>
              <div
                className='tab-pane fade animated zoomIn'
                id='tabs-bplan-4'
                role='tabpanel'
                aria-labelledby='tabs-bplan-3-tab'>
                <p className='text-center text-default font-weight-normal'>
                  <ul className=''>
                    <li>
                      1) Innovation involved in the development of the
                      idea and its practicality.
                    </li>
                    <li>2) Originality and Patentability.</li>
                    <li>3) Technical feasibility.</li>
                    <li>4) Implementation of the product.</li>
                    <li>5) Cost efficiency (if relevant).</li>
                    <li>
                      6) uperiority of the product over existing products
                      in market.
                    </li>
                    <li>
                      7) Participants will be judged on the basis of their
                      business acumen and on how sustainable and
                      innovative their solution is.
                    </li>
                    <li>
                      8) The decision of the judges will be final and
                      shall be respected.
                    </li>
                  </ul>
                </p>
              </div>
              <div
                className='tab-pane fade animated zoomIn'
                id='tabs-bplan-5'
                role='tabpanel'
                aria-labelledby='tabs-bplan-3-tab'>
                <div className='d-flex flex-column '>
                  <p className='text-center'>
                    Neelanjney Pilarisetty &nbsp;
                    <br />
                    <i className='fa fa-phone fa-icons '></i>
                    <a href='tel:+91-8668229164'>
                      <span>&nbsp;+91-8087084718</span>
                    </a>
                  </p>
                  <p className='text-center'>
                    Sudhanshu Bhoi &nbsp;
                    <br />
                    <i className='fa fa-phone fa-icons '></i>
                    <a href='tel:+91-7756912076'>
                      <span>&nbsp;+91-8975167862</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='modal-footer'>
        <a href className='btn btn-warning d-none'>
          Register
        </a>
      </div>
    </div>
  </div>
</div>
</div> */
}
