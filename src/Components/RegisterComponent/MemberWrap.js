import React from "react";
import Radio from "./Radio";

const MemberWrap = (props) => {
  if (props.isVisible)
    return (
      <div className={props.cls}>
        <Radio
          index={1}
          id='Radio5'
          name='membership'
          value='true'
          label='IEEE Member'></Radio>
        <Radio
          index={1}
          id='Radio6'
          name='membership'
          value='false'
          label='Non IEEE Member'></Radio>
      </div>
    );
  else return <></>;
};

export default MemberWrap;
