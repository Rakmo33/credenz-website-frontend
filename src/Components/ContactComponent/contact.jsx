import React from "react";
import "./contact.css";
import ContactCard from "./contactCard";
import Social from '../sideEventButton/sideEvent';
import Footer from '../Footer/footer';
// import GoogleMapReact from 'google-map-react';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

const ContactUs = () => {
  const zoom = 11;
  const center = { lat: 59.95, lng: 30.33 };
  return (
    <React-Fragment>
      <div className="row content">
        <ContactCard />
        <ContactCard />
        <ContactCard />
      </div>
      {/* <div style={{ height: '100vh', width: '100%' }}>
                    <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyDeTh8ucnrUB6hrf4PV-VT5xeVbFVSSkbA" }}
                    defaultCenter={center}
                    defaultZoom={zoom}
                    >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    />
                    </GoogleMapReact>
                </div> */}
      <div  className="addr row">
          <div className="col-md-12">
            {/* <h2 className="address">Address</h2> */}
          </div>
        <div className="col-md-12">
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.5761897254197!2d73.84864491506187!3d18.457542087445784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eac85230ba47%3A0x871eddd0a8a0a108!2sSCTR&#39;S%20Pune%20Institute%20of%20Computer%20Technology!5e0!3m2!1sen!2sin!4v1603520633684!5m2!1sen!2sin" 
        width="2000" height="600" frameborder="0" style={{border:'0'}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
      </div>
      <Social/>
      <Footer/>
    </React-Fragment>
  );
};

export default ContactUs;
