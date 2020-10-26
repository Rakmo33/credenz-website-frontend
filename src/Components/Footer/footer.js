import React from 'react';
import classes from './footer.module.css';
import "../ContactComponent/contact.css";
import {Link} from 'react-router-dom';

const footer=()=>{
    return(
    <div className={classes.footer} >
        <div><span className={'footer-font'}>copyright @ PICT IEEE Student Branch</span></div>
        <div><button className={"team btn"}><Link to="/team">OUR TEAM</Link></button></div>
        {/* <div className={classes.social_container}>
            <a href="https://www.facebook.com/learnbuildteach/"
                className={classes.facebook}>
                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://www.instagram.com/learnbuildteach"
                className={classes.instagram}>
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
        </div> */}
    </div>
    );
}

export default footer;
