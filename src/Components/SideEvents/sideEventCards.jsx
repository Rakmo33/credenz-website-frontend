import React, { Component } from "react";
import EventCard from "./eventCard";
import logo from "../../assests/img/bg1.jpg";
import web1 from '../../assests/img/webweaver1.jpeg';

const SideEventCards = () => {
  return (
    <React-Fragment>
      {/* <h3 className="event-title title-1">Web Weaver</h3> */}
      <div className="row content" style={{marginTop:'5vh'}}>
        <EventCard
          logo={web1}
          name="Space Cruiser"
          info={"There is an outbreak of a space ship combat. Enter into your almighty spaceship and destroy the attackers, to be the protector of the universe.The whole hopes of are on you cheif!!"}
        />
        <EventCard
          logo={logo}
          name="name4"
          info={"info4. some info about it. play for free"}
        />
        {/* <EventCard
          logo={logo}
          name="name4"
          info={"info4. some info about it. play for free"}
        /> */}
      </div>
      {/* <h2 className="event-title">Clash &amp; RC</h2>
      <div className="row content">
        <EventCard
          logo={logo}
          name="name4"
          info={"info4. some info about it. play for free"}
        />
        <EventCard
          logo={logo}
          name="name4"
          info={"info4. some info about it. play for free"}
        />
      </div> */}
    </React-Fragment>
  );
};

export default SideEventCards;
