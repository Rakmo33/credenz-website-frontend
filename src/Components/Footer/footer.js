import React from "react";
import classes from "./footer.module.css";
import "../ContactComponent/contact.css";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
// import policy from './policy.html';

const footer = () => {
  return (
    <div className={classes.footer}>
      <Container fluid
        className={classes.footerContainer}
        style={{ textAlign: "center" }}>
        <Row>
          {/* <span className={"footer-font"}> */}
          <Col lg={4} className={"footer-font leftside"}>    &#169; PICT IEEE Student Branch </Col>

          <Col lg={4} >Developed with &#9829;
            by PISB &nbsp;{" "}
            <Link to='/team'>
              <span style={{ color: "#6eabce" }}> Web Team</span>
            </Link> </Col>
          <Col lg={4} className="rightside" >
            <a href='#'>Policy</a> &nbsp; 
            <a href='#'>Terms</a> &nbsp; 
            <a href="#">Refund </a>
            </Col>
          {/* </span> */}
        </Row>

        <Row className={classes.hiddenRow}>
          <div className={classes.social}>
            <a className={classes.iconfb} href='#'>
              {" "}
              <i className={"fa fa-facebook"}></i>
            </a>
            <a className={classes.iconlink} href='#'>
              {" "}
              <i className={"fa fa-linkedin"}></i>
            </a>
            <a className={classes.iconinsta} href='#'>
              {" "}
              <i className={"fa fa-instagram"}></i>
            </a>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default footer;
