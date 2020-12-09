import React from "react";
// import classes from "./Member.module.css";
import Card from "react-bootstrap/Card";
import "./newmem.css";
// import '../../assests/img/team/'
const member = (props) => {
  return (
    // <Card className={classes.member}>
    //   <Card.Img 
    //     variant='top'
    //     src={require("../../assests/img/team/" + props.url)}
    //     className={classes.image}
    //   />
    //   {/* <img src={require('../../assests/img/team/' + props.url)}  /> */}
    //   <Card.Body className={classes.teamCardBody}>
    //     <Card.Title>
    //       {" "}
    //       <h5>{props.name}</h5>
    //     </Card.Title>
    //     {/* <Card.Title>{props.pos}</Card.Title> */}
    //     <h4 className={classes.icon}>
    //       <a href={props.link} target='_blank' rel='noopener noreferrer'>
    //         <i className='fa fa-linkedin'></i>
    //       </a>
    //     </h4>
    //   </Card.Body>
    // </Card>
    // <div class="container">
    //   <div class="row">
    //       <div class="col-md-3 col-sm-6">
              <div class="our-team">
                  <div class="pic image">
                      <img style={{ }} src={require('../../assests/img/team/' + props.url)} alt=""/>
                      <a  class="read-more icon" href={props.link} target='_blank' rel='noopener noreferrer'>
                        <i className='fa fa-linkedin'></i>
                      </a>
                      {/* <a href="#" class="read-more">read more</a> */}
                  </div>
                  <div class="team-content">
                      <h3 class="title">{props.name}</h3>
                      <span class="post">{props.pos}</span>
                  </div>
              </div>
          // </div>

          // {/* <div class="col-md-3 col-sm-6">
          //     <div class="our-team">
          //         <div class="pic">
          //             <img src="images/img-2.jpg" alt=""/>
          //             <a href="#" class="read-more">read more</a>
          //         </div>
          //         <div class="team-content">
          //             <h3 class="title">kristina</h3>
          //             <span class="post">Web Designer</span>
          //         </div>
          //     </div>
          // </div> */}
    //   </div>
    // </div>
  
  );
};

export default member;
