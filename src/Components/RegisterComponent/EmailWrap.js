import React from "react";
import Email from "./Email";

const EmailWrap = (props) => {
  if (props.isVisible)
    return (
      <div className={props.cls}>
        <div className='form-row'>
          <Email
            index={1}
            id='inputEmail1'
            name='email1'
            value={props.formData.email1}
            changeHandler={props.setFormData}></Email>
          <Email
            index={2}
            id='inputEmail2'
            name='email2'
            value={props.formData.email2}
            changeHandler={props.setFormData}></Email>
        </div>
      </div>
    );
  else return <></>;
};

export default EmailWrap;
