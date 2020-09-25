import React, { Component, useReducer, useState } from "react";
import "./leaderboard.css";

const Table = () => {
  const [users] = useState([
    {
      rank: 1,
      name: "xyz",
      college: "pict",
      score: 200,
    },
    {
      rank: 1,
      name: "xyz",
      college: "pict",
      score: 200,
    },
    {
      rank: 1,
      name: "xyz",
      college: "pict",
      score: 200,
    },
    {
      rank: 1,
      name: "xyz",
      college: "pict",
      score: 200,
    },
    {
        rank: 1,
        name: "xyz",
        college: "pict",
        score: 200,
      },
      {
        rank: 1,
        name: "xyz",
        college: "pict",
        score: 200,
      },
      {
        rank: 1,
        name: "xyz",
        college: "pict",
        score: 200,
      },
      {
        rank: 1,
        name: "xyz",
        college: "pict",
        score: 200,
      },
      {
        rank: 1,
        name: "xyz",
        college: "pict",
        score: 200,
      },
      {
        rank: 1,
        name: "xyz",
        college: "pict",
        score: 200,
      },
      {
        rank: 1,
        name: "xyz",
        college: "pict",
        score: 200,
      },
      {
        rank: 1,
        name: "xyz",
        college: "pict",
        score: 200,
      },
      {
        rank: 1,
        name: "xyz",
        college: "pict",
        score: 200,
      },
      {
        rank: 1,
        name: "xyz",
        college: "pict",
        score: 200,
      },
      {
        rank: 1,
        name: "xyz",
        college: "pict",
        score: 200,
      },
      {
        rank: 1,
        name: "xyz",
        college: "pict",
        score: 200,
      },
  ]);
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Rank</th>
          <th scope="col">Username</th>
          <th scope="col">Institution</th>
          <th scope="col">Score</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr>
            <td>{user.rank}</td>
            <td>{user.name}</td>
            <td>{user.college}</td>
            <td>{user.score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
