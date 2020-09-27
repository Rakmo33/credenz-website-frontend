import React from 'react';
import { Fab } from '@material-ui/core';
import classes from './sideEvent.module.css';
// import AddIcon from '@material-ui/icons/Add';

const sideEvent = () =>{
    return(
       <Fab className={classes.fab} color="primary" aria-label="add">
       {/* <AddIcon/> */}
     </Fab>
    );
}

export default sideEvent;