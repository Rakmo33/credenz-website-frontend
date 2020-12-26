import React from "react";
import "./eventCard.css";

function eventCard(props) {
  let cls = `event-wrap  ${props.cls}`;

  return (
    <div
      id={props.id}
      className={`evePageCards ${cls}`}
      // info={props.info}
      onClick={props.onClick}
      onMouseEnter={props.onHover}>
      <div>
        <span id='scanner'></span>
        <span className='corner top left'></span>
        <span className='corner top right'></span>
        <span className='corner bottom left'></span>
        <span className='corner bottom right'></span>
        <img src={props.src} alt='' srcset='' />
        <h5>{props.name}</h5>
      </div>
    </div>
  );
}

export default eventCard;
