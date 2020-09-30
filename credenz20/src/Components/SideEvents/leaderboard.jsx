import React, { Component } from "react";
import Table from "./table";

const Leaderboard = () => {
  return (
    <div
      className="row"
      style={{ justifyContent: "center" ,marginBottom:"20px"}}
    >
      <div className="col-xl-9 col-md-9 mt-4">
        <div
          className="row leaderboard-head"
        ></div>
        <div
          className="row body"
        >
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
