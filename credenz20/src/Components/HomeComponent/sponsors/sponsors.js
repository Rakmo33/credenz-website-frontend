import React from "react";
import classes from './sponsors.module.css';
const sponsors =(props)=>{
    return(
        <div>Sponsors of credenz
            <section className={"customer-logos slider"}>
                <div className={"classes.slick-slide"}><img src={require('./img/aarnell.png')} /></div>
                <div className={"classes.slick-slide"}><img src={require("./img/avaya.jpg")} /></div>
                <div className={"classess.slick-slide"}><img src={require("./img/Byju's2.jpg")}/></div>
                <div className="slide"><img src={require("./img/codechef.jpg")}/></div>
                <div className="slide"><img src={require("./img/c3.jpg")}/></div>
                <div className="slide"><img src={require("./img/finiq2.png")}/></div>
                <div className="slide"><img src={require("./img/ims2.jpg")}/></div>
                <div className="slide"><img src={require("./img/interview3.jpg")}/></div>
                <div className="slide"><img src={require("./img/tcs.png")}/></div>
            </section>
        </div>
    );
}

export default sponsors;