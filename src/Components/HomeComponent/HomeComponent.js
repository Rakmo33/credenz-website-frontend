import React from 'react';
import Aboutus from './Aboutus/Aboutus';
import Sponsors from "./sponsors/sponsors";
import HomeAnimation from './HomeAnimation/HomeAnimation';
import SideEventButton from '../sideEventButton/sideEvent';
import Footer from '../Footer/footer';
import classes from './HomeComponent.module.css';
import Timer from './Timer';
import AdminEvent from '../AdminSection/event';
const Home=()=> {
    return(
        <div>
            <div className={classes.body}>
            <h1 style={{color: "ivory"}}>Credenz Home Page</h1>
            <HomeAnimation/>
            <div className="d-flex justify-content-center">
                <Timer/>
            </div>
            <Aboutus id="Aboutus" />
            <div className={classes.sponsor}> < Sponsors /></div>   
            </div>
            <SideEventButton />
            <Footer/>
            <AdminEvent/>
        </div>
    );
}

export default Home;