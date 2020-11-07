import React from "react";
// import classes from './Register.css';

const Email = (props) => {
  return (
    <div className='form-group col-md-6 emails'>
      <label htmlFor={props.id}>Email {props.index}</label>
      <input type='email' className='form-control' id={props.id} />
    </div>
  );
};

export default Email;
