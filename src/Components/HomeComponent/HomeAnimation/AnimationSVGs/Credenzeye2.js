import * as React from "react";
import { useState, useEffect } from "react";
import "./CredenzEye.css";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

function SvgCredenzeye(props) {
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);
  const { height, width } = useWindowDimensions();
  let xpercentage = 0;
  let ypercentage = 0;

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      // let outercx = document.getElementById("eyeball-outer").getAttribute("cx");
      // let outercy = document.getElementById("eyeball-outer").getAttribute("cy");
      let outerr = document.getElementById(props.ids[0]).getAttribute("r");
      let eyeballOuter = document.getElementById(props.ids[0]);
      // let innercx = document.getElementById("eyeball-inner").getAttribute("cx");
      // let innercy = document.getElementById("eyeball-inner").getAttribute("cy");
      // let innerr = document.getElementById("eyeball-inner").getAttribute("r");
      let eyeballInner = document.getElementById(props.ids[1]);
      let outerposx = 0;
      let outerposy = 0;
      let innerposx = 0;
      let innerposy = 0;

      document.addEventListener("mousemove", (e) => {
        setLeft(e.pageX);
        setTop(e.pageY);
        // this.setState({left: e.pageX, top: e.pageY});
        xpercentage = (e.pageX - width / 2) / width;
        ypercentage = (e.pageY - height / 2) / height;
        outerposx = 1006.21 + xpercentage * outerr * 2.0;
        outerposy = ypercentage * outerr * 1.8 + 1050;
        innerposx = 1005.56 + xpercentage * outerr * 2.0;
        innerposy = ypercentage * outerr * 1.8 + 1050;
        eyeballOuter.setAttribute("cx", outerposx);
        eyeballOuter.setAttribute("cy", Math.min(outerposy, 2419));
        eyeballInner.setAttribute("cx", innerposx);
        eyeballInner.setAttribute("cy", Math.min(innerposy, 5419));
      });
    }

    return () => {
      isMounted = false;
    };
  });
  return (
    <svg
      id='credenzeye_svg__Layer_1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      x={500}
      y={0}
      viewBox='0 0 2000 2000'
      xmlSpace='preserve'
      style={props.isidle ? { opacity: "1" } : { opacity: "0" }}
      {...props}>
      <style>
        {
          ".credenzeye_svg__st1{fill:#020202}.credenzeye_svg__st2{fill:#333}.credenzeye_svg__st3{fill:#fff}"
        }
      </style>
      <g id='credenzeye_svg__eye'>
        <g id='credenzeye_svg__eyeball'>
          <linearGradient
            id='credenzeye_svg__flashlight_1_'
            gradientUnits='userSpaceOnUse'
            x1={597.597}
            y1={772.574}
            x2={1280.494}
            y2={772.574}
            gradientTransform='matrix(.00362 .5182 -.6791 .00475 1089.486 77.77)'>
            <stop offset={0} stopColor='#fff' />
            <stop offset={0.051} stopColor='#f7f7f7' />
            <stop offset={0.13} stopColor='#e2e2e2' />
            <stop offset={0.227} stopColor='#bebebe' />
            <stop offset={0.337} stopColor='#8e8e8e' />
            <stop offset={0.366} stopColor='gray' />
            <stop offset={0.409} stopColor='#707070' />
            <stop offset={0.512} stopColor='#515151' />
            <stop offset={0.62} stopColor='#393939' />
            <stop offset={0.732} stopColor='#282828' />
            <stop offset={0.854} stopColor='#1d1d1d' />
            <stop offset={1} stopColor='#1a1a1a' />
          </linearGradient>

          <circle
            cx={566.21}
            cy={398.05}
            r={650.55}
            id={props.ids[0]}
            fill='#2fb3ff'
          />
          <circle cx={65.56} cy={397.4} id={props.ids[1]} r={530.72} />
        </g>
      </g>
    </svg>
  );
}

export default SvgCredenzeye;
