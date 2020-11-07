import React from "react";
// import classes from './Register.css';

const Name = (props) => {
  return (
    <div className='form-group col-md-12'>
      <label htmlFor={props.id}>Participant {props.index}</label>
      <input type='text' className='form-control' id={props.id} />
    </div>
  );
};

export default Name;
