import React from 'react';
import classes from './sideEvent.module.css';
// import AddIcon from '@material-ui/icons/Add';
//import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
//import Tooltip from 'react-bootstrap/Tooltip';

// const sideEvent = () =>{
//   const renderTooltip = (props) => (
//     <Tooltip id="button-tooltip" {...props}>
//       SideEvents awaiting!!
//     </Tooltip>
//   );
//   return(
//     <OverlayTrigger
//     placement="right"
//     delay={{ show: 250, hide: 400 }}
//     overlay={renderTooltip} >
//       <Fab className={classes.fab} color="primary" aria-label="add">
//       {/* <AddIcon/> */}
//       </Fab>
//     </OverlayTrigger>
//   );
// }

const sideEvent = (props)=>{
  return(
    <>
    <div>
        <nav className={classes.social}>
            <ul>
                <li ><a className={classes.in} href="https://www.linkedin.com/company/pisbieee/"> </a></li>
                <li ><a className={classes.ig} href="https://www.instagram.com/pisbcredenz/"></a></li>
                <li ><a className={classes.fb} href="https://www.facebook.com/pisbcredenz/"></a></li>
            </ul>
        </nav>
        {/* <img src="socio.png" /> */}
        {/* <nav className={classes.social} >
          <ul>
            <li><img src={require("./fb.svg")} style={{width:"30%"}} /></li>
            <li><img src={require("./ig.svg")} style={{width:"30%"}} /></li>
            <li><img src={require("./in.svg")} style={{width:"30%"}} /></li>
          </ul>
        </nav> */}
       
    </div>
    <div>
          <ul style={{float:'right'}} className={classes.socialeve}>
            <li><a className={classes.eve} href={require('../EventsComponent/EventsComponent')}></a></li>
          </ul>
    </div>
</>
  );
}

export default sideEvent;