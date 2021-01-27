import React, {useEffect} from "react";
// import Aboutus from "./Aboutus/Aboutus";
// import Sponsors from "./sponsors/sponsors";
import HomeAnimation from "./HomeAnimation/HomeAnimation";
import SideEventButton from "../sideEventButton/sideEvent";
import Footer from "../Footer/footer";
import classes from "./HomeComponent.module.css";
// import Timer from "./Timer";
import Nav from "../Navbar/Navbar";

const Home = () =>{
  useEffect (()=>{
    document.title=`CREDENZ LIVE | Home`;
  },[]);
  return (
    <div>
      <Nav />
      <div className={classes.body}>
        {/* <h1 style={{color: "ivory"}}>Credenz Home Page</h1> */}
        <HomeAnimation />
        {/*     
        <div id='Aboutus'>
          <Aboutus />
        </div>
        <div className={classes.sponsor}>
          {" "}
          <Sponsors />
        </div>  */}
      </div>
      <SideEventButton />
   
      <Footer />
    
    </div>
  );
};

export default Home;
