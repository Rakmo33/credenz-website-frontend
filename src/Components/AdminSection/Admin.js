import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import AdminEvent from "./event";
import AdminUpdate from "./update";
import classes from "./Admin.module.css";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addeve: false,
      editeve: false,
      addupd: false,
      editupd: false,
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = (type) => {
    if (type === "addEvent") {
      console.log("addeve");
      this.setState({
        addeve: <AdminEvent choice={"1"} />,
        editeve: false,
        addupd: false,
        editupd: false,
      });
    } else if (type === "editEvent") {
      console.log("editeve");
      this.setState({
        editeve: <AdminEvent choice={"2"} />,
        addeve: false,
        addupd: false,
        editupd: false,
      });
    } else if (type === "addUpdate") {
      console.log("addupdate");
      this.setState({
        addupd: <AdminUpdate choice={"1"} />,
        addeve: false,
        editeve: false,
        editupd: false,
      });
    } else if (type === "editUpdate") {
      console.log("edit update");
      this.setState({
        editupd: <AdminUpdate choice={"2"} />,
        addeve: false,
        addupd: false,
        editeve: false,
      });
    }
  };

  render() {
    return (
      <Container>
        <Row>
          <div>
            <h1>Admin Section</h1>
          </div>
        </Row>
        <Row>
          <Col>
            <div>
              <button
                type='submit'
                className='btn btn-primary'
                onClick={() => this.onSubmit("addEvent")}>
                Add Event
              </button>
              {/* {this.state.addeve ? <AdminEvent/> : null} */}
              <div className={classes.formdiv}>{this.state.addeve}</div>
            </div>
          </Col>
          <Col>
            <div>
              {/* <AdminEvent choice={"2"}/> */}
              <button
                type='submit'
                className='btn btn-primary'
                onClick={() => this.onSubmit("editEvent")}>
                Edit Event
              </button>
              <div className={classes.formdiv}>{this.state.editeve}</div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              <button
                type='submit'
                className='btn btn-primary'
                onClick={() => this.onSubmit("addUpdate")}>
                Add Update
              </button>
              <div className={classes.formdiv}>{this.state.addupd}</div>
            </div>
          </Col>
          <Col>
            <div>
              <button
                type='submit'
                className='btn btn-primary'
                onClick={() => this.onSubmit("editUpdate")}>
                Edit Update
              </button>
              <div className={classes.formdiv}>{this.state.editupd}</div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Admin;