import React from 'react';
import Member from '../Team/Member';
import {Container, Row, Col} from 'react-bootstrap';
const team =()=>{
    return(
       <Container fluid>
           <Row style={{justifyContent: "center"}}>
               <Member  
                            name={"Aditi Shrivastav"}
                            url={'aditi.jpeg'} 
                            pos={"Web Master"}
                            link={"https://www.linkedin.com/in/aditi-srivastava-a6046818a/"}/>
              
               <Member
                            name={"Fatema Katawala"}
                            url={'fsk6.jpg'}
                            pos={"Web Master"}
                            link={"https://www.linkedin.com/in/fatema-katawala-2b99451a1/"}/>
            
               <Member
                            name={"Gaurav Ghati"}
                            url={'gaurav2.jpeg'}
                            pos={"Web Master"}
                            link={"https://www.linkedin.com/in/gauravghati/"}/>
             <Member
                            name={"Omkar Dabir"}
                            url={'dabir.jpeg'}
                            pos={"Web Master"}
                            link={"https://www.linkedin.com/in/coderdabir/"}/>
               {/* <Col md={3}><Member
                            name={"Member 4"}
                            pos={"Web Master"}
                            link={"#"}/>
                </Col> */}
           </Row>
           <Row style={{justifyContent: "center"}}>
               <Member  
                            name={"Sakshee Phade"}
                            url={'sakshee.jpeg'}
                            pos={"Web Master"}
                            link={"https://www.linkedin.com/in/saksheephade/"}/>
                <Member
                            name={"Sanket Landge"}
                            url={'bg2.jpg'}
                            pos={"Web Master"}
                            link={"https://www.linkedin.com/in/sanket-landge-293996194/"}/>
               <Member
                            name={"Shreya Deshpande"}
                            url={'shreya.jpg'}
                            pos={"Web Master"}
                            link={"https://www.linkedin.com/in/shreya-deshpande-420297191/"}/>
            
               <Member
                            name={"Yash Sonar"}
                            url={'bg2.jpg'}
                            pos={"Web Master"}
                            link={"https://www.linkedin.com/in/yash-sonar-b89265176/"}/>
           
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