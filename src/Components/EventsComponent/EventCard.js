import React from "react";
import "./eventCard.css";

function eventCard(props) {
  let cls = `event-wrap  ${props.cls}`;

  return (
    <div
      className={cls}
      // info={props.info}
      onClick={props.onClick}>
      <img src={props.src} alt='' srcset='' />
      <h5>{props.name}</h5>
    </div>
  );
}

export default eventCard;
