import React, { Component } from 'react';
import Table from './table';

const Leaderboard = () => {
    return (  
        <div className="row" style={{justifyContent:"center"}}>
            <div className="col-xl-9 col-md-9 mt-4">
                <div className="row" style={{height:"15vh",border:"2px solid black"}}></div>
                <div className="row body" style={{border:"2px solid black",justifyContent:"center"}}>
                   <Table/>
                </div>
            </div>
        </div>
    );
}
 
export default Leaderboard;
