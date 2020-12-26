import React from "react";
import Name from "./Name";
import Radio from "./Radio";

const NameWrap = (props) => {
  // console.log(props.formData);

  let checked = [false, false];

  if (props.isVisible) {

    switch (props.formData.team) {
      case "single":
        checked[0] = true;
        break;
      case "team":
        checked[1] = true;
        break;
      default:
        break;
    }

      if(props.formData.team==="single") {

        //console.log(props.formData)

        return(
          <>
          <div className='form-row col-flex'>
            <div className='justify-spread'>
                <Radio
                  index={1}
                  id='Radio1'
                  name='team'
                  value='single'
                  changeHandler={props.setFormData}
                  label='Single participation'
                  checked={checked[0]}></Radio>
                <Radio
                  index={2}
                  id='Radio2'
                  name='team'
                  value='team'
                  changeHandler={props.setFormData}
                  label='Team participation'
              checked={checked[1]}></Radio> 
            </div>
            <div style={{margin: 30}}>
            <Name
                index={""}
                id='Name1'
                value={props.formData.name1}
                changeHandler={props.setFormData}
                name='name1'></Name>
            </div>
          </div>
          </>
        );
      }
      else {
        return (

          <div className={props.cls}>
            <div className='form-row'>
              {/* NAME OF PARTICIPANTS */}
              {console.log(props.formData)}
    
              <p id='choose-events'>Enter Your Usernames</p>
              <Name
                index={""}
                id='teamName'
                team={props.formData.team}
                value={props.formData.teamName}
                changeHandler={props.setFormData}
                name='teamName'></Name>
              <Name
                index={"1*"}
                id='Name1'
                team={props.formData.team}
                value={props.formData.name1}
                changeHandler={props.setFormData}
                name='name1'></Name>
              <Name
                index={2}
                id='Name2'
                team={props.formData.team}
                value={props.formData.name2}
                changeHandler={props.setFormData}
                name='name2'></Name>
              <Name
                index={3}
                id='Name3'
                value={props.formData.name3}
                team={props.formData.team}
                changeHandler={props.setFormData}
                name='name3'></Name>
              <Name
                index={4}
                id='Name4'
                value={props.formData.name4}
                team={props.formData.team}
                changeHandler={props.setFormData}
                name='name4'></Name>
            </div>
          </div>
        );
      }
      
  } 
  else return <></>;
};

export default NameWrap;
