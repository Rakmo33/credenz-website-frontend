import React from "react";
// import classes from './Register.css';

const Email = (props) => {
  return (
    <div className='form-group col-md-6 emails'>
      <label htmlFor={props.id}>Email {props.index}</label>
      <input
        type='email'
        name={props.name}
        value={props.value}
        onChange={props.changeHandler}
        className='form-control'
        id={props.id}
      />
      <span id={props.id} className='errormsg'></span>
    </div>
  );
};

export default Email;
