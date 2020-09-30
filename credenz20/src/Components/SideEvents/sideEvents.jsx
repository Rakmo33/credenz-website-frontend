import React, { useState } from 'react';
import Leaderboard from './leaderboard';

const SideEvents = () => {

    const [select, setSelect]=useState("Play") ;

  const handleSelect = (select) => {
      setSelect(select);
      
  }

    return ( 
        <div className="container-fluid con">
            <div className="row head">
              <div className="col-xl-10 col-md-10 ">
                <div className="row nav" style={{height:"100%"}}>
                   <div className={select ==="Play"?"col-xl-6 tab select":"col-xl-6 tab"} ><h1 onClick={()=>handleSelect("Play")}>
                       Side Events
                   </h1></div>
                   <div className={select ==="Leaderboard"?"col-xl-6 tab select":"col-xl-6 tab"} ><h1 onClick={()=>handleSelect("Leaderboard")}>
                       Leaderboard
                   </h1></div>
                </div>
              </div>
        </div>

        {select==="Play"? "":<Leaderboard/>}

        </div>
     );
}
 
export default SideEvents;