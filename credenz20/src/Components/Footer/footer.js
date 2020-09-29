import React from 'react';
import classes from './footer.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons';

const footer=()=>{
    return(
    <div className={classes.footer}>
        <div><h5 className={'mt-1'}>copyright @ PISB</h5></div>
        <div className={classes.social_container}>
            <a href="https://www.facebook.com/learnbuildteach/"
                className={classes.facebook}>
                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://www.instagram.com/learnbuildteach"
                className={classes.instagram}>
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
        </div>
    </div>
    );
}

export default footer;
