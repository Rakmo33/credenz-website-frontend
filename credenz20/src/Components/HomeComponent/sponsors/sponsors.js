import React from "react";
import classes from './sponsors.module.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const sponsors =(props)=>{
    return(
    <div className={classes.mid}>
        <h2 >Our Sponsors</h2>
    
        <Carousel
  additionalTransfrom={0}
  arrows
  autoPlay
  autoPlaySpeed={1000}
  centerMode={false}
  className=""
  containerClass="container-with-dots"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 5,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }}
  showDots={false}
  sliderClass=""
  slidesToSlide={2}
  swipeable >

  <div><img src={require('./img/aarnell.png')}/></div>
  <div><img src={require('./img/avaya.jpg')}/></div>
  <div><img src={require("./img/Byju's2.jpg")}/></div>
  <div><img src={require('./img/c3.jpg')}/></div>
  <div><img src={require('./img/codechef.jpg')}/></div>
  <div><img src={require('./img/finiq2.png')}/></div>
  <div><img src={require('./img/ims2.jpg')}/></div>
  <div><img src={require('./img/interview3.jpg')}/></div>
  <div><img src={require('./img/tcs.png')}/></div>
  </Carousel>
</div>
    );
}

export default sponsors;

