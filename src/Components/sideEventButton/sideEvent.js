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
    <div>
        <nav className={classes.social}>
            <ul>
                <li><a href="https://www.linkedin.com/company/pisbieee/">Linkedin <i className={"fa fa-linkedin linkedin"}></i></a></li>
                <li><a href="https://www.instagram.com/pisbcredenz/">Instagram <i className={"fa fa-instagram"}></i></a></li>
                <li><a href="https://www.facebook.com/pisbcredenz/">Facebook <i className={"fa fa-facebook"}></i></a></li>
            </ul>
        </nav>
    </div>
  );
}

export default sideEvent;