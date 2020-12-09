import React, { useState } from 'react';
import Leaderboard from './leaderboard';
import Social from '../sideEventButton/sideEvent';
import Footer from '../Footer/footer';
import SideEventCards from './sideEventCards';
const SideEvents = () => {

    const [select, setSelect]=useState("Play") ;

  const handleSelect = (select) => {
      setSelect(select);
      
  }

    return ( 
        <div className="container-fluid cont">
            <div className="row head">
              <div className="col-xl-10 col-md-10 ">
                <div className="row nav" style={{height:"100%",marginTop:"50px"}}>
                   <div className={select ==="Play"?"col-xl-6 tab select":"col-xl-6 tab"} ><h3 onClick={()=>handleSelect("Play")}>
                       Side Events
                   </h3></div>
                   <div className={select ==="Leaderboard"?"col-xl-6 tab select":"col-xl-6 tab"} ><h3 onClick={()=>handleSelect("Leaderboard")}>
                       Leaderboard
                   </h3></div>
                </div>
              </div>
        </div>
        <Social/>
        {select==="Play"? <SideEventCards/>:<Leaderboard/>}
        <Footer/>  
        </div>
     );
}
 
export default SideEvents;