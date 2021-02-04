import React, {Component} from 'react';
import {Ippopay} from 'react-ippopay';
import jwt from "jwt-decode";

class Ipay extends Component {
  
    state = {
    ippopayOpen: false,
    order_id:'',
    public_key: 'pk_live_LxGuVR5mwBuy'
  };

  ippopayHandler(e){
    if(e.data.status === 'success'){
        console.log("success" + e.data);
        this.props.Register();
    }
    if(e.data.status === 'failure'){
        console.log("failure" + e.data)
    }
  }
  componentDidUpdate(){
    window.addEventListener('message', this.ippopayHandler);
  }
  componentDidMount(){
    let user = "";
    if (localStorage.getItem("user")) {
      user = jwt(localStorage.getItem("user"));
    }
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        username: localStorage.getItem("user") ? JSON.stringify(user["username"]).replace(/"/g, "") : '',
        amount: this.props.sum,
        email: localStorage.getItem("user") ? JSON.stringify(user["email"]).replace(/"/g, "") : '',
        phoneno: localStorage.getItem("user") ? JSON.stringify(user["phoneno"]).replace(/"/g, "") : ''
       })
    };

    fetch(`${process.env.REACT_APP_API_URL}/payment`, requestOptions)
        .then(response => {
          //alert(JSON.stringify(response))
          return response.json()
        })
        .then(data => {
          //alert(JSON.stringify(data.data.order.order_id))
          //alert("orderid" + data)
          console.log(data)
          this.setState({order_id: data.data.order.order_id})
        });

  //          alert("orderid" + this.props.order_id)
  }

  ippopayOpen(){
    this.setState({ippopayOpen: true});
  }

  
  render() {

    if(this.state.order_id!=='' || this.state.order_id!==undefined) {
      console.log(this.state.order_id)
      return (
        
        <div>
          <span onClick={e => this.ippopayOpen(e)}>Proceed to pay Rs {this.props.sum}</span>
          <Ippopay ippopayOpen={this.state.ippopayOpen} ippopayClose={true} order_id={this.state.order_id} public_key={this.state.public_key}/>
        </div> 
      );
      
    }else {
      return(
        <div>
          Payment request being processed
        </div>
      ); 
    }
    
  }
}


export default Ipay;