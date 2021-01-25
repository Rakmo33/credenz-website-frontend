import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import "./Modal.css";
import axios from "axios";

async function AllUpdates() {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/updates`);
  // const response = await axios.get("https://35.193.100.157/updates");

  //console.log("I am response" + response);
  const data = await response.data;
  //console.log("I am data" + JSON.stringify(data));

  // setTimeout(() => {  console.log("I am sleeping"); }, 5);

  //setTimeout(() => {  console.log("I am sleeping"); }, 5);

  return data;
}

function Modal2({ show, handleClose }) {
  const [updateList, setUpdateList] = useState("");

  useEffect(() => {
    let result = AllUpdates();

    result.then((res) => {
      var updates = [];
      for (let i = 0; i < res.length; i++) {
        if (res[i].info === undefined) updates.push("undefined");
        else updates.push(res[i].info);
      }
      setUpdateList(
        updates.map((x, index) => {
          return <li key={index}>{x}</li>;
        })
      );
    });
  }, []);

  return (
    <>
      <Modal
        dialogClassName='modal-90w'
        show={show}
        onHide={handleClose}
        aria-labelledby='contained-modal-title-vcenter'
        centered
        keyboard={false}>
        <Modal.Header className='upmodal' closeButton>
          <Modal.Title>
            {" "}
            <div>
              <h1>Updates</h1>
            </div>{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='upmodal'>
          <div>
            <ul>{updateList}</ul>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Modal2;
