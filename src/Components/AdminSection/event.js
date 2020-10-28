import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import {Container, Button} from 'react-bootstrap';

class Event extends Component{
    state={
        shouldEdit: false,
        shouldAdd: false,
        Event:{
            name: "PISB Member here",
            participants:4,
            details:"hey there you are in the details"
        }
    }

    onChangeHandler=(event)=>{
        const target= event.target;
        // const updateEvent={
        //     ...this.state.Event
        // }
        if(target.id==='name'){
            console.log(event.target.id);
            console.log(event.target.value);
        
            this.setState(prevState=>({
                Event:{
                    ...prevState.Event,
                    name:target.value
                }
            }),()=>console.log(this.state.Event));
            ;
        }
        else if(target.id==='participant')
        {
            this.setState(prevState=>({
                Event:{
                    ...prevState.Event,
                    participants:target.value
                }
            }),()=>console.log(this.state.Event));
        } 
        else if(target.id==='details')
        {
            this.setState(prevState=>({
                Event:{
                    ...prevState.Event,
                    details:target.value
                }
            }),()=>console.log(this.state.Event));
        } 
    }

    onSubmitHandler=(e)=>{
        e.preventDefault();
        const eve= this.state.Event;
        this.setState({Event : eve});
        console.log(eve);
    }


    addEvent=()=>{
        return(<div>
            <Form>
                <Form.Group>
                    <Form.Label>Event Name</Form.Label>
                    <Form.Control id="name" type="text" onChange={this.onChangeHandler} placeholder="Enter Event Name" />
                </Form.Group>
                <Form.Group >
                    <Form.Label>No. of Participant</Form.Label>
                    <Form.Control id="participant" onChange={this.onChangeHandler} type="number" placeholder="count of participants" />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Event details </Form.Label>
                    <Form.Control id="details" onChange={this.onChangeHandler} as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={this.onSubmitHandler}>
                    Submit
                </Button>
            </Form>
        </div>);
    }

     editEvent =()=>{
        return(<div>
            <Form>
                <Form.Group >
                    <Form.Label>Event Name</Form.Label>
                    <Form.Control id="name" type="text" value={this.state.Event.name} onChange={this.onChangeHandler} placeholder="Enter Event Name" />
                </Form.Group>
                <Form.Group >
                    <Form.Label>No. of Participant</Form.Label>
                    <Form.Control id="participant" type="number" value={this.state.Event.participants} onChange={this.onChangeHandler} placeholder="count of participants" />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Event details </Form.Label>
                    <Form.Control id="details" as="textarea" value={this.state.Event.details} onChange={this.onChangeHandler} rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={this.onSubmitHandler}>
                    Submit
                </Button>
            </Form>
        </div>);
    }


    render(){


        return(<div>
            <Container>
           {this.addEvent()}
           {this.editEvent()}
           </Container>
        </div>);
    }
}

export default Event;
