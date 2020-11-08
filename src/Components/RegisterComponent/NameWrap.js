import React from "react";
import Name from "./Name";

const NameWrap = (props) => {
  if (props.isVisible)
    return (
      <div className={props.cls}>
        {/* NAME OF PARTICIPANTS */}
        <Name index={1} id='Name1'></Name>
        <Name index={2} id='Name2'></Name>
        <Name index={3} id='Name3'></Name>
        <Name index={4} id='Name4'></Name>
      </div>
    );
  else return <></>;
};

export default NameWrap;
