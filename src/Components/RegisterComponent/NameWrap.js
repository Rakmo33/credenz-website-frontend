import React from "react";
import Name from "./Name";

const NameWrap = (props) => {
  // console.log(props.formData);
  if (props.isVisible)
    return (
      <div className={props.cls}>
        <div className='form-row'>
          {/* NAME OF PARTICIPANTS */}
          <p id='choose-events'>Enter Your Names</p>
          <Name
            index={"1*"}
            id='Name1'
            value={props.formData.name1}
            changeHandler={props.setFormData}
            name='name1'></Name>
          <Name
            index={2}
            id='Name2'
            value={props.formData.name2}
            changeHandler={props.setFormData}
            name='name2'></Name>
          <Name
            index={3}
            id='Name3'
            value={props.formData.name3}
            changeHandler={props.setFormData}
            name='name3'></Name>
          <Name
            index={4}
            id='Name4'
            value={props.formData.name4}
            changeHandler={props.setFormData}
            name='name4'></Name>
        </div>
      </div>
    );
  else return <></>;
};

export default NameWrap;
