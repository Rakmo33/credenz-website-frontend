import React from 'react';
import Aboutus from './Aboutus/Aboutus';
import Sponsors from "./sponsors/sponsors";
import HomeAnimation from './HomeAnimation/HomeAnimation';

const Home=()=> {
    return(
        <div>
            <h1>Credenz Home Page</h1>
            <HomeAnimation/>
            <Aboutus/>
            <Sponsors/>
        </div>
    );
}

export default Home;