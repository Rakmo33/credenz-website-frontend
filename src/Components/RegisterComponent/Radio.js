import React from "react";

const Radio = (props) => {
  return (
    <div className='custom-control custom-radio custom-control-inline'>
      <input
        type='radio'
        id={props.id}
        name={props.name}
        value={props.value}
        className='custom-control-input'
      />
      <label className='custom-control-label' htmlFor={props.id}>
        {props.label}
      </label>
    </div>
  );
};

export default Radio;
