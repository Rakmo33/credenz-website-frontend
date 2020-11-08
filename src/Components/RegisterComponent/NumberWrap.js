import React from "react";
import Number from "./Number";

const NumberWrap = (props) => {
  if (props.isVisible)
    return (
      <div className={props.cls}>
        <Number index={1} id='inputContact1'></Number>
        <Number index={2} id='inputContact2'></Number>
      </div>
    );
  else return <></>;
};

export default NumberWrap;
