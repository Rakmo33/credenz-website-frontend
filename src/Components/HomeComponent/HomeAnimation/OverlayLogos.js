import React from 'react';
import './OverlayLogos.css';

function OverlayLogos() {
  const clickHandler = () => {
    console.log("Hovered on logo")
    window.location.reload();
  }
  return(
    <div>
      <img className="sizing zoomInDown" onClick={()=>clickHandler()} src={require('../../../assests/img/c-live.png')}/>
    </div>
  );
}

export default OverlayLogos;