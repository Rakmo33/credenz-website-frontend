import React from 'react';
import { Fab } from '@material-ui/core';
import classes from './sideEvent.module.css';
// import AddIcon from '@material-ui/icons/Add';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const sideEvent = () =>{
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      SideEvents awaiting!!
    </Tooltip>
  );
  return(
    <OverlayTrigger
    placement="right"
    delay={{ show: 250, hide: 400 }}
    overlay={renderTooltip} >
      <Fab className={classes.fab} color="primary" aria-label="add">
      {/* <AddIcon/> */}
      </Fab>
    </OverlayTrigger>
  );
}

export default sideEvent;