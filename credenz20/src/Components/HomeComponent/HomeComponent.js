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
            <h1>Credenz Home Page</h1>
            <HomeAnimation/>
            <Aboutus/>
            <Sponsors/>
            <Footer/>
        </div>
    );
}

export default Home;