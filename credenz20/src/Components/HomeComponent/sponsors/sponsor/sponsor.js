import React from 'react';
import classes from '../sponsors.module.css';


const sponsor =(props)=>{
    return(
        <div style={{textAlign:'center'}}>
            <div ><img className={classes.sponsor} src={require('../../sponsors/img/'+props.url)}/></div>
            <span>{props.children}</span>
        </div>
    );
}

export default sponsor;