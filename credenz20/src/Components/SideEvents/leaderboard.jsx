import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component, useState } from "react";
import Table from "./table";

const Leaderboard = () => {
  const [input, setInput] = useState("");
  const [default_op, setDefault] = useState("Username");
  const [classes, setClasses] = useState("");
  let users = [
    {
      rank: 1,
      name: "abc",
      college: "pict",
      score: 200,
    },
    {
      rank: 1,
      name: "def",
      college: "pict",
      score: 200,
    },
    {
      rank: 1,
      name: "ghi",
      college: "pict",
      score: 200,
    },
    {
      rank: 1,
      name: "gg",
      college: "pict",
      score: 200,
    },
    {
      rank: 1,
      name: "as",
      college: "pict",
      score: 200,
    },
    {
      rank: 1,
      name: "tp",
      college: "pict",
      score: 200,
    },
    {
      rank: 1,
      name: "sl",
      college: "pict",
      score: 200,
    },
    {
      rank: 1,
      name: "ko",
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
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const handleClick = (e) => {
    if (classes === "") setClasses("active");
    else setClasses("");
  };

  const handleSelect = (e) => {
    var text = e.target.innerHTML;

    setDefault(text);
    setClasses("");
  };

  if (input.length > 0) {
    switch (default_op) {
      case "Username":
        users = users.filter((u) => {
          return u.name.match(input);
        });
        break;
      case "Institute":
        users = users.filter((u) => {
          return u.college.match(input);
        });
        break;
      case "Score":
        users = users.filter((u) => {
          return u.score.match(input);
        });
        break;
    }
  }

  return (
    <div
      className="row"
      style={{ justifyContent: "center", marginBottom: "20px" }}
    >
      <div className="col-xl-9 col-md-9  mt-4">
        <div className="row leaderboard-head">
          <div className="search-box">
            <input
              type="text"
              id="search"
              placeholder="Search"
              onChange={handleSearch}
              value={input}
            ></input>
            <div className="dropdown">
              <div className="default" onClick={handleClick}>
                {default_op}
              </div>
              <ul className={classes}>
                <li onClick={handleSelect}>Username</li>
                <li onClick={handleSelect}>Institute</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row body">
          <Table users={users} />
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
