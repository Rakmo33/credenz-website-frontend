import React from "react";
import user from "./user.png";
import "./contact.css";
import ContactCard from "./contactCard";
import Social from "../sideEventButton/sideEvent";
import Footer from "../Footer/footer";

const ContactUs = () => {
  return (
    <div>
      <div className='row content'>
        <ContactCard
          img={user}
          email='email1@email.com'
          phone='+91 988114969'
          name='Onkar Litake'
        />
        <ContactCard
          img={user}
          email='email2@email.com'
          phone='+91 9405234240'
          name='Durvesh Malpure'
        />
        <ContactCard
          img={user}
          email='email3@email.com'
          phone='+91 9834570868'
          name='Rohan Pawar'
        />
      </div>

      <div className='addr row'>
        <div className='col-md-12'>
          {/* <h2 className="address">Address</h2> */}
        </div>
        <div className='col-md-12'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.5761897254197!2d73.84864491506187!3d18.457542087445784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eac85230ba47%3A0x871eddd0a8a0a108!2sSCTR&#39;S%20Pune%20Institute%20of%20Computer%20Technology!5e0!3m2!1sen!2sin!4v1603520633684!5m2!1sen!2sin'
            width='2000'
            height='600'
            frameborder='0'
            style={{ border: "0" }}
            allowfullscreen=''
            aria-hidden='false'
            tabindex='0'
            title='iframe'></iframe>
        </div>
      </div>
      <Social />
      <Footer />
    </div>
  );
};

export default ContactUs;
