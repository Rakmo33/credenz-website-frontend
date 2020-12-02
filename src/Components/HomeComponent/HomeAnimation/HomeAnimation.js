import React, { useState, useEffect, Component } from "react";
import './HomeAnimation.css';
import './RadarAnimation.css';
// import CredenzEye from './AnimationSVGs/Credenzeye';
// import WhiteCredenz from './AnimationSVGs/WhiteCredenz';

const Homeanimation = (props) =>{  
    const [hidden, setHidden] = useState(true);
    // useEffect(()=>{
    //     let mouseCursor = document.querySelector("#monitor")
    //     window.addEventListener('mousemove', (e)=>{
    //         mouseCursor.style.top = e.pageY + "px";
    //         mouseCursor.style.left = e.pageX + "px";
    //     })
    //     return ()=>{
    //         window.removeEventListener("mousemove")
    //     };
    // }, [])

    return(
        <div className="anim">
            <iframe height="100%" width="100%" frameBorder="0" src="http://localhost:1234/" className={`anim-iframe ${hidden && 'anim-iframe-before'}`}></iframe>
            <div className={`anim-text-container ${hidden && 'anim-text-container-before'}`}>
                <img src={require("../../../assests/img/CREDENZ'21.png")} className="anim-text"></img>
            </div>
            <div className={`anim-logo-container monitor ${hidden && 'anim-logo-container-before'}`}>
                    <div className={`scan ${!hidden && 'scan-hidden'}`}></div>
                    <div className={`screen ${!hidden && 'screen-hidden'}`}>
                    <img src={require('../../../assests/img/crewhite.png')} className={`anim-logo ${hidden && 'anim-logo-before'}`} onClick={()=>setHidden(!hidden)}></img>

                    </div>
            </div>    
        </div>
    );
}

export default Homeanimation;