import React from "react";

function CollegeList(props) {
  if (props.isVisible)
    return (
      <div className='form-row'>
        <label htmlFor='inputState'>College Name</label>
        <select id='inputState' className='form-control'>
          <option defaultValue>Choose...</option>
          <option>PICT</option>
          <option>COEP</option>
          <option>MCOE</option>
          <option>VIT</option>
        </select>
      </div>
    );
  else return <></>;
}

export default CollegeList;
