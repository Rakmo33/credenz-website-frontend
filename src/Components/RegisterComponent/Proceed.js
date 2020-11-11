import React from "react";

function Proceed(props) {
  if (props.isVisible)
    return (
      <div className='col-sm-6 d-flex justify-content-center m-auto'>
        <button className='btn btn-primary next-btn'>
          Proceed For Payment
          <br />
          <span id='total-amount'>₹{props.total}</span>
        </button>
      </div>
    );
  else return <></>;
}

export default Proceed;
