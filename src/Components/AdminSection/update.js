import React, {Component, useState} from 'react';
import Form from 'react-bootstrap/Form';
import {Container, Button} from 'react-bootstrap';
import axios from 'axios';

class Update extends Component{

    constructor(props) {
        super(props);

        this.state = {
            headline : '',
            info : '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {

        console.log("Inputchange")
        
        const target = event.target;
        if(target) {
            console.log("Inside if")
            const value = target.value;
            const name = target.name;
            this.setState({
                [name]: value
            });
        }
        else {
            console.log("event is null")
        }
    }

    handleSubmit(event) {

        event.preventDefault();

        console.log("Current state is : " + JSON.stringify(this.state))
        alert("Current state is : " + JSON.stringify(this.state))

        const token = localStorage.getItem("token")

        try {
            axios({
                method: "post",
                url: `http://credenzwebsite.herokuapp.com/addupdate`,
                headers: { authorization: `Bearer ${token}` },
                body: {
                    headline: this.state.headline,
                    info: this.state.info
                }
              })
              .then(function (response) {
                alert("Form successfully submitted.");
                console.log(response);
                console.log(response.data);
              });
          } catch (e) {
            alert("Axios error!" + e);
          }

       
    }

    
   
    addUpdate=()=>{

        

        return(
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Label>Update headline</Form.Label>
                    <Form.Control id="headline" type="text"
                    placeholder="Enter Event Name"
                    name="headline" 
                    onChange={this.handleInputChange}
                    value={this.state.headline} />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Update info</Form.Label>
                    <Form.Control id="info"
                    onChange={this.handleInputChange}
                    value={this.state.info}
                    name="info" 
                    as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        );
    }

    editUpdate=()=>{
        return(
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Label>Event Name</Form.Label>
                    <Form.Control id="headline" type="text"
                    placeholder="Enter Event Name"
                    name="headline" 
                    onChange={this.handleInputChange}
                    value={this.state.headline} />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Event details </Form.Label>
                    <Form.Control id="info"
                    onChange={this.handleInputChange}
                    value={this.state.info}
                    name="info" 
                    as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        );
    }

    render(){
        let form=null;

        if(this.props.choice==='1'){
            form=this.addUpdate();
        } else{
            form= this.editUpdate();
        }
        return(
            <Container>
                {form}
            </Container>
        );
    }
}

export default Update;