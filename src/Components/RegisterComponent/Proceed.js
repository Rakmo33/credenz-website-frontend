import React from "react";

function Proceed(props) {
  if (props.isVisible)
    return (
      <div>
        <div>{props.formData.name1}</div>
        <div className={props.cls}>
          <button className='btn btn-primary next-btn'>
            Proceed For Payment
            <br />
            <span id='total-amount'>₹{props.total}</span>
          </button>
        </div>
      </div>
    );
  else return <></>;
}

export default Proceed;
