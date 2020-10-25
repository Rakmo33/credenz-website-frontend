import React from 'react';
import classes from './Member.module.css';
import Card from 'react-bootstrap/Card';
// import '../../assests/img/'
const member =(props)=>{
    return(
        <div >
            <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={require('../../assests/img/bg1.jpg')} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
            </Card>
        </div>
    );
}

export default member;