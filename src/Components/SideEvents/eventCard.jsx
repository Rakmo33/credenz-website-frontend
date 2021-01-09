import React from "react";
import "./sideEvent.css";
import '../ContactComponent/button.css'

const EventCard = ({ logo, name, info }) => {
  return (
    <div className='card event-card'>
      <div className="row no-gutters">
        <div className="col-md-6 col-xs-6 imgbox">
          <img className='card-img-top side-event-logo' src={logo} alt='Logo' />
        </div>
        <div className="col-md-6 col-xs-6"  >
          <div className='card-body'>
            <h5 className='card-title'>{name}</h5>
            <p className='card-text'>{info}</p>
            <a href='.' className=''>
              {/* <button className="kave-btn eventbtn">
                  <span className="kave-line"></span>
                  Play
              </button> */}
              <button className='play'>Play</button>
            </a>
        </div> 
        </div>
      </div>
    </div>
  );
};

export default EventCard;
