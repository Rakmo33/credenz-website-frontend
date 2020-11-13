import React from "react";
import classes from "./Member.module.css";
import Card from "react-bootstrap/Card";
// import '../../assests/img/team/'
const member = (props) => {
  return (
    <Card className={classes.member}>
      <Card.Img 
        variant='top'
        src={require("../../assests/img/team/" + props.url)}
        className={classes.image}
      />
      {/* <img src={require('../../assests/img/team/' + props.url)}  /> */}
      <Card.Body className={classes.teamCardBody}>
        <Card.Title>
          {" "}
          <h5>{props.name}</h5>
        </Card.Title>
        {/* <Card.Title>{props.pos}</Card.Title> */}
        <h4 className={classes.icon}>
          <a href={props.link} target='_blank' rel='noopener noreferrer'>
            <i className='fa fa-linkedin'></i>
          </a>
        </h4>
      </Card.Body>
    </Card>
  );
};

export default member;
