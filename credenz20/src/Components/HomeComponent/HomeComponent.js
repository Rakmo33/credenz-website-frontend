import React from 'react';
import Aboutus from './Aboutus/Aboutus';
import Sponsors from "./sponsors/sponsors";
import HomeAnimation from './HomeAnimation/HomeAnimation';
import SideEventButton from '../sideEventButton/sideEvent';
import Footer from '../Footer/footer';
import classes from './HomeComponent.module.css';

const Home=()=> {
    return(
        <div>
            <div className={classes.body}>
            <h1>Credenz Home Page</h1>
                <HomeAnimation/>
                <Aboutus id="Aboutus" />
                <Sponsors/>
            </div>
            <SideEventButton />
            <Footer/>
        </div>
    );
}

export default Home;