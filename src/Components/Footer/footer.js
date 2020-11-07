import React from 'react';
import classes from './footer.module.css';
import "../ContactComponent/contact.css";
import {Link} from 'react-router-dom';

const footer=()=>{
    return(
    <div className={classes.footer} >
        <div><span className={'footer-font'}>copyright @ PICT IEEE Student Branch</span></div>
        <div>
            <div className={classes.social}>
            <a className={classes.iconfb} href="#"> <i className={"fa fa-facebook"}></i></a>
            <a className={classes.iconlink} href="#"> <i className={"fa fa-linkedin"}></i></a>
            <a className={classes.iconinsta} href="#"> <i className={"fa fa-instagram"}></i></a>
            </div>
            <Link to="/team"><button className={"team btn"}>OUR TEAM</button></Link>
        </div>
    </div>
    );
}

export default footer;
