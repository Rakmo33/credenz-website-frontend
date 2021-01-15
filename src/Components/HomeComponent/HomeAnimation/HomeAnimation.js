import React, { useState, useEffect, Component } from "react";
import "./HomeAnimation.css";
import EyeDea21 from "./AnimationSVGs/EyeDea21";
import EyeDea20 from "./AnimationSVGs/EyeDea20";
// import EyeDea from './AnimationSVGs/EyeDea';

const HomeAnimation = (props) => {
  const [showbg, setShowbg] = useState(false);
  const [darken, setDarken] = useState(false);
  const [mechanicalEye, showMechanicalEye] = useState(false);

  return (
    <div className='anim'>
      <iframe
        title='home-iframe'
        height='100%'
        width='100%'
        loading='lazy'
        frameBorder='0'
        src='https://yash-567.github.io/background-iframe/'
        className={`anim-iframe ${showbg && "show"} `}></iframe>
      <div
        className={`anim-overlay-lower ${showbg && "hide-now"} ${
          darken && "darken"
        }`}>
        <EyeDea20 showbg={setShowbg} darken={setDarken} />
      </div>
      <div
        className={`anim-overlay-upper ${showbg && "hide"} ${
          mechanicalEye && "vanish"
        }`}>
        <EyeDea21 mechanicalEye={showMechanicalEye} />
      </div>
    </div>
  );
};

export default HomeAnimation;
