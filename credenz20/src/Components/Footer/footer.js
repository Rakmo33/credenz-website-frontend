import React from 'react';
import classes from './footer.module.css';

const footer=()=>{
    return(
    <div className={classes.footer}>
        <div><h5 className={'mt-1'}>copyright @ PICT IEEE Student Branch</h5></div>
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
