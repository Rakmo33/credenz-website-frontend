import React,{useState} from 'react';
import ContactUs from "./contact";
import Team from "./team";
import "./contact.css";
import Feedback from './feedback';

const Contact = ()=>{

  const [select, setSelect]=useState("Contact") ;

  const handleSelect = (select) => {
      setSelect(select);
      
  }
    return(

      <div className="container-fluid con">
          <div className="row head">
              <div className="col-xl-10 col-md-10 ">
                <div className="row nav" style={{height:"100%"}}>
                   <div className={select ==="Contact"?"col-xl-4 tab select":"col-xl-4 tab"} ><h1 onClick={()=>handleSelect("Contact")}>
                       Contact Us
                   </h1></div>
                   <div className={select ==="Team"?"col-xl-4 tab select":"col-xl-4 tab"} ><h1 onClick={()=>handleSelect("Team")}>
                       Our Team
                   </h1></div>
                   <div className={select ==="Feedback"?"col-xl-4 tab select":"col-xl-4 tab"}><h1 onClick={()=>handleSelect("Feedback")}>
                       Feedback
                   </h1></div> 
                </div>
              </div>
          </div>
        
              {select==="Contact"? <ContactUs/>:select === "Team"? <Team/>: <Feedback/>}
         
      </div>
    );
}

export default Contact;