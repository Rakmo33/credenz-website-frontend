import React, {useState, useEffect} from "react";
import Name from "./Name";
import Radio from "./Radio";
import axios from "axios"
import jwt_decode from "jwt-decode";
import jwt from "jwt-decode";
import {Link} from 'react-router-dom';

const NameWrap = (props) => {
  // console.log(props.formData);

  let accessToken = ''

  if(localStorage.getItem("user")){
  const token = localStorage.getItem("user");
  const accessToken = JSON.parse(token).accessToken;
  }

  let checked = [false, false];
  let teamAllowed = true;
  var regArray = localStorage.getItem("Register")? localStorage.getItem("Register").split(","):[];
  var cartArray = localStorage.getItem("Cart")? localStorage.getItem("Cart").split(","):[];
  let user = ''

    if (localStorage.getItem("user")) {
      user = jwt(localStorage.getItem("user"));
    }
    
    
    function storeReg() {

      if(!cartArray.includes(props.formData.event)) {
    
        let user = ''
        if (localStorage.getItem("user")) {
          user = jwt(localStorage.getItem("user"));
        }
    
        let tempArray = [...cartArray]
        tempArray.push(props.formData.event)
        //console.log("temp" + cartArray)
        //setCart(tempArray);
        localStorage.setItem("Cart", tempArray);

        console.log("Store reg")
        let tempRegArray = [...regArray]
        console.log(props.formData)
        tempRegArray.push(props.formData)
        console.log(tempRegArray)
        localStorage.setItem("Register", tempRegArray);
        alert("Event team saved.")
        window.location.reload(false);
      }else{
        alert("Event already present in the cart!")
      }

    }


  const [users, setUsers] = useState('')
    let userList = '';

    useEffect(() => {
      axios({
        method: "get",
        url: "http://credenzwebsite.herokuapp.com/allusers",
        headers: { authorization: `Bearer ${accessToken}` },
      })
        .then((response) => {
          //console.log("axios" + response.data)
          setUsers(response.data)
          //alert(JSON.stringify(response.data))
        })

    }, [])


    if(users) {
      userList = users.map((x)=>{
        return(
          <option>{x.username}</option>
        );
      })
    }

      if(props.formData.team==="single") {

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
                id='name1'
                value={props.formData.name1}
                changeHandler={props.setFormData}
                name='name1'></Name>
            <div style={{textAlign: "center"}}>
            <button onClick={() => storeReg()} type="button" class="btn btn-outline-info">Save</button>
            <Link to="/events">
              <button type="button" class="btn btn-outline-info">
                Back to events
              </button>
            </Link>
            </div>
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

              <div>
              <Name
                index={""}
                id='teamName'
                team={props.formData.team}
                value={props.formData.teamName}
                changeHandler={props.setFormData}
                name='teamName'></Name>
                 
                 {/*<Name
                index={"1"}
                id='Name1'
                team={props.formData.team}
                value={props.formData.name1}
                changeHandler={props.setFormData}
                 name='name1'></Name>*/}

                <label htmlFor='Name1'>Participant 1</label>
                  <select
                      id='name1'
                      className='form-control custom-select'
                      name='name1'
                      value={props.formData.name1}
                      onChange={props.setFormData}>
                      <option selected>Username 1</option>
                      {userList}
                  </select>  

                <label htmlFor='Name2'>Participant 2</label>
                  <select
                      id='name2'
                      className='form-control custom-select'
                      name='name2'
                      value={props.formData.name2}
                      onChange={props.setFormData}>
                      <option selected>Username 2</option>
                      {userList}
                  </select>

                <label htmlFor='Name3'>Participant 3</label>
                  <select
                      id='name3'
                      className='form-control custom-select'
                      name='name3'
                      value={props.formData.name3}
                      onChange={props.setFormData}>
                      <option selected>Username 3</option>
                      {userList}
                  </select>  
                  
                  <div style={{textAlign: "center", marginTop: 10}}>
                    <button onClick={() => storeReg()} type="button" class="btn btn-outline-info">
                      Save
                    </button>
                    <Link to="/events">
                    <button type="button" class="btn btn-outline-info">
                      Back to events
                    </button>
                    </Link>
                  </div>
             
              </div>
              
                
            {/*   <Name
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
            name='name3'></Name>*/}
            </div>
          </div>
        );
      }
      else return <></>;
};

export default NameWrap;
