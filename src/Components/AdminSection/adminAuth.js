import React , {Component} from 'react';
import { Row, Col, Container } from "react-bootstrap";
import Admin from './Admin';
import Alert from '../Alert/alert';

class AdminAuth extends Component {
 constructor(props){
    super(props);
    this.state = {
        showAdmin: false,
        adminPass:"secretpassword",
        userpass:"",
        showAlert:true
    }

    this.onSubmit = this.onSubmit.bind(this);
 }

    onChangeHandler =(event)=>{
        const target = event.target;
        if(target.id === 'adminpass'){
            this.setState(prevState=>({
                ...prevState.userpass,
                userpass:target.value
            }));
        }
    }  

    onSubmit = () =>{
        if(this.state.userpass === this.state.adminPass){
            this.setState({showAdmin:true, showAlert:false});
        }else{
            this.setState({showAlert:true});
        }
    }

  render(){

      return(
      <div style={{marginTop:'20vh', padding:"20px"}}>
          { this.state.showAlert ? <Alert show={this.state.showAlert} var={"danger"} >hi</Alert> : null}
          { this.state.showAdmin ? <Admin/> : 
          <Container>
              <Row>
              <form >    
            <div className='form-group'>
                <h2>Enter Password to Proceed</h2>
              <div className='input-group'>
                
                <input
                  type='text'
                  className='form-control'
                  id="adminpass"
                  name='password'
                  placeholder='Password'
                  required='required'
                  onChange={this.onChangeHandler}
                />
              </div>
            </div>
            
            {/* <div className='form-group'> */}
            <div >
              <button
                type='submit'
                className='btn btn-success btn-lg'
                onClick={()=> this.onSubmit()}>
                Submit
              </button>
              <span></span>
            </div>
          </form>
              </Row>
          </Container> }
      </div>);
  }

}

export default AdminAuth;