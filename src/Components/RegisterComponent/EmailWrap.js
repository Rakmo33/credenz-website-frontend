import React from "react";
import Email from "./Email";

const EmailWrap = (props) => {
  if (props.isVisible)
    return (
      <div className={props.cls}>
        <Email index={1} id='inputEmail1'></Email>
        <Email index={2} id='inputEmail2'></Email>
      </div>
    );
  else return <></>;
};

export default EmailWrap;
