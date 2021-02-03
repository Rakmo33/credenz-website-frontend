import React, {Component} from 'react';
import {Ippopay} from 'react-ippopay';
import axios from 'axios';

function getOrderID(amount){
    axios({
        method: "post",
        url: 'https://public_key:secret_key@api.ippopay.com/v1/order/create',
        body: {
            "amount": amount,
            "currency": "INR",
            "payment_modes": "cc,dc,nb,upi" ,
            "customer": {
              "name": "Sakshee",
              "email": "sakshee1120@gmail.com",
              "phone": {
                    "country_code": 91 ,
                    "national_number": 9420324462
                }
              }
        },
        auth: {
            username: 'pk_test_PMTwU39TjbUC',
            password: 'sk_test_UYkRAbTh1082YnTIIFNy1NMgBUafLbTZ2tzoRhru'
          }
      }).then((response)=>{
          alert(JSON.stringify(response.data))
          console.log(JSON.stringify(response.data))
      })
}

/*username: 'pk_live_LxGuVR5mwBuy',
            password: 'sk_live_eaSKsfOhheBG4PiKerw9ihnwLc84WYLKc2I9IL4u'*/

class Ipay extends Component {
  
    state = {
    ippopayOpen: false,
    order_id:'order_FUkzruXUJ',
    public_key:'pk_test_PMTwU39TjbUC'
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
          {/*
        <span onClick={e => this.ippopayOpen(e)}>IppoPay</span>
        <Ippopay ippopayOpen={this.state.ippopayOpen} ippopayClose={true} order_id={this.state.order_id} public_key={this.state.public_key}/>*/}
        <button onClick={getOrderID}>pay</button>
      </div> 
    );
  }
}

export default Ipay;