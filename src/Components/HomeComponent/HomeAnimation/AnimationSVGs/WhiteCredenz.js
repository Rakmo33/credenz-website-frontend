import * as React from "react";
import { useState, useEffect } from 'react';
import './CredenzEye.css';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

function SvgCredenzeye(props) {

  return (
    <svg
      id="CREDENZ-TITLE"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x={0}
      y={0}
      viewBox="0 0 1366 768"
      xmlSpace="preserve"
      enableBackground="new 0 0 1366 768"
      {...props}
    >
      <style>
        {
          ".st0{display:none;stroke:#000000;stroke-miterlimit:10;}.st1{fill:#FFFFFF;stroke:#FFFFFF;stroke-width:5;stroke-miterlimit:10;}.st2{font-family:'SolThin';}.st3{font-size:203.4017px;}"
        }
      </style>
      <rect class="st0" width="1366" height="768"/>
      <text transform="matrix(0.955 0 0 1 148.9996 459.1902)" class="st1 st2 st3">CREDENZ ‘21</text>
    </svg>
  );
}

export default SvgCredenzeye;
