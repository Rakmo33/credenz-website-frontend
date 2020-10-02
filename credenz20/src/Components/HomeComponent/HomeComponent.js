import React from 'react';
import Aboutus from './Aboutus/Aboutus';
import Sponsors from "./sponsors/sponsors";
import HomeAnimation from './HomeAnimation/HomeAnimation';
import SideEvent from '../sideEventButton/sideEvent';
import Footer from '../Footer/footer';

const Home=()=> {
    return(
        <div>
            <SideEvent/>
            <h1 style={{color: "ivory"}}>Credenz Home Page</h1>
            <HomeAnimation/>
            <Aboutus id="Aboutus" />
            <Sponsors/>
            <Footer/>
        </div>
    );
}

export default Home;