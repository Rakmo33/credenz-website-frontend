import React, { Component } from 'react';
import user from "./user.png";
import "./contact.css";

const ContactCard = () => {
    return (  

            <div className="contacts card">
            <img className="contacts-img card-img-top" src={user} alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">ABC</h5>
              <p className="card-text">Email : abc@gmail.com</p>
              <p className="card-text">Phone no : 909232442</p>
            </div>
            </div>

    );
}
 
export default ContactCard;

      