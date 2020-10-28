import React, {Component} from 'react';
import {Row,Col,Container} from 'react-bootstrap';

class Admin extends Component{
   
    render(){
        return(
            <Container>
                <Row>
                    <Col>
                        <din>
                            <input type="submit" class="btn btn-primary">Add Event</input>
                        </din>
                    </Col>
                    <Col>
                        <din>
                            <input type="submit" class="btn btn-primary">Edit Event</input>
                        </din>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <din>
                            <input type="submit" class="btn btn-primary">Add Update</input>
                        </din>
                    </Col>
                    <Col>
                        <din>
                            <input type="submit" class="btn btn-primary">Edit Update</input>
                        </din>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Admin;