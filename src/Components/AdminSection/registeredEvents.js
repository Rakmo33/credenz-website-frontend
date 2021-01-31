import React, { useState, useEffect } from "react";

const RegisteredEvents = (props) => {
  console.log(props.eveList);

  //   if (props.eveList[0]) console.log(props.eveList.toObject());
  const [dataLoaded, setDataLoaded] = useState(true);

  //   setTimeout(() => {
  //     // props.eveList.forEach((item) => {
  //     //   console.log(item);
  //     // });
  //     // console.log(props.eveList.length);

  //     setDataLoaded(true);
  //   }, 10000);
  // console.log(props.eveList[15]);

  useEffect(() => {
    // console.log("LOLOLOO");
    // console.log(props.eveList);
  });

  if (props.eveList !== undefined) {
    return dataLoaded ? (
      props.eveList.map((item, index) => {
        if (item.message !== "Registration Not Found") {
          return (
            <tr key={index}>
              <th scope='row'>{index + 1}</th>
              <td>{`${item.event_username} ${item.random_pw}`}</td>
            </tr>
          );
        } else return null;
      })
    ) : (
      <tr>
        <td>{`NULLL`}</td>
      </tr>
    );
  } else {
    return <tr>no events listed</tr>;
  }
};

export default RegisteredEvents;
