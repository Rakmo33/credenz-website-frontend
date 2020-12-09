import React from 'react';
import classes from './footer.module.css';
import "../ContactComponent/contact.css";
import {Link} from 'react-router-dom';
import {Row, Col, Container} from 'react-bootstrap';

const footer=()=>{
    return(
    <div className={classes.footer} >
        <Container style={{textAlign:"center"}}>
        <Row>
            <span className={'footer-font'}>copyright @ PICT IEEE Student Branch | Developed with &#9829; by PISB &nbsp; <Link to="/team"><span style={{color:"#6eabce"}}> Web Team</span></Link></span>
        </Row>
        
        <Row>
            <div className={classes.social}>
            <a className={classes.iconfb} href="#"> <i className={"fa fa-facebook"}></i></a>
            <a className={classes.iconlink} href="#"> <i className={"fa fa-linkedin"}></i></a>
            <a className={classes.iconinsta} href="#"> <i className={"fa fa-instagram"}></i></a>
            </div>
        </Row>
        <Row>
           
        </Row>
        </Container>
    </div>
    );
}

export default footer;
