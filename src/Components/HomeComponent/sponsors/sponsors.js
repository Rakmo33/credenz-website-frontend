import React from "react";
import "react-multi-carousel/lib/styles.css";
import { Row, Col, Container } from "react-bootstrap";
import Sponsor from "./sponsor/sponsor";

// const sponsors =(props)=>{
//     return(
//     <div className={classes.mid}>
//         <h2 >Our Sponsors</h2>

//         <Carousel
//           additionalTransfrom={0}
//           arrows={false}
//           autoPlay
//           autoPlaySpeed={1500}
//           centerMode={false}
//           className=""
//           containerClass="container-with-dots"
//           dotListClass=""
//           draggable
//           focusOnSelect={false}
//           infinite
//           itemClass=""
//           keyBoardControl
//           minimumTouchDrag={80}
//           renderButtonGroupOutside={false}
//           renderDotsOutside={false}
//           responsive={{
//             desktop: {
//               breakpoint: {
//                 max: 3000,
//                 min: 1024
//               },
//               items: 5,
//               partialVisibilityGutter: 40
//             },
//             mobile: {
//               breakpoint: {
//                 max: 464,
//                 min: 0
//               },
//               items: 1,
//               partialVisibilityGutter: 30
//             },
//             tablet: {
//               breakpoint: {
//                 max: 1024,
//                 min: 464
//               },
//               items: 2,
//               partialVisibilityGutter: 30
//             }
//           }}
//           showDots={false}
//           sliderClass=""
//           slidesToSlide={2}
//           swipeable >

//   {/* <div><img src={require('./img/aarnell.png')}/></div>
//   <div><img src={require('./img/avaya.jpg')}/></div> */}
//   <div><img src={require("./img/Byju's2.jpg")}/></div>
//   <div><img src={require('./img/c3.jpg')}/></div>
//   <div><img src={require('./img/codechef.jpg')}/></div>
//   <div><img src={require('./img/finiq2.png')}/></div>
//   <div><img src={require('./img/ims2.jpg')}/></div>
//   <div><img src={require('./img/interview3.jpg')}/></div>
//   {/* <div><img src={require('./img/tcs.png')}/></div> */}
//   </Carousel>
// </div>
//     );

const sponsors = (props) => {
  return (
    <div
      data-aos='fade-up'
      data-aos-offset='200'
      data-aos-easing='ease-in-sine'
      data-aos-duration='600'>
      <Container fluid>
        <h2 style={{ textAlign: "center", color: "#dadada" }}>Sponsors</h2>
        <Row>
          <Col md={2} sm={4}>
            <Sponsor url={"aarnell.png"}></Sponsor>
          </Col>
          <Col md={2} sm={4}>
            <Sponsor url={"avaya.jpg"}></Sponsor>
          </Col>
          <Col md={2} sm={4}>
            <Sponsor url={"Byju's2.jpg"}></Sponsor>
          </Col>
          <Col md={2} sm={4}>
            <Sponsor url={"c3.jpg"}></Sponsor>
          </Col>
          <Col md={2} sm={4}>
            <Sponsor url={"codechef.jpg"}></Sponsor>
          </Col>
          <Col md={2} sm={4}>
            <Sponsor url={"finiq2.png"}></Sponsor>
          </Col>
        </Row>
        {/* <Row>
          <Col md={2} sm={4}><Sponsor url={'ims2.jpg'}>nairobi</Sponsor></Col>
          <Col md={2} sm={4}><Sponsor url={'interview3.jpg'}>tokyo</Sponsor></Col>
          <Col md={2} sm={4}><Sponsor url={'tcs.png'}>bogata</Sponsor></Col>
          <Col md={2} sm={4}><Sponsor url={'aarnell.png'}>skyscrapper</Sponsor></Col>
          <Col md={2} sm={4}><Sponsor url={'aarnell.png'}>spain</Sponsor></Col>
          <Col md={2} sm={4}><Sponsor url={'aarnell.png'}>mint</Sponsor></Col>
      </Row> */}
      </Container>
    </div>
  );
};

export default sponsors;
