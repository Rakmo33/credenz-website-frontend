import React from 'react';
import classes from './Member.module.css';
import Card from 'react-bootstrap/Card';
// import '../../assests/img/'
const member =(props)=>{
    return(
     
            <Card className={classes.member}>
            <Card.Img variant="top" src={require('../../assests/img/bg1.jpg')} />
            <Card.Body>
                <Card.Title> <h4>{props.name}</h4></Card.Title>
                <Card.Title>{props.pos}</Card.Title>
                <h4 className={classes.icon}>
                    <a href={props.link}><i class="fa fa-linkedin"></i></a>
                </h4>
            </Card.Body>
            </Card>
            
       
    );
}

export default member;