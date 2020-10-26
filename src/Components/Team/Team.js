import React from 'react';
import Member from '../Team/Member';
import {Container, Row, Col} from 'react-bootstrap';
const team =()=>{
    return(
       <Container>
           <Row style={{display:"flex"}}>
               <Col sm={12}><Member/></Col>
               <Col sm={12}><Member/></Col>
               <Col sm={12}><Member/></Col>
               <Col sm={12}><Member/></Col>
           </Row>
       </Container>
    );
}

export default team;