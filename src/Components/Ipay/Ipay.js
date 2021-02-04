import React, { Component, useState, useEffect } from "react";
import { Ippopay } from "react-ippopay";
import jwt from "jwt-decode";

const Ipay = (props) => {
  const [isIppopayOpen, setIsIppoPayOpen] = useState(false);
  const [order_id, setOrder_id] = useState("");
  const [public_key, setPublic_key] = useState("pk_live_LxGuVR5mwBuy");
  // state = {
  //   ippopayOpen: false,
  //   order_id: "",
  //   public_key: "pk_live_LxGuVR5mwBuy",
  // };

  const ippopayOpen = () => {
    // this.setState({ ippopayOpen: true });
    setIsIppoPayOpen(true);
    // props.Register();
    // this.props.Register();
  };
  const ippopayHandler = (e) => {
    if (e.data.status === "success") {
      console.log("success" + e.data);
      props.Register();
    }
    if (e.data.status === "failure") {
      console.log("failure" + e.data);
    }
  };

  useEffect(() => {
    window.addEventListener("message", ippopayHandler);
  });

  useEffect(() => {
    let user = "";
    if (localStorage.getItem("user")) {
      user = jwt(localStorage.getItem("user"));
    }
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: localStorage.getItem("user")
          ? JSON.stringify(user["username"]).replace(/"/g, "")
          : "",
        amount: props.sum,
        email: localStorage.getItem("user")
          ? JSON.stringify(user["email"]).replace(/"/g, "")
          : "",
        phoneno: localStorage.getItem("user")
          ? JSON.stringify(user["phoneno"]).replace(/"/g, "")
          : "",
      }),
    };
    fetch(`${process.env.REACT_APP_API_URL}/payment`, requestOptions)
      .then((response) => {
        //alert(JSON.stringify(response))
        return response.json();
      })
      .then((data) => {
        //alert(JSON.stringify(data.data.order.order_id))
        //alert("orderid" + data)
        console.log(data);
        setOrder_id(data.data.order.order_id);
        // this.setState({ order_id: data.data.order.order_id });
      });
  }, []);
  // let componentDidUpdate = ()  => {
  //   window.addEventListener("message", this.ippopayHandler);
  // }
  // let componentDidMount = () => {
  //   let user = "";
  //   if (localStorage.getItem("user")) {
  //     user = jwt(localStorage.getItem("user"));
  //   }
  //   const requestOptions = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       username: localStorage.getItem("user")
  //         ? JSON.stringify(user["username"]).replace(/"/g, "")
  //         : "",
  //       amount: this.props.sum,
  //       email: localStorage.getItem("user")
  //         ? JSON.stringify(user["email"]).replace(/"/g, "")
  //         : "",
  //       phoneno: localStorage.getItem("user")
  //         ? JSON.stringify(user["phoneno"]).replace(/"/g, "")
  //         : "",
  //     }),
  //   };

  //   fetch(`${process.env.REACT_APP_API_URL}/payment`, requestOptions)
  //     .then((response) => {
  //       //alert(JSON.stringify(response))
  //       return response.json();
  //     })
  //     .then((data) => {
  //       //alert(JSON.stringify(data.data.order.order_id))
  //       //alert("orderid" + data)
  //       console.log(data);
  //       this.setState({ order_id: data.data.order.order_id });
  //     });

  //   //          alert("orderid" + this.props.order_id)
  // }

  // render() {
  if (order_id !== "" || order_id !== undefined) {
    console.log(order_id);
    return (
      <div>
        <span onClick={(e) => ippopayOpen(e)}>
          Proceed to pay Rs {props.sum}
        </span>
        <Ippopay
          ippopayOpen={isIppopayOpen}
          ippopayClose={true}
          order_id={order_id}
          public_key={public_key}
        />
      </div>
    );
  } else {
    return <div>Payment request being processed</div>;
  }
  // }
};

export default Ipay;
