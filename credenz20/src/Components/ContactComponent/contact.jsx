import React, { Component } from "react";
import "./contact.css";
import ContactCard from "./contactCard";
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
            <h2 className="address">Address</h2>
          </div>
        <div className="col-md-8">
          <p className="address">
              SCTR'S Pune Institute of Computer Technology Survey No. 27, Near,
              Trimurti Chowk, Bharati Vidyapeeth Campus, Dhankawadi, Pune, Maharashtra
              411043 Directions
          </p>
        </div>
      </div>
    </React-Fragment>
  );
};

export default ContactUs;
