import React, { useState, useEffect } from "react";
import "./HomeAnimation.css";
import EyeDea21 from "./AnimationSVGs/EyeDea21";
import EyeDea20 from "./AnimationSVGs/EyeDea20";
import OverlayLogos from "./OverlayLogos";

const HomeAnimation = (props) => {
  const [mechanicalEye, showMechanicalEye] = useState(false);
  const [showLogoTrail, setShowLogoTrail] = useState(false);
  const [disableEye, setDisableEye] = useState(false);
  // let showLogoTrail = false;
  useEffect(() => {
    if (mechanicalEye === true) {
      console.log("mechanical eye starting");
      setTimeout(() => {
        setShowLogoTrail(true);
        setDisableEye(true);
        console.log("loading Logo trail");
      }, 9000);
    }
  }, [mechanicalEye]);

  return (
    <div className='anim'>
      <img
        src={require("../../../assests/img/web_bg.jpg")}
        className='anim-iframe'
        alt='background'
      />
      <div className={`anim-overlay-logos`}>
        {showLogoTrail ? <OverlayLogos trigger={mechanicalEye} /> : null}
      </div>
      <div className={`${disableEye && "hide"}`}>
        <div className={`anim-overlay-lower ${mechanicalEye && "hide-now"}`}>
          <EyeDea20 triggered={mechanicalEye} />
        </div>
        <div className={`anim-overlay-upper ${mechanicalEye && "vanish"}`}>
          <EyeDea21 mechanicaleye={showMechanicalEye} />
        </div>
      </div>
    </div>
  );
};

export default HomeAnimation;
