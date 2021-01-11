import React, {useState} from "react";
import Name from "./Name";
import Radio from "./Radio";

const NameWrap = (props) => {
  // console.log(props.formData);

  let checked = [false, false];
  let teams = [true, false, false, false]
  let teamAllowed = true;


  //const [teamAllowed, setteamAllowed] = useState(true)

  if (props.isVisible) {

    switch(props.event) {
      case "Clash"://1 member
          teamAllowed=false;
          break;
      case "Reverse Coding"://1 member
          teamAllowed=false;
          break;
      case "Enigma"://1 member
          teamAllowed=false;
          break;
      case "Quiz"://1 member
          teamAllowed=false;
          break;
      case "Cretronix"://1 member
          teamAllowed=false;
          break;
      case "Bplan"://3 members
          teams[1]=true;
          teams[2]=true;
          break;
      case "Network Treasure Hunt"://1 member
          teamAllowed=false;
          break;
      case "Paper Presentation"://3 members
          teams[1]=true;
          teams[2]=true;
          break;
      case "Datawiz"://3 members
          teams[1]=true;
          teams[2]=true;
          break;
      default:
        break;
    }

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
                {teamAllowed && <Radio
                  index={1}
                  id='Radio1'
                  name='team'
                  value='single'
                  changeHandler={props.setFormData}
                  label='Single participation'
                  checked={checked[0]}></Radio>}
                {teamAllowed && <Radio
                  index={2}
                  id='Radio2'
                  name='team'
                  value='team'
                  changeHandler={props.setFormData}
                  label='Team participation'
              checked={checked[1]}></Radio>} 
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

      else if(teamAllowed && props.formData.team==="team") {
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
              {teams[0] && <Name
                index={"1*"}
                id='Name1'
                team={props.formData.team}
                value={props.formData.name1}
                changeHandler={props.setFormData}
                name='name1'></Name>}
              {teams[1] && <Name
                index={2}
                id='Name2'
                team={props.formData.team}
                value={props.formData.name2}
                changeHandler={props.setFormData}
                name='name2'></Name>}
              {teams[2] && <Name
                index={3}
                id='Name3'
                value={props.formData.name3}
                team={props.formData.team}
                changeHandler={props.setFormData}
                name='name3'></Name>}
              {teams[3] &&<Name
                index={4}
                id='Name4'
                value={props.formData.name4}
                team={props.formData.team}
                changeHandler={props.setFormData}
                name='name4'></Name>}
            </div>
          </div>
        );
      }
      
  } 
  else return <></>;
};

export default NameWrap;
