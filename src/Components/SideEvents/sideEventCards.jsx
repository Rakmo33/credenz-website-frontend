import React, { Component } from "react";
import EventCard from "./eventCard";
import logo from "../../assests/img/bg1.jpg";
import web1 from "../../assests/img/webweaver1.jpeg";
import web2 from '../../assests/img/web3.jpeg';
const SideEventCards = () => {
  return (
    <div className='sideEventTab' style={{ minHeight: "100vh" }}>
      {/* <h3 className="event-title title-1">Web Weaver</h3> */}
      <div className='row content' style={{ marginTop: "5vh" }}>
        <EventCard
          logo={web1}
          name='Space Cruiser'
          info={
            "There is an outbreak of a space ship combat. Enter into your almighty spaceship and destroy the attackers, to be the protector of the universe.The whole hopes of are on you cheif!!"
          }
        />
        <EventCard
          logo={web2}
          name='Castle Runner'
          info={"Race against time and clear the exciting levels by reaching the castle. Collect coins and good mushrooms, beware of the big red enemy mushrooms. To win the game, clear all the levels!"}
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
    </div>
  );
};

export default SideEventCards;
