import React, {Component} from 'react';
import {Ippopay} from 'react-ippopay';
import axios from 'axios';

function getOrderID(amount){

    console.log("get order id")

    axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}/payment`,
        body: {
            username: "sakshee",
            amount: "120",
            email: "sakshee1120@gmail.com",
            phoneno: "9420324462"
        },
        headers:{
            'Content-Type': 'application/json',
        }
      }).then((response)=>{
          alert(JSON.stringify(response.data))
          console.log(JSON.stringify(response.data))
      }).catch((err)=>{
          console.log("error"+err)
      })
}

/*username: 'pk_live_LxGuVR5mwBuy',
            password: 'sk_live_eaSKsfOhheBG4PiKerw9ihnwLc84WYLKc2I9IL4u'*/

class Ipay extends Component {
  
    state = {
    ippopayOpen: false,
    order_id:'order_T4AoEoBVt',
    public_key:'pk_live_LxGuVR5mwBuy'
  };

  ippopayHandler(e){
    if(e.data.status === 'success'){
        console.log("success" + e.data)
    }
    if(e.data.status === 'failure'){
        console.log("failure" + e.data)
    }
  }
  componentDidUpdate(){
    window.addEventListener('message', this.ippopayHandler);
  }

  componentDidMount(){
    getOrderID(this.props.sum);
  }

  ippopayOpen(){
    this.setState({ippopayOpen: true});
  }
  render() {

    return (
      <div>
          
        <span onClick={e => this.ippopayOpen(e)}>Proceed to pay Rs {this.props.sum}</span>
        <Ippopay ippopayOpen={this.state.ippopayOpen} ippopayClose={true} order_id={this.state.order_id} public_key={this.state.public_key}/>
        {/*<button onClick={()=>{getOrderID(this.props.sum)}}>pay</button>*/}
      </div> 
    );
  }
}

export default Ipay;