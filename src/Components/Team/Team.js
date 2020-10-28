import React from 'react';
import Member from '../Team/Member';
import {Container, Row, Col} from 'react-bootstrap';
const team =()=>{
    return(
       <Container fluid>
           <Row style={{justifyContent: "center"}}>
               <Member  
                            name={"Member 1"}
                            pos={"Web Master"}
                            link={"#"}/>
              
               <Member
                            name={"Member 2"}
                            pos={"Web Master"}
                            link={"#"}/>
            
               <Member
                            name={"Member 3"}
                            pos={"Web Master"}
                            link={"#"}/>
           
               {/* <Col md={3}><Member
                            name={"Member 4"}
                            pos={"Web Master"}
                            link={"#"}/>
                </Col> */}
           </Row>
           <Row style={{justifyContent: "center"}}>
               <Member  
                            name={"Member 1"}
                            pos={"Web Master"}
                            link={"#"}/>
              
               <Member
                            name={"Member 2"}
                            pos={"Web Master"}
                            link={"#"}/>
            
               <Member
                            name={"Member 3"}
                            pos={"Web Master"}
                            link={"#"}/>
           
               {/* <Col md={3}><Member
                            name={"Member 4"}
                            pos={"Web Master"}
                            link={"#"}/>
                </Col> */}
           </Row>
       </Container>
    );
}

export default team;