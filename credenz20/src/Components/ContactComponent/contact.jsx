import React, { Component } from 'react';
import "./contact.css";
import ContactCard from './contactCard';

const ContactUs = () => {
    return ( 
        <div className="row content">
            <ContactCard/>
            <ContactCard/>
           </div>
    
     );
}
 
export default ContactUs;