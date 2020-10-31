import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import {Container, Button} from 'react-bootstrap';

class Update extends Component{

    addUpdate=()=>{
        return(
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
        );
    }

    editUpdate=()=>{
        return(
            <Form>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control id="name" type="text" onChange={this.onChangeHandler} placeholder="Enter Event Name" />
                </Form.Group>
                {/* <Form.Group >
                    <Form.Label><particpant/Form.Label>
                    <Form.Control id="participant" onChange={this.onChangeHandler} type="number" placeholder="count of participants" />
                </Form.Group> */}
                <Form.Group >
                    <Form.Label>update details </Form.Label>
                    <Form.Control id="details" onChange={this.onChangeHandler} as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={this.onSubmitHandler}>
                    Submit
                </Button>
            </Form>
        );
    }

    addUpdate=()=>{
        return(
            <Form>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control id="name" type="text" onChange={this.onChangeHandler}  placeholder="Enter Event Name" />
                </Form.Group>
                {/* <Form.Group >
                    <Form.Label><particpant/Form.Label>
                    <Form.Control id="participant" onChange={this.onChangeHandler} type="number" placeholder="count of participants" />
                </Form.Group> */}
                <Form.Group >
                    <Form.Label>update details </Form.Label>
                    <Form.Control id="details" onChange={this.onChangeHandler}  as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={this.onSubmitHandler}>
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