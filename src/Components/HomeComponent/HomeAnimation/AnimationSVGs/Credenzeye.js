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
      let outerr = document.getElementById("eyeball-outer").getAttribute("r");
      let eyeballOuter = document.getElementById("eyeball-outer");
      // let innercx = document.getElementById("eyeball-inner").getAttribute("cx");
      // let innercy = document.getElementById("eyeball-inner").getAttribute("cy");
      // let innerr = document.getElementById("eyeball-inner").getAttribute("r");
      let eyeballInner = document.getElementById("eyeball-inner");
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
        outerposx = 566.21 + xpercentage * outerr * 1.8;
        outerposy = 398.05 + ypercentage * outerr * 1.8;
        innerposx = 565.56 + xpercentage * outerr * 1.8;
        innerposy = 397.4 + ypercentage * outerr * 1.8;
        eyeballOuter.setAttribute("cx", outerposx);
        eyeballOuter.setAttribute("cy", Math.min(outerposy, 419));
        eyeballInner.setAttribute("cx", innerposx);
        eyeballInner.setAttribute("cy", Math.min(innerposy, 419));
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
      x={0}
      y={0}
      viewBox='0 0 1366 768'
      xmlSpace='preserve'
      enableBackground='new 0 0 1366 768'
      {...props}>
      <style>
        {
          ".credenzeye_svg__st1{fill:#020202}.credenzeye_svg__st2{fill:#333}.credenzeye_svg__st3{fill:#fff}"
        }
      </style>
      <g id='credenzeye_svg__credenz'>
        <path
          className='credenzeye_svg__st1'
          d='M210.08 479.54c-4.38 0-8.37-.45-11.85-1.33-6.37-1.62-11.49-4.59-15.24-8.85-3.56-4.05-6.02-9.33-7.3-15.7-.65-3.23-.99-6.62-.99-10.06v-77.24c0-4.88.6-9.46 1.79-13.6 1.33-4.64 3.47-8.68 6.35-12.01 3.75-4.27 8.92-7.22 15.43-8.83 3.75-.93 7.73-1.41 11.8-1.41h62.87v26.03h-64.89c-1.57 0-2.97.2-4.15.58-.39.13-1 .38-1.77 1.15-.09.12-.49.7-.87 2.24-.52 2.14-.78 4.64-.78 7.43V442c0 2.75.27 5.29.79 7.54.42 1.82.92 2.34.94 2.36.45.47 1.12.84 2.04 1.13.94.29 2.25.45 3.8.45h64.89v26.03h-62.86z'
        />
        <path
          className='credenzeye_svg__st1'
          d='M262.95 469.54h-52.87c-3.57 0-6.7-.34-9.4-1.02-4.39-1.12-7.79-3.04-10.19-5.76-2.4-2.73-4.07-6.41-5.01-11.06-.53-2.6-.79-5.3-.79-8.09v-77.24c0-3.97.47-7.57 1.4-10.83.94-3.25 2.37-6 4.3-8.23 2.34-2.66 5.77-4.55 10.28-5.67 2.99-.74 6.12-1.12 9.4-1.12h52.87v6.03h-54.89c-2.63 0-5.05.36-7.25 1.07-2.2.71-4.17 1.97-5.93 3.77-1.52 1.61-2.63 3.88-3.34 6.79-.7 2.92-1.05 6.17-1.05 9.77v74.06c0 3.54.35 6.81 1.05 9.82.7 3.01 1.86 5.35 3.47 7.02s3.67 2.92 6.19 3.72c1.99.62 4.27.93 6.85.93h54.89v6.04zM310.28 433.9v45.65h-25.8V330.53h76.66c3.04 0 6.26.61 9.82 1.87 4.91 1.7 9.03 4.32 12.2 7.77 2.99 3.26 5.29 7.23 6.85 11.83 1.28 3.73 1.93 7.35 1.93 10.74v29.65c0 3.3-.65 6.91-1.93 10.71-1.57 4.54-3.8 8.44-6.67 11.65l-.07.08c-2.5 2.74-5.63 4.98-9.32 6.65-4.46 2.06-8.8 3.12-12.82 3.12h-21.68l69.31 54.89-41.21.08-57.27-45.67zm49.04-35.34c1.98 0 2.74-.24 2.78-.25.42-.14 1.09-.44 1.93-1.43.85-1.01 1.43-2.08 1.75-3.27.15-.62.39-2 .39-4.48v-22.87c0-3.31-.23-4.62-.3-4.94-.27-1.21-.75-2.2-1.52-3.06-.88-.99-1.54-1.27-1.96-1.4-.31-.09-1.24-.31-3.07-.31h-49.04v42h49.04z'
        />
        <path
          className='credenzeye_svg__st1'
          d='M381.96 392.39c0 2.23-.47 4.74-1.41 7.53-1.11 3.22-2.66 5.95-4.65 8.18-1.58 1.74-3.6 3.16-6.06 4.28-3.22 1.49-6.12 2.23-8.69 2.23h-50.41l69.38 54.95-9.06.02-65.58-52.29c-1.06-.8-1.94-1.68-2.64-2.64-.71-.96-1.06-1.87-1.06-2.73 0-.74.2-1.39.61-1.95.7-.92 1.78-1.39 3.25-1.39h53.68c2.4 0 4.36-.25 5.88-.74 2.46-.8 4.6-2.29 6.45-4.46 1.84-2.17 3.11-4.59 3.82-7.25.47-1.86.7-4.18.7-6.97v-22.87c0-3.1-.18-5.45-.53-7.06-.64-2.91-1.92-5.44-3.82-7.57-1.9-2.14-4.08-3.58-6.53-4.32-1.64-.5-3.63-.74-5.97-.74h-59.04v122.98h-5.8V340.53h66.66c1.87 0 4.04.43 6.5 1.3 3.39 1.18 6.12 2.88 8.17 5.11 2.05 2.23 3.63 4.99 4.74 8.27.94 2.73 1.41 5.24 1.41 7.53v29.65zM434.8 479.54c-3.07 0-6.36-.58-9.77-1.73-5.08-1.73-9.25-4.36-12.43-7.83-3.03-3.29-5.28-7.21-6.69-11.63-1.29-4.06-1.92-7.7-1.92-11.12v-81.7c0-4.17.27-7.52.81-10.24 1.2-5.79 3.66-10.74 7.33-14.76 3.75-4.11 8.66-7.01 14.6-8.63 3.47-.92 7.31-1.37 11.5-1.37h63.84v26.03h-64.65c-1.45 0-2.8.2-4.12.61-.74.23-1.31.58-1.86 1.14-.15.15-.63.63-.96 1.91-.46 1.77-.69 4-.69 6.61v22.92h72.28v26.03h-72.28v28.05c0 2.99.23 4.36.34 4.85.33 1.29.84 2.32 1.63 3.22.78.89 1.38 1.16 1.81 1.29.31.09 1.23.31 3.06.31h65.44v26.03H434.8z'
        />
        <path
          className='credenzeye_svg__st1'
          d='M492.06 469.54H434.8c-1.99 0-4.19-.4-6.59-1.21-3.46-1.18-6.21-2.88-8.25-5.11-2.05-2.23-3.56-4.86-4.52-7.9-.97-3.04-1.45-5.73-1.45-8.09v-81.7c0-3.47.2-6.23.61-8.27.82-3.97 2.46-7.3 4.92-9.99 2.46-2.69 5.74-4.6 9.84-5.72 2.58-.68 5.53-1.02 8.87-1.02h53.84v6.03h-54.65c-2.46 0-4.82.36-7.1 1.07s-4.27 1.92-5.97 3.63c-1.7 1.71-2.88 3.86-3.55 6.46-.67 2.6-1.01 5.64-1.01 9.11v32.92h72.28v6.03h-72.28v38.05c0 3.05.2 5.44.61 7.18.7 2.86 1.97 5.35 3.82 7.46 1.84 2.11 3.99 3.54 6.45 4.29 1.64.5 3.63.75 5.97.75h55.44v6.03zM517.78 479.54V330.53h72.44c2.32 0 4.55.17 6.64.49 7.51 1.19 13.63 3.96 18.21 8.26 4.06 3.81 6.88 9.17 8.37 15.92.8 3.61 1.2 7.68 1.2 12.1v76.31c0 3.68-.3 7.06-.9 10.04-1.29 6.32-3.72 11.55-7.23 15.58-3.73 4.29-8.89 7.28-15.34 8.9-3.69.94-7.68 1.42-11.83 1.42h-71.56zm73.45-26.03c1.57 0 3.03-.2 4.33-.59.58-.17 1-.43 1.4-.87.47-.5.86-1.29 1.15-2.32.49-1.76.73-3.88.73-6.31v-78.15c0-2.3-.27-3.73-.49-4.51-.31-1.08-.8-1.98-1.46-2.71-.18-.2-.67-.5-1.52-.76-1.54-.48-3.38-.72-5.46-.72h-46.34v96.95h47.66z'
        />
        <path
          className='credenzeye_svg__st1'
          d='M614.64 443.61c0 3.04-.23 5.73-.7 8.09-.94 4.59-2.59 8.24-4.96 10.97-2.37 2.73-5.78 4.65-10.23 5.76-2.93.74-6.06 1.12-9.4 1.12h-61.56V340.53h62.44c1.81 0 3.51.12 5.09.37 5.5.87 9.81 2.76 12.91 5.67 2.58 2.42 4.39 6.01 5.45 10.78.64 2.91.97 6.23.97 9.95v76.31zm-5.8-.2v-78.15c0-2.79-.29-5.21-.88-7.26-.76-2.6-1.99-4.84-3.68-6.7-1.46-1.61-3.45-2.81-5.96-3.58s-5.31-1.16-8.41-1.16h-56.34v116.95h57.65c2.57 0 4.98-.34 7.23-1.02s4.18-1.88 5.78-3.58c1.61-1.71 2.78-3.88 3.5-6.51.75-2.64 1.11-5.64 1.11-8.99zM669.78 479.56c-3.07 0-6.36-.58-9.77-1.73-5.08-1.73-9.25-4.36-12.43-7.83-3.03-3.3-5.28-7.21-6.69-11.63-1.29-4.06-1.92-7.7-1.92-11.12v-81.7c0-4.17.26-7.52.81-10.24 1.2-5.79 3.66-10.74 7.33-14.76 3.75-4.11 8.66-7.01 14.59-8.63 3.47-.92 7.32-1.37 11.5-1.37h63.83v26.03h-64.65c-1.45 0-2.8.2-4.12.61-.74.23-1.31.58-1.86 1.13-.15.16-.63.63-.96 1.91-.46 1.78-.69 4-.69 6.61v22.92h72.28v26.03h-72.28v28.05c0 2.99.23 4.36.34 4.85.33 1.3.85 2.32 1.63 3.23.78.89 1.38 1.16 1.81 1.29.31.09 1.23.31 3.06.31h65.44v26.03h-67.25z'
        />
        <path
          className='credenzeye_svg__st1'
          d='M727.04 469.56h-57.26c-1.99 0-4.19-.4-6.59-1.21-3.46-1.18-6.21-2.88-8.25-5.11-2.05-2.23-3.56-4.86-4.52-7.9-.97-3.04-1.45-5.73-1.45-8.09v-81.7c0-3.47.2-6.23.61-8.27.82-3.97 2.46-7.3 4.92-9.99 2.46-2.69 5.74-4.6 9.84-5.72 2.58-.68 5.53-1.02 8.87-1.02h53.83v6.03h-54.65c-2.46 0-4.82.36-7.1 1.07s-4.27 1.92-5.96 3.63c-1.7 1.71-2.88 3.86-3.55 6.46-.67 2.6-1.01 5.64-1.01 9.11v32.92h72.28v6.03h-72.28v38.05c0 3.05.2 5.44.61 7.18.7 2.86 1.97 5.35 3.82 7.46s3.99 3.54 6.45 4.29c1.64.5 3.63.75 5.96.75h55.44v6.03zM843.81 481.05c-3.44 0-6.7-1.26-9.41-3.65a18.234 18.234 0 01-4.29-5.63l-52.7-84.64v92.34h-25.8V343.13c0-3.26.83-6.14 2.46-8.56 2.36-3.51 6.27-5.53 10.72-5.53 3.41 0 6.61 1.17 9.27 3.38 1.81 1.51 3.33 3.43 4.5 5.72l52.7 84.78v-92.28h25.8v136.23c0 9.75-6.87 14.18-13.25 14.18z'
        />
        <path
          className='credenzeye_svg__st1'
          d='M847.06 466.88c0 2.78-1.08 4.18-3.25 4.18-1 0-1.93-.39-2.81-1.16-.88-.77-1.58-1.75-2.11-2.92L767.4 352.15v117.32h-5.8V343.13c0-1.24.25-2.23.75-2.97.5-.74 1.31-1.11 2.43-1.11 1.06 0 2.01.35 2.87 1.07.85.71 1.57 1.68 2.16 2.92l71.45 114.92V340.65h5.8v126.23zM888.95 477.74c-3.45 0-5.86-.25-7.81-.8-3.2-.9-5.92-2.84-7.89-5.61a15.13 15.13 0 01-2.81-8.83c0-3.18 1-6.42 2.97-9.63l62.79-98.1h-64.18v-26.03h80.87c3.45 0 5.86.25 7.81.8 3.22.91 5.99 2.91 8.01 5.79l.09.12c1.59 2.34 2.44 5.1 2.44 7.97 0 3.15-1.03 6.43-3.14 10.03l-.19.31-62.43 97.96h65.05v26.03h-81.58z'
        />
        <path
          className='credenzeye_svg__st1'
          d='M960.53 467.74h-71.58c-2.4 0-4.1-.14-5.09-.42-1-.28-1.82-.88-2.46-1.78-.64-.9-.97-1.92-.97-3.04 0-1.31.5-2.78 1.49-4.4l72.54-113.33h-72.45v-6.03h70.87c2.4 0 4.1.14 5.09.42 1 .28 1.84.92 2.55 1.92.47.69.7 1.47.7 2.34 0 1.31-.59 2.97-1.76 4.97L887.24 461.7h73.28v6.04zM1033.17 369.93c-3.85 0-7.38-1.4-10.22-4.06-2.97-2.79-4.61-6.63-4.61-10.81 0-1.37.08-2.41.26-3.37l.12-.63.2-.61c.37-1.12.66-2.04.87-2.77l.1-.32 5.5-16.83h26.69l-5.55 17.59c.98 2.07 1.47 4.36 1.47 6.84 0 4.06-1.54 7.83-4.33 10.63-2.8 2.8-6.53 4.34-10.5 4.34z'
        />
        <path
          className='credenzeye_svg__st1'
          d='M1038.44 340.53l-2.99 9.46c.7.5 1.3 1.16 1.8 1.97s.75 1.81.75 3c0 1.44-.47 2.63-1.41 3.56-.94.94-2.08 1.41-3.42 1.41-1.29 0-2.42-.45-3.38-1.36-.97-.91-1.45-2.08-1.45-3.51 0-.69.03-1.19.09-1.5.41-1.25.73-2.28.97-3.09l3.25-9.93h5.79zM1058.41 479.54v-53.53c0-3.54.71-7.34 2.11-11.31a32.12 32.12 0 016.68-11.15c3.13-3.4 7.2-6.04 12.1-7.82 3.74-1.35 7-2 10.01-2h32.58c2.25 0 4.15-.22 5.66-.67.88-.26 1.29-.61 1.54-.88.52-.56.95-1.42 1.27-2.56.32-1.16.49-2.71.49-4.52v-18.44c0-2.54-.23-4.72-.69-6.46-.34-1.3-.79-1.76-.95-1.92-.48-.5-1.08-.84-1.85-1.09-1.37-.43-2.7-.65-4.08-.65h-64.89v-26.03h62.87c4.38 0 8.37.45 11.85 1.33 6.41 1.61 11.57 4.59 15.33 8.85 2.87 3.32 4.98 7.32 6.35 11.97 1.23 4.19 1.86 8.79 1.86 13.7v16.54c0 4.48-.4 8.59-1.2 12.19-1.5 6.71-4.34 12.05-8.45 15.91-3.01 2.8-6.9 5-11.59 6.57-4.34 1.45-8.81 2.19-13.27 2.19h-31.18c-2.2 0-3 .23-3.03.24-.38.12-1.04.4-1.92 1.39-.77.87-1.26 1.85-1.53 3.1-.06.29-.29 1.6-.29 4.92v24.09h72.98v26.03h-98.76z'
        />
        <path
          className='credenzeye_svg__st1'
          d='M1147.19 469.54h-78.78v-43.53c0-2.41.51-5.07 1.54-7.98 1.02-2.91 2.56-5.48 4.61-7.7 2.05-2.23 4.77-3.96 8.17-5.2 2.58-.93 4.77-1.39 6.59-1.39h32.58c3.22 0 6.04-.36 8.47-1.07 2.43-.71 4.45-1.94 6.06-3.68 1.61-1.74 2.79-3.94 3.56-6.61.58-2.11.88-4.53.88-7.26v-18.44c0-3.41-.34-6.41-1.01-8.99-.67-2.58-1.83-4.7-3.47-6.38-1.64-1.68-3.63-2.89-5.97-3.63-2.34-.75-4.71-1.12-7.11-1.12h-54.89v-6.03h52.87c3.57 0 6.7.34 9.4 1.02 4.45 1.12 7.87 3.04 10.27 5.76 1.87 2.17 3.29 4.9 4.26 8.18s1.45 6.91 1.45 10.87v16.54c0 3.78-.32 7.13-.97 10.04-1.05 4.71-2.9 8.3-5.53 10.78-1.93 1.8-4.57 3.25-7.9 4.37-3.34 1.12-6.7 1.67-10.1 1.67h-31.18c-2.46 0-4.42.22-5.88.65-2.46.75-4.64 2.19-6.54 4.33-1.9 2.14-3.18 4.67-3.82 7.59-.35 1.62-.53 3.97-.53 7.08v34.09h72.98v6.04zM1172.5 330.53h25.8v149.01h-25.8z'
        />
        <path
          className='credenzeye_svg__st1'
          d='M1188.3 469.54h-5.8V340.53h5.8v129.01zM536.58 348.78h62.1v108.9h-62.1z'
        />
        <g>
          <path
            className='credenzeye_svg__st2'
            d='M205.08 472.54c-4.38 0-8.37-.45-11.85-1.33-6.37-1.62-11.49-4.59-15.24-8.85-3.56-4.05-6.02-9.33-7.3-15.7-.65-3.23-.99-6.62-.99-10.06v-77.24c0-4.88.6-9.46 1.79-13.6 1.33-4.64 3.47-8.68 6.35-12.01 3.75-4.27 8.92-7.22 15.43-8.83 3.75-.93 7.73-1.41 11.8-1.41h62.87v26.03h-64.89c-1.57 0-2.97.2-4.15.58-.39.13-1 .38-1.77 1.15-.09.12-.49.7-.87 2.24-.52 2.14-.78 4.64-.78 7.43V435c0 2.75.27 5.29.79 7.54.42 1.82.92 2.34.94 2.36.45.47 1.12.84 2.04 1.13.94.29 2.25.45 3.8.45h64.89v26.03h-62.86z'
          />
          <path
            className='credenzeye_svg__st2'
            d='M257.95 462.54h-52.87c-3.57 0-6.7-.34-9.4-1.02-4.39-1.12-7.79-3.04-10.19-5.76-2.4-2.73-4.07-6.41-5.01-11.06-.53-2.6-.79-5.3-.79-8.09v-77.24c0-3.97.47-7.57 1.4-10.83.94-3.25 2.37-6 4.3-8.23 2.34-2.66 5.77-4.55 10.28-5.67 2.99-.74 6.12-1.12 9.4-1.12h52.87v6.03h-54.89c-2.63 0-5.05.36-7.25 1.07-2.2.71-4.17 1.97-5.93 3.77-1.52 1.61-2.63 3.88-3.34 6.79-.7 2.92-1.05 6.17-1.05 9.77v74.06c0 3.54.35 6.81 1.05 9.82.7 3.01 1.86 5.35 3.47 7.02s3.67 2.92 6.19 3.72c1.99.62 4.27.93 6.85.93h54.89v6.04zM305.28 426.9v45.65h-25.8V323.53h76.66c3.04 0 6.26.61 9.82 1.87 4.91 1.7 9.03 4.32 12.2 7.77 2.99 3.26 5.29 7.23 6.85 11.83 1.28 3.73 1.93 7.35 1.93 10.74v29.65c0 3.3-.65 6.91-1.93 10.71-1.57 4.54-3.8 8.44-6.67 11.65l-.07.08c-2.5 2.74-5.63 4.98-9.32 6.65-4.46 2.06-8.8 3.12-12.82 3.12h-21.68l69.31 54.89-41.21.08-57.27-45.67zm49.04-35.34c1.98 0 2.74-.24 2.78-.25.42-.14 1.09-.44 1.93-1.43.85-1.01 1.43-2.08 1.75-3.27.15-.62.39-2 .39-4.48v-22.87c0-3.31-.23-4.62-.3-4.94-.27-1.21-.75-2.2-1.52-3.06-.88-.99-1.54-1.27-1.96-1.4-.31-.09-1.24-.31-3.07-.31h-49.04v42h49.04z'
          />
          <path
            className='credenzeye_svg__st2'
            d='M376.96 385.39c0 2.23-.47 4.74-1.41 7.53-1.11 3.22-2.66 5.95-4.65 8.18-1.58 1.74-3.6 3.16-6.06 4.28-3.22 1.49-6.12 2.23-8.69 2.23h-50.41l69.38 54.95-9.06.02-65.58-52.29c-1.06-.8-1.94-1.68-2.64-2.64-.71-.96-1.06-1.87-1.06-2.73 0-.74.2-1.39.61-1.95.7-.92 1.78-1.39 3.25-1.39h53.68c2.4 0 4.36-.25 5.88-.74 2.46-.8 4.6-2.29 6.45-4.46 1.84-2.17 3.11-4.59 3.82-7.25.47-1.86.7-4.18.7-6.97v-22.87c0-3.1-.18-5.45-.53-7.06-.64-2.91-1.92-5.44-3.82-7.57-1.9-2.14-4.08-3.58-6.53-4.32-1.64-.5-3.63-.74-5.97-.74h-59.04v122.98h-5.8V333.53h66.66c1.87 0 4.04.43 6.5 1.3 3.39 1.18 6.12 2.88 8.17 5.11 2.05 2.23 3.63 4.99 4.74 8.27.94 2.73 1.41 5.24 1.41 7.53v29.65zM429.8 472.54c-3.07 0-6.36-.58-9.77-1.73-5.08-1.73-9.25-4.36-12.43-7.83-3.03-3.29-5.28-7.21-6.69-11.63-1.29-4.06-1.92-7.7-1.92-11.12v-81.7c0-4.17.27-7.52.81-10.24 1.2-5.79 3.66-10.74 7.33-14.76 3.75-4.11 8.66-7.01 14.6-8.63 3.47-.92 7.31-1.37 11.5-1.37h63.84v26.03h-64.65c-1.45 0-2.8.2-4.12.61-.74.23-1.31.58-1.86 1.14-.15.15-.63.63-.96 1.91-.46 1.77-.69 4-.69 6.61v22.92h72.28v26.03h-72.28v28.05c0 2.99.23 4.36.34 4.85.33 1.29.84 2.32 1.63 3.22.78.89 1.38 1.16 1.81 1.29.31.09 1.23.31 3.06.31h65.44v26.03H429.8z'
          />
          <path
            className='credenzeye_svg__st2'
            d='M487.06 462.54H429.8c-1.99 0-4.19-.4-6.59-1.21-3.46-1.18-6.21-2.88-8.25-5.11-2.05-2.23-3.56-4.86-4.52-7.9-.97-3.04-1.45-5.73-1.45-8.09v-81.7c0-3.47.2-6.23.61-8.27.82-3.97 2.46-7.3 4.92-9.99 2.46-2.69 5.74-4.6 9.84-5.72 2.58-.68 5.53-1.02 8.87-1.02h53.84v6.03h-54.65c-2.46 0-4.82.36-7.1 1.07s-4.27 1.92-5.97 3.63c-1.7 1.71-2.88 3.86-3.55 6.46-.67 2.6-1.01 5.64-1.01 9.11v32.92h72.28v6.03h-72.28v38.05c0 3.05.2 5.44.61 7.18.7 2.86 1.97 5.35 3.82 7.46 1.84 2.11 3.99 3.54 6.45 4.29 1.64.5 3.63.75 5.97.75h55.44v6.03zM512.78 472.54V323.53h72.44c2.32 0 4.55.17 6.64.49 7.51 1.19 13.63 3.96 18.21 8.26 4.06 3.81 6.88 9.17 8.37 15.92.8 3.61 1.2 7.68 1.2 12.1v76.31c0 3.68-.3 7.06-.9 10.04-1.29 6.32-3.72 11.55-7.23 15.58-3.73 4.29-8.89 7.28-15.34 8.9-3.69.94-7.68 1.42-11.83 1.42h-71.56zm73.45-26.03c1.57 0 3.03-.2 4.33-.59.58-.17 1-.43 1.4-.87.47-.5.86-1.29 1.15-2.32.49-1.76.73-3.88.73-6.31v-78.15c0-2.3-.27-3.73-.49-4.51-.31-1.08-.8-1.98-1.46-2.71-.18-.2-.67-.5-1.52-.76-1.54-.48-3.38-.72-5.46-.72h-46.34v96.95h47.66z'
          />
          <path
            className='credenzeye_svg__st2'
            d='M609.64 436.61c0 3.04-.23 5.73-.7 8.09-.94 4.59-2.59 8.24-4.96 10.97-2.37 2.73-5.78 4.65-10.23 5.76-2.93.74-6.06 1.12-9.4 1.12h-61.56V333.53h62.44c1.81 0 3.51.12 5.09.37 5.5.87 9.81 2.76 12.91 5.67 2.58 2.42 4.39 6.01 5.45 10.78.64 2.91.97 6.23.97 9.95v76.31zm-5.8-.2v-78.15c0-2.79-.29-5.21-.88-7.26-.76-2.6-1.99-4.84-3.68-6.7-1.46-1.61-3.45-2.81-5.96-3.58s-5.31-1.16-8.41-1.16h-56.34v116.95h57.65c2.57 0 4.98-.34 7.23-1.02s4.18-1.88 5.78-3.58c1.61-1.71 2.78-3.88 3.5-6.51.75-2.64 1.11-5.64 1.11-8.99zM664.78 472.56c-3.07 0-6.36-.58-9.77-1.73-5.08-1.73-9.25-4.36-12.43-7.83-3.03-3.3-5.28-7.21-6.69-11.63-1.29-4.06-1.92-7.7-1.92-11.12v-81.7c0-4.17.26-7.52.81-10.24 1.2-5.79 3.66-10.74 7.33-14.76 3.75-4.11 8.66-7.01 14.59-8.63 3.47-.92 7.32-1.37 11.5-1.37h63.83v26.03h-64.65c-1.45 0-2.8.2-4.12.61-.74.23-1.31.58-1.86 1.13-.15.16-.63.63-.96 1.91-.46 1.78-.69 4-.69 6.61v22.92h72.28v26.03h-72.28v28.05c0 2.99.23 4.36.34 4.85.33 1.3.85 2.32 1.63 3.23.78.89 1.38 1.16 1.81 1.29.31.09 1.23.31 3.06.31h65.44v26.03h-67.25z'
          />
          <path
            className='credenzeye_svg__st2'
            d='M722.04 462.56h-57.26c-1.99 0-4.19-.4-6.59-1.21-3.46-1.18-6.21-2.88-8.25-5.11-2.05-2.23-3.56-4.86-4.52-7.9-.97-3.04-1.45-5.73-1.45-8.09v-81.7c0-3.47.2-6.23.61-8.27.82-3.97 2.46-7.3 4.92-9.99 2.46-2.69 5.74-4.6 9.84-5.72 2.58-.68 5.53-1.02 8.87-1.02h53.83v6.03h-54.65c-2.46 0-4.82.36-7.1 1.07s-4.27 1.92-5.96 3.63c-1.7 1.71-2.88 3.86-3.55 6.46-.67 2.6-1.01 5.64-1.01 9.11v32.92h72.28v6.03h-72.28v38.05c0 3.05.2 5.44.61 7.18.7 2.86 1.97 5.35 3.82 7.46s3.99 3.54 6.45 4.29c1.64.5 3.63.75 5.96.75h55.44v6.03zM838.81 474.05c-3.44 0-6.7-1.26-9.41-3.65a18.234 18.234 0 01-4.29-5.63l-52.7-84.64v92.34h-25.8V336.13c0-3.26.83-6.14 2.46-8.56 2.36-3.51 6.27-5.53 10.72-5.53 3.41 0 6.61 1.17 9.27 3.38 1.81 1.51 3.33 3.43 4.5 5.72l52.7 84.78v-92.28h25.8v136.23c0 9.75-6.87 14.18-13.25 14.18z'
          />
          <path
            className='credenzeye_svg__st2'
            d='M842.06 459.88c0 2.78-1.08 4.18-3.25 4.18-1 0-1.93-.39-2.81-1.16-.88-.77-1.58-1.75-2.11-2.92L762.4 345.15v117.32h-5.8V336.13c0-1.24.25-2.23.75-2.97.5-.74 1.31-1.11 2.43-1.11 1.06 0 2.01.35 2.87 1.07.85.71 1.57 1.68 2.16 2.92l71.45 114.92V333.65h5.8v126.23zM883.95 470.74c-3.45 0-5.86-.25-7.81-.8-3.2-.9-5.92-2.84-7.89-5.61a15.13 15.13 0 01-2.81-8.83c0-3.18 1-6.42 2.97-9.63l62.79-98.1h-64.18v-26.03h80.87c3.45 0 5.86.25 7.81.8 3.22.91 5.99 2.91 8.01 5.79l.09.12c1.59 2.34 2.44 5.1 2.44 7.97 0 3.15-1.03 6.43-3.14 10.03l-.19.31-62.43 97.96h65.05v26.03h-81.58z'
          />
          <path
            className='credenzeye_svg__st2'
            d='M955.53 460.74h-71.58c-2.4 0-4.1-.14-5.09-.42-1-.28-1.82-.88-2.46-1.78-.64-.9-.97-1.92-.97-3.04 0-1.31.5-2.78 1.49-4.4l72.54-113.33h-72.45v-6.03h70.87c2.4 0 4.1.14 5.09.42 1 .28 1.84.92 2.55 1.92.47.69.7 1.47.7 2.34 0 1.31-.59 2.97-1.76 4.97L882.24 454.7h73.28v6.04zM1028.17 362.93c-3.85 0-7.38-1.4-10.22-4.06-2.97-2.79-4.61-6.63-4.61-10.81 0-1.37.08-2.41.26-3.37l.12-.63.2-.61c.37-1.12.66-2.04.87-2.77l.1-.32 5.5-16.83h26.69l-5.55 17.59c.98 2.07 1.47 4.36 1.47 6.84 0 4.06-1.54 7.83-4.33 10.63-2.8 2.8-6.53 4.34-10.5 4.34z'
          />
          <path
            className='credenzeye_svg__st2'
            d='M1033.44 333.53l-2.99 9.46c.7.5 1.3 1.16 1.8 1.97s.75 1.81.75 3c0 1.44-.47 2.63-1.41 3.56-.94.94-2.08 1.41-3.42 1.41-1.29 0-2.42-.45-3.38-1.36-.97-.91-1.45-2.08-1.45-3.51 0-.69.03-1.19.09-1.5.41-1.25.73-2.28.97-3.09l3.25-9.93h5.79zM1053.41 472.54v-53.53c0-3.54.71-7.34 2.11-11.31a32.12 32.12 0 016.68-11.15c3.13-3.4 7.2-6.04 12.1-7.82 3.74-1.35 7-2 10.01-2h32.58c2.25 0 4.15-.22 5.66-.67.88-.26 1.29-.61 1.54-.88.52-.56.95-1.42 1.27-2.56.32-1.16.49-2.71.49-4.52v-18.44c0-2.54-.23-4.72-.69-6.46-.34-1.3-.79-1.76-.95-1.92-.48-.5-1.08-.84-1.85-1.09-1.37-.43-2.7-.65-4.08-.65h-64.89v-26.03h62.87c4.38 0 8.37.45 11.85 1.33 6.41 1.61 11.57 4.59 15.33 8.85 2.87 3.32 4.98 7.32 6.35 11.97 1.23 4.19 1.86 8.79 1.86 13.7v16.54c0 4.48-.4 8.59-1.2 12.19-1.5 6.71-4.34 12.05-8.45 15.91-3.01 2.8-6.9 5-11.59 6.57-4.34 1.45-8.81 2.19-13.27 2.19h-31.18c-2.2 0-3 .23-3.03.24-.38.12-1.04.4-1.92 1.39-.77.87-1.26 1.85-1.53 3.1-.06.29-.29 1.6-.29 4.92v24.09h72.98v26.03h-98.76z'
          />
          <path
            className='credenzeye_svg__st2'
            d='M1142.19 462.54h-78.78v-43.53c0-2.41.51-5.07 1.54-7.98 1.02-2.91 2.56-5.48 4.61-7.7 2.05-2.23 4.77-3.96 8.17-5.2 2.58-.93 4.77-1.39 6.59-1.39h32.58c3.22 0 6.04-.36 8.47-1.07 2.43-.71 4.45-1.94 6.06-3.68 1.61-1.74 2.79-3.94 3.56-6.61.58-2.11.88-4.53.88-7.26v-18.44c0-3.41-.34-6.41-1.01-8.99-.67-2.58-1.83-4.7-3.47-6.38-1.64-1.68-3.63-2.89-5.97-3.63-2.34-.75-4.71-1.12-7.11-1.12h-54.89v-6.03h52.87c3.57 0 6.7.34 9.4 1.02 4.45 1.12 7.87 3.04 10.27 5.76 1.87 2.17 3.29 4.9 4.26 8.18s1.45 6.91 1.45 10.87v16.54c0 3.78-.32 7.13-.97 10.04-1.05 4.71-2.9 8.3-5.53 10.78-1.93 1.8-4.57 3.25-7.9 4.37-3.34 1.12-6.7 1.67-10.1 1.67h-31.18c-2.46 0-4.42.22-5.88.65-2.46.75-4.64 2.19-6.54 4.33-1.9 2.14-3.18 4.67-3.82 7.59-.35 1.62-.53 3.97-.53 7.08v34.09h72.98v6.04zM1167.5 323.53h25.8v149.01h-25.8z'
          />
          <path
            className='credenzeye_svg__st2'
            d='M1183.3 462.54h-5.8V333.53h5.8v129.01zM531.58 341.78h62.1v108.9h-62.1z'
          />
        </g>
      </g>
      <g id='credenzeye_svg__eye'>
        <ellipse
          className='credenzeye_svg__st3'
          cx={564.76}
          cy={397.07}
          rx={47.68}
          ry={49.44}
        />
        <defs>
          <filter
            id='credenzeye_svg__Adobe_OpacityMaskFilter'
            filterUnits='userSpaceOnUse'
            x={517.08}
            y={347.64}
            width={95.36}
            height={98.87}>
            <feColorMatrix
              values='-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0'
              colorInterpolationFilters='sRGB'
              result='source'
            />
          </filter>
        </defs>
        <mask
          maskUnits='userSpaceOnUse'
          x={517.08}
          y={347.64}
          width={95.36}
          height={98.87}
          id='credenzeye_svg__SVGID_1_'>
          <g filter='url(#credenzeye_svg__Adobe_OpacityMaskFilter)'>
            <image
              width={415}
              height={429}
              xlinkHref='data:image/jpeg;base64,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 +Xc6+Xc6+Xc6+Xc6+Xc6+Xc6+Xc6+Xc6+Xc6+Xc6+Xc6+Xc6+Xc6+Xc6+Xc6+Xc6+Xc6+Xc6+Xc6 +Xc6+Xc6+Xc6+Xc6+Xc6+Xc6+Xc6+Xc6+Xc6+Xc6+Xc6+Xc6+Xc6+Xc6+Xc6+Xc6+Xc6+Xc6+Xc6 +Xc6+Xc6+Xc6+Xc6+Xc6+Xc6+Xc6+Xc6+Xc6+8OoOfe0GuxWrDuyEJ8rWteK/q3l/VvLaueCMJ8I x3QjrsPb9Qc+9gAStIzu6aqnNkzTJqnCbqAtKkLWpCFUEaoLapC2qQnKgJ2mCepk7VOareK9oiCP Z9Qc+9bXTbcsVzjhjVAUepATNWE1WgJuvC0gBawghDC/hhGGEYYW0ILaAFvXhO1oKeqwVIqQpNOE /WuNnfTbQ+w6g596mup2Mau3cMSpAUarATFcAmoICbhgLSMAtWAEGgg2F+QvyF+QvwF/rCLQRYBW 0YFORAU7BBT9cCpNYCpdSCpNbu2dtdtT63UHPvTYiuOmFVKJWAKPXgJmEAm4wC1ZAQ0AWB6eEdQV syCnIwKehgqRXgqXWAqbVJ+I4yfV6g596IBJh12zhhVYCi14CjwgE1GAWjQCAA9iQCtmgU7GBT8M FSq8FTawFTK7bQkHU+n1Bz70NNNtzArSTBrgFFggJiKAm2QEAB7UgFbtAp+KCpUEFTa4FT6wg76b abel1Bz7z6abb7V1aoNeAosMAMxwFroB7nbQFPRwVKhgqdXgqyrE43s3t6PUHPvNpqd9q2uUCAAI sQAMsgAage7IBTrIIlRARPgAizrVvptpt6HUHPvKASa2AdjXwcCJFADLIAAx70jKdaBEuKCLCFkW cAgkEHz9Qc+8tfELm9bBwIcXAYZAAGPfkZTzQImRcixg5FjDLe3n6g595IzBd3rIOBBi4EdnA1GB 8BsMiQzkTouRZwsiWwWnPN1Bz7xAJNVCVfEwIrGBprgfBb65EpjIsIuRawltqddvL1Bz7xr45ccr ImBCj4DLeB8I7pkTI+RZxMixjFvfy9Qc+8NdTttURMCvjYEZrA1GB8IRkSWsiwj5FtEyN9Dpt5Oo OfeFex/scq42BCZwGtMD4Z3XImM5FnGyLJgtueTqDnyAyaeMq5jAjN4AGB8MRkSW8ixYyLiNwIwf HqDnyjN/t2pj4EFrAZ1wPiHdcic1kW0fIlt/h7x6g58qpn9b1bOBDbwNBgfEbDIlt5FozkWzP538 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'
              transform='matrix(.24 0 0 .24 515.04 345.6)'
              overflow='visible'
            />
          </g>
        </mask>
        <g opacity={0.75} mask='url(#credenzeye_svg__SVGID_1_)'>
          <ellipse
            className='credenzeye_svg__st3'
            cx={564.76}
            cy={397.07}
            rx={47.68}
            ry={49.44}
          />
        </g>
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
          {/* <path
            id="credenzeye_svg__flashlight"
            fill="url(#credenzeye_svg__flashlight_1_)"
            d="M584.28 391.56l53.66 352.89-136.9.96 45.8-354.18z"
          /> */}
          <circle
            cx={566.21}
            cy={398.05}
            r={22.55}
            id='eyeball-outer'
            fill='#29abe2'
          />
          <circle cx={565.56} cy={397.4} id='eyeball-inner' r={18.72} />
        </g>
        <ellipse
          className='credenzeye_svg__st2'
          cx={564.76}
          cy={351.08}
          rx={47.68}
          ry={16.56}
        />
      </g>
    </svg>
  );
}

export default SvgCredenzeye;
