import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import classes from "./Aboutus.module.css";
import {FadeInUp, FadeInRight} from 'animate-components';
import Timer from '../Timer';

const aboutus = (props) => {
    return (
        <>
<Container fluid>
            <div className="d-flex justify-content-center">
                <Timer/>
            </div>
            <h1 className={classes.mid} style={{color: '#dadada'}}>About US</h1>
            <Row className={classes.credenz}>
                <Col className={classes.content} sm={8}>
                   <FadeInUp duration="1s" timingFunction="ease-out"> <h3 className={classes.mid}>Credenz</h3>
                    <p>Credenz is the annual technical festival organised by the PICT IEEE Student Branch.
                    Started in 2004, with a view to elicit the best out of each and every one, it has grown to
                    become one of the finest technical events in Pune. Credenz aims not only to infuse a competitive
                    spirit among participants, but also widen their horizons in the ever-changing field of technology
                via myriad seminars and workshops. <br />
                Participants get a chance to discover their talents and thrive in numerous events like Clash,
                B Plan, RoboLIGA, WebWeaver, Pixelate, Cretronix, Paper Presentation and DataWiz. This is a
                unique chance for the students to go beyond the traditional spheres of academics and make the most
                of their potential. This spirit of learning and discovery has inspired the PICT IEEE Student Branch
                to present Credenz , a podium for you to nurture and cultivate your talents.</p>
                </FadeInUp>
                </Col>
                <Col className={classes.logo_pos} sm={4}>
                    <img className={classes.img_size_cred} alt="black" src={require('../../../assests/img/final-logo.png')} />

                </Col>
            </Row>
            <Row className={classes.pisb}>
                <Col className={classes.logo_pos} sm={4}>
                    <img className={classes.img_size_pisb} alt="pisbdark" src={require('../../../assests/img/pisb.png')} />
                </Col>
                <Col className={classes.content} sm={8}>
                   <FadeInUp duration="1s" timingFunction="ease-out"> <h3 className={classes.mid}>PICT IEEE Student Branch (PISB)</h3>
                    <p> PICT IEEE Student Branch (PISB) was established in the year 1988 with an aim of
                    inculcating a sense of technical awareness amongst its student members. PISB aims to
                    escalate the knowledge and trends in the diverse fields of technologies amongst its members.
                    PISB upholds two major events every year - Credenz and Credenz Tech Dayz with the first one
                    being conducted in odd semester and the latter one in even semester. PISB is also marked by
                    its Women in Engineering (WIE) chapter, an initiative for empowerment of women.</p>
                    </FadeInUp>
                </Col>
            </Row>
        </Container >                    
        </>       
    );
}

export default aboutus;
