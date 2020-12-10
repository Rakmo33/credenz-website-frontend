import React from "react";
import "./animation.css";
import importScript from "./importScript";
import Animated from "./roboSmall.svg";

function Robo() {
  importScript(
    "https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"
  );
  importScript(
    "https://cdnjs.cloudflare.com/ajax/libs/gsap/1.17.0/TweenMax.min.js"
  );
  importScript(
    "https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js"
  );
  importScript(
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/modernizr.custom.64310.js"
  );
  //importScript("./eveAnim.js");
  return (
    <div>
         <object type="image/svg+xml" data={Animated}>svg-animation</object>
    </div>
  );
}

export default Robo;
