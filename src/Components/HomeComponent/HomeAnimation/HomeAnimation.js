import React, { useState, useEffect, Component } from "react";
import './HomeAnimation.css';
import EyeDea21 from './AnimationSVGs/EyeDea21';
import EyeDea20 from './AnimationSVGs/EyeDea20';
import OverlayLogos from './OverlayLogos';

const HomeAnimation = (props) =>{  
    const [showbg, setShowbg] = useState(false);
    const [darken, setDarken] = useState(false);
    const [mechanicalEye, showMechanicalEye] = useState(false);
    const [showLogoTrail, setShowLogoTrail] = useState(false);
    // let showLogoTrail = false;
    useEffect(()=>{
        if(mechanicalEye === true){
            console.log("mechanical eye starting")
            setTimeout(()=>{
                setShowLogoTrail(true)
                console.log("loading Logo trail")
            }, 9000)
        }
    }, [mechanicalEye])

    return(
        <div className="anim">
            <iframe height="100%" width="100%" loading="lazy" frameBorder="0" src="https://yash-567.github.io/background-iframe/" className={`anim-iframe ${showbg && 'show'} `}></iframe>
            <div className={`anim-overlay-logos`}>
                {showLogoTrail ? <OverlayLogos trigger={mechanicalEye}/> : null}
            </div>
            <div className={`anim-overlay-lower ${mechanicalEye && 'hide-now'} ${darken && 'darken'}`}>
                <EyeDea20 showbackg={setShowbg} darken={setDarken} triggered={mechanicalEye}/>
            </div>
            <div className={`anim-overlay-upper ${mechanicalEye && 'vanish'}`}>
                <EyeDea21 mechanicalEye={showMechanicalEye} />
            </div>
        </div>
    );
}

export default HomeAnimation;