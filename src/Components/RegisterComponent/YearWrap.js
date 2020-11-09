import React from "react";
import Radio from "./Radio";

const YearWrap = (props) => {
  if (props.isVisible)
    return (
      <div className={props.cls}>
        {/* FE-SE-TE-BE RADIO BUTTONS */}
        <Radio index={1} id='Radio1' name='year' value='FE' label='FE'></Radio>
        <Radio index={2} id='Radio2' name='year' value='SE' label='SE'></Radio>
        <Radio index={3} id='Radio3' name='year' value='TE' label='TE'></Radio>
        <Radio index={4} id='Radio4' name='year' value='BE' label='BE'></Radio>
      </div>
    );
  else return <></>;
};

export default YearWrap;
